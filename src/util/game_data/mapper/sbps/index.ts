import { fetchSbps } from '../common/fetchData';
import { traverseData } from '../common/traversingData';
import { createInitSquad } from '../../init_data_creator/initDataCreator';
import { getMissingSquadData } from './missingSquadDataTable';

import type { MissingSquadData } from './missingSquadDataTable';
import type { Squad } from '../../../../types/game_data/squad';
import type { Sbps } from '../../../../types/game_data/squad';

const mapSbps = async (): Promise<Sbps> => {
  const mappedSbps: Sbps = {};

  const sbps = await fetchSbps();

  for (const race in sbps.races) {
    if (race === 'afrika_korps' || race === 'american' || race === 'british_africa' || race === 'german') {
      for (const category in sbps.races[race]) {
        if (category === 'infantry' || category === 'team_weapons' || category === 'vehicles') {
          for (const dataName in sbps.races[race][category]) {
            const data = sbps.races[race][category][dataName];
            traverseData(data, dataName, (file, fileName) => {
              const missingSquadData = getMissingSquadData(fileName);
              if (missingSquadData.name === '') return;
              const additionalData: AdditionalData = {
                ...missingSquadData,
                category,
              };

              mappedSbps[fileName] = mapSquad(fileName, file, additionalData);
            });
          }
        }
      }
    }
  }

  return mappedSbps;
};

export default mapSbps;

interface AdditionalData extends MissingSquadData {
  category: 'infantry' | 'team_weapons' | 'vehicles' | '';
}

const mapSquad = (squadId: string, file: any, additionalData: AdditionalData): Squad => {
  const squad: Squad = createInitSquad(squadId);
  squad.name = additionalData.name;
  squad.nameKO = additionalData.nameKO;
  squad.category = additionalData.category;
  squad.filters = additionalData.filters ?? [];
  squad.ui.briefText = additionalData.briefText ?? '';
  squad.defaultWeapons = additionalData.defaultWeapons ?? [];

  if (file.extensions === undefined) {
    throw new Error(`extensions가 존재하지 않는 객체입니다. id: ${squadId}`);
  }

  for (const extension of file.extensions) {
    const { squadexts } = extension;
    const templateId = squadexts.template_reference.value.split('\\')[1];

    switch (templateId) {
      case 'squad_capture_strategic_point_ext':
        mapCaptureStrategicPoint(squad, squadexts);
        break;
      case 'squad_loadout_ext':
        mapLoadout(squad, squadexts);
        break;
      case 'squad_population_ext':
        mapPopulation(squad, squadexts);
        break;
      case 'squad_reinforce_ext':
        mapReinforce(squad, squadexts);
        break;
      case 'squad_ui_ext':
        mapUI(squad, squadexts);
        break;
      case 'squad_type_ext':
        mapType(squad, squadexts);
        break;
      case 'squad_inventory_ext':
        mapInventory(squad, squadexts);
        break;
    }
  }

  return squad;
};

const mapCaptureStrategicPoint = (squad: Squad, squadexts: any) => {
  squad.captureStrategicPoint.captureRateMutiplier = squadexts.capture_rate_multiplier;
  squad.captureStrategicPoint.revertRateMutiplier = squadexts.revert_rate_multiplier;
};

const mapLoadout = (squad: Squad, squadexts: any) => {
  for (const loadout of squadexts.unit_list) {
    const splitReferencePath = loadout.loadout_data.type.instance_reference.split('/');
    const entityId = splitReferencePath[splitReferencePath.length - 1];

    squad.loadout.push({
      //sherman_76mm_us에 num이 누락되어 있습니다. num을 계산하여 NaN이 반환되는 것을 방지하기 위해 값 1을 넣어줍니다.
      num: loadout.loadout_data.num ?? 1,
      entityId,
    });
  }
};

const mapPopulation = (squad: Squad, squadexts: any) => {
  squad.population.personnelPop = squadexts.personnel_pop;
};

const mapReinforce = (squad: Squad, squadexts: any) => {
  const { cost_percentage, time_percentage } = squadexts.time_cost_percentage;
  squad.reinforce.costPercentage = cost_percentage;
  squad.reinforce.timePercentage = time_percentage;
};

const mapUI = (squad: Squad, squadexts: any) => {
  const info = squadexts.race_list[0].race_data.info;
  const { icon_name, symbol_icon_name } = info;

  squad.imageUrl.icon = `/images/icons/${icon_name}.png`;
  squad.imageUrl.symbolIcon = `/images/icons/${symbol_icon_name}.png`;
};

const mapType = (squad: Squad, squadexts: any) => {
  const raceTypeRef = squadexts.squad_race_type_list[0].squad_race_type.instance_reference;
  const raceType = raceTypeRef.split('/')[1];
  squad.race = raceType;
};

const mapInventory = (squad: Squad, squadexts: any) => {
  const { casualty, default: defaultCap, special, upgrade } = squadexts.category_capacity;
  squad.inventory.canPickUpItems = squadexts.can_pick_up_items;
  squad.inventory.categoryCapacity.casualty = casualty;
  squad.inventory.categoryCapacity.default = defaultCap;
  squad.inventory.categoryCapacity.special = special;
  squad.inventory.categoryCapacity.upgrade = upgrade;
};
