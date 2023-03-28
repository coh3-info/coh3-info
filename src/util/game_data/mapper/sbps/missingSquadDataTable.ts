//Data 파일에서 제공하지 않는 데이터를 모아둔 표입니다.

export interface MissingSquadData {
  id: string;
  name: string;
  nameKO: string;
}

//key는 squad의 id(데이터 파일이름)입니다.
interface MissingSquadDataTable {
  [key: string]: MissingSquadData;
}

const missingSquadDataTable: MissingSquadDataTable = {
  //afrika_korps - infantry
  assault_panzergrenadier_ak: {
    id: 'assault_panzergrenadier_ak',
    name: 'Assault Grenadier Squad',
    nameKO: '강습 척탄병',
  },
  bersaglieri_ak: {
    id: 'bersaglieri_ak',
    name: 'Bersaglieri',
    nameKO: '베르살리에리',
  },
  guastatori_ak: {
    id: 'guastatori_ak',
    name: 'Guastatori Squad',
    nameKO: '이탈리아 공병 분대',
  },
  panzergrenadier_ak: {
    id: 'panzergrenadier_ak',
    name: 'Panzergrenadier Squad',
    nameKO: '기갑척탄병 분대',
  },
  panzerjaeger_inf_ak: {
    id: 'panzerjaeger_inf_ak',
    name: 'PanzerJäger Squad',
    nameKO: '기갑엽병 분대',
  },
  panzerpioneer_ak: {
    id: 'panzerpioneer_ak',
    name: 'Panzerpioneer Squad',
    nameKO: '기갑선견대',
  },

  //afrika_korps - team_weapons
  at_gun_50mm_pak_38_ak: {
    id: 'at_gun_50mm_pak_38_ak',
    name: 'Pak 38 Anti-tank Gun Team',
    nameKO: 'Pak 38 대전차포 운용반',
  },
  at_gun_88mm_mobile_ak: {
    id: 'at_gun_88mm_mobile_ak',
    name: 'Flak 36 Anti-tank Gun Team',
    nameKO: 'Flak 36 대전차포 운용반',
  },
  hmg_mg34_ak: {
    id: 'hmg_mg34_ak',
    name: 'MG34 Team',
    nameKO: 'MG34 운용반',
  },

  howitzer_cannone_da_105_ak: {
    id: 'howitzer_cannone_da_105_ak',
    name: 'Cannone da 105/28 Howitzer Team',
    nameKO: '카노네 다 105/28 곡사포 운용반',
  },
  leig_75mm_ak: {
    id: 'leig_75mm_ak',
    name: 'le.IG 18 Support Gun Team',
    nameKO: 'le.IG 18 경포 운용반',
  },

  //afrika_korps - vehicles
  armored_car_8_rad_ak: {
    id: 'armored_car_8_rad_ak',
    name: '8 Rad Armored Car',
    nameKO: '8륜 장갑차',
  },
  armored_tractor_254_ak: {
    id: 'armored_tractor_254_ak',
    name: '254 Reconnaissance Tractor',
    nameKO: '254 정찰 트랙터',
  },
  halftrack_250_20mm_ak: {
    id: 'halftrack_250_20mm_ak',
    name: '250/9 Armored Half-Track',
    nameKO: '250/9 반궤도장갑차',
  },
  halftrack_250_ak: {
    id: 'halftrack_250_ak',
    name: '250 Light Carrier',
    nameKO: '250 경수송차량',
  },
  halftrack_250_mortar_ak: {
    id: 'halftrack_250_mortar_ak',
    name: '250 Mortar_Half-Track',
    nameKO: '박격포 반궤도차량',
  },
  halftrack_251_stuka_ak: {
    id: 'halftrack_251_stuka_ak',
    name: 'Walking Stuka Rocket Launcher',
    nameKO: '워킹 슈투카 로켓 발사대',
  },
  halftrack_7_flak_ak: {
    id: 'halftrack_7_flak_ak',
    name: 'Flakvierling Half-track',
    nameKO: '플락피엘링 반궤도차량',
  },
  halftrack_recovery_ak: {
    id: 'halftrack_recovery_ak',
    name: '18-tonne Recovery Half-track',
    nameKO: '18톤 반궤도 구난장갑차',
  },
  kradschutzen_motorcycle_ak: {
    id: 'kradschuntzen_motorcycle_ak',
    name: 'Kradschützen Motorcycle Team',
    nameKO: '크라트슈첸 바이크 운용반',
  },
  l6_40_ak: {
    id: 'l6_40_ak',
    name: 'L6/40 Light Tank',
    nameKO: 'L6/40 경전차',
  },
  m13_40_ak: {
    id: 'm13_40_ak',
    name: 'Carro Armato M13/40 Light Tank',
    nameKO: '카로 아르마토 M13/40 경전차',
  },
  marder_iii_ak: {
    id: 'marder_iii_ak',
    name: 'Marder III Tank Destroyer',
    nameKO: '마르더 III 구축전차',
  },
  panzer_iii_50mm_long_ak: {
    id: 'panzer_iii_50mm_long_ak',
    name: 'Panzer III L Medium Tank',
    nameKO: '3호 L형 중형전차',
  },
  panzer_iii_flame_ak: {
    id: 'panzer_iii_flame_ak',
    name: 'Flammpanzer III Medium Tank',
    nameKO: '플람판처 3호 중형전차',
  },
  panzer_iv_ak: {
    id: 'panzer_iv_ak',
    name: 'Panzer IV Sd.Kfz. 161/1',
    nameKO: '4호전차 Sd.Kfz. 161/1',
  },
  panzer_iv_command_ak: {
    id: 'panzer_iv_command_ak',
    name: 'Command Panzer IV medium Tank',
    nameKO: '4호 중형 지휘전차',
  },
  semovente_75_18_ak: {
    id: 'semovente_75_18_ak',
    name: 'Semovente da 75/18 Assault Gun',
    nameKO: '세모벤테 다 75/18 돌격포',
  },
  stug_iii_ak: {
    id: 'stug_iii_ak',
    name: 'StuG III Assault Gun Sd.Kfz. 142',
    nameKO: '스터그 III 돌격포 Sd.Kfz. 142',
  },
  stug_iii_d_ak: {
    id: 'stug_iii_d_ak',
    name: 'StuG III D Assault Gun',
    nameKO: '스터그 III D형 돌격포',
  },
  tiger_ak: {
    id: 'tiger_ak',
    name: 'Tiger Heavy Tank',
    nameKO: '티거 중전차',
  },
  truck_2_5_ak: {
    id: 'truck_2_5_ak',
    name: '2.5-tonne Utility Truck',
    nameKO: '2.5톤 다용도 트럭',
  },
  truck_2_5_medical_ak: {
    id: 'truck_2_5_medical_ak',
    name: '2.5-tonne Medical Truck',
    nameKO: '2.5톤 의료 트럭',
  },

  //american - infantry
  assault_engineer_us: {
    id: 'assault_engineer_us',
    name: 'Assault Engineer Squad',
    nameKO: '돌격 공병',
  },
  bazooka_team_us: {
    id: 'bazooka_team_us',
    name: 'Bazooka Squad',
    nameKO: '바주카 분대',
  },
  captain_us: {
    id: 'captain_us',
    name: 'Captain Retinue',
    nameKO: '대위 분대',
  },
  engineer_us: {
    id: 'engineer_us',
    name: 'Engineer Squad',
    nameKO: '공병 분대',
  },
  paratrooper_us: {
    id: 'paratrooper_us',
    name: 'Paratrooper Squad',
    nameKO: '바주카 분대',
  },
  pathfinder_us: {
    id: 'pathfinder_us',
    name: 'Pathfinder Squad',
    nameKO: '항로선도대 분대',
  },
  riflemen_us: {
    id: 'riflemen_us',
    name: 'Riflemen Squad',
    nameKO: '소총병 분대',
  },

  scout_us: {
    id: 'scout_us',
    name: 'Scout Squad',
    nameKO: '정찰병 분대',
  },
  sniper_us: {
    id: 'sniper_us',
    name: 'Sniper',
    nameKO: '저격수',
  },
  ssf_commandos_us: {
    id: 'ssf_commandos_us',
    name: 'SSF Commando Squad',
    nameKO: 'SSF 코만도 분대',
  },

  //american - team_weapons
  at_gun_57mm_us: {
    id: 'at_gun_57mm_us',
    name: 'M1 Anti-tank Gun Team',
    nameKO: 'M1 대전차포 운용반',
  },
  hmg_30cal_us: {
    id: 'hmg_30cal_us',
    name: 'M1919 Machine Gun Team',
    nameKO: 'M1919 기관총 운용반',
  },
  mortar_81mm_us: {
    id: 'mortar_81mm_us',
    name: 'M1 Mortar Team',
    nameKO: 'M1 박격포 운용반',
  },

  //american - vehicles
  chaffee_us: {
    id: 'chaffee_us',
    name: 'M24 Chaffee Light Tank',
    nameKO: 'M24 채피 경전차',
  },
  greyhound_us: {
    id: 'greyhound_us',
    name: 'M8 Greyhound Armored Car',
    nameKO: 'M8 그레이하운드 장갑차',
  },
  halftrack_75mm_us: {
    id: 'halftrack_75mm_us',
    name: 'M3 75mm Gun Motor Carriage',
    nameKO: 'M3 75mm 주포 무장 장갑차',
  },
  halftrack_medical_us: {
    id: 'halftrack_medical_us',
    name: 'M3 Armored Medical Half-track',
    nameKO: 'M3 반궤도 구급 장갑차',
  },
  halftrack_quad_us: {
    id: 'halftrack_quad_us',
    name: 'M16 Multiple Gun Motor Carriage',
    nameKO: 'M16 다연장 기관총 장착 장갑차',
  },
  halftrack_us: {
    id: 'halftrack_us',
    name: 'M3 Armored Personnel Carrier',
    nameKO: 'M3 병력수송 장갑차',
  },
  hellcat_us: {
    id: 'hellcat_us',
    name: 'M18 Hellcat Tank Destroyer',
    nameKO: 'M18 헬캣 구축 전차',
  },
  m29_weasal_us: {
    id: 'm29_weasal_us',
    name: 'M29 Weasel Recon Vehicle',
    nameKO: 'M29 위즐 정찰 차량',
  },
  recovery_vehicle_us: {
    id: 'recovery_vehicle_us',
    name: 'M31 Recovery Vehicle',
    nameKO: 'M31 구난차량',
  },
  scott_us: {
    id: 'scott_us',
    name: 'M8 Scott SPG',
    nameKO: 'M8 스콧 자주포',
  },
  sherman_76mm_us: {
    id: 'sherman_76mm_us',
    name: 'M4A1(76) Sherman Medium Tank',
    nameKO: 'M4A1(76) 셔먼 중형전차',
  },
  sherman_bulldozer_us: {
    id: 'sherman_bulldozer_us',
    name: 'M4(105) Sherman Bulldozer',
    nameKO: 'M4(105) 셔먼 불도저',
  },
  sherman_easy_8_us: {
    id: 'sherman_easy_8_us',
    name: 'M4A3E8 Sherman Easy Eight',
    nameKO: 'M4A3E8 셔먼 이지 에잇',
  },
  sherman_us: {
    id: 'sherman_us',
    name: 'M4A1 Sherman Medium Tank',
    nameKO: 'M4A1 셔먼 중형전차',
  },
  sherman_whizbang_us: {
    id: 'sherman_whizbang_us',
    name: 'M4A1 Sherman Whizbang',
    nameKO: 'M4A1 셔먼 위즈뱅',
  },
  truck_4x4_us: {
    id: 'truck_4x4_us',
    name: '1/4-ton 4x4 Truck',
    nameKO: '1/4톤 4x4 트럭',
  },

  //british_africa - infantry
  commando_africa_uk: {
    id: 'commando_africa_uk',
    name: 'Commando Section',
    nameKO: '코만도 분대',
  },
  commando_lmg_africa_uk: {
    id: 'commando_lmg_africa_uk',
    name: 'Commando LMG Section',
    nameKO: '코만도 경기관총 분대',
  },
  guards_africa_uk: {
    id: 'guards_africa_uk',
    name: 'Foot Guards Section',
    nameKO: '근위 보병대',
  },
  gurkhas_africa_uk: {
    id: 'gurkhas_africa_uk',
    name: 'Gurkha Rifles Section',
    nameKO: '구르카 소총병대',
  },
  sapper_africa_uk: {
    id: 'sapper_africa_uk',
    name: 'Royal Engineer Section',
    nameKO: '왕립 공병대',
  },
  tommy_africa_uk: {
    id: 'tommy_africa_uk',
    name: 'Infantry Section',
    nameKO: '보병대',
  },

  //british_africa - team_weapons
  at_gun_17pdr_mobile_africa_uk: {
    id: 'at_gun_17pdr_mobile_africa_uk',
    name: '17-pounder Anti-tank Gun Team',
    nameKO: '17파운더 대전차포 운용반',
  },
  at_gun_6pdr_africa_uk: {
    id: 'at_gun_6pdr_africa_uk',
    name: '6-pounder Anti-tank Gun Team',
    nameKO: '6파운더 대전차포 운용반',
  },
  hmg_vickers_africa_uk: {
    id: 'hmg_vickers_africa_uk',
    name: 'Vickers Machine Gun Team',
    nameKO: '빅커스 기관총 운용반',
  },
  mortar_81mm_africa_uk: {
    id: 'mortar_81mm_africa_uk',
    name: 'ML 3-inch Mortar Team',
    nameKO: 'ML 3인치 박격포 운용반',
  },
  mortar_heavy_4_2_africa_uk: {
    id: 'mortar_heavy_4_2_africa_uk',
    name: 'ML 4.2-inch Heavy Mortar Team',
    nameKO: 'ML 4.2인치 중박격포 운용반',
  },
  pack_howitzer_75mm_africa_uk: {
    id: 'pack_howitzer_75mm_africa_uk',
    name: 'M1 Pack Howitzer team',
    nameKO: 'M1 경야포 운용반',
  },

  //british_africa - vehicles
  bishop_africa_uk: {
    id: 'bishop_africa_uk',
    name: 'Bishop Self-propelled Artillery',
    nameKO: '비숍 자주포',
  },
  centaur_africa_uk: {
    id: 'centaur_africa_uk',
    name: 'Centaur IV Medium Tank',
    nameKO: '센토어 4형 중형전차',
  },
  churchill_africa_uk: {
    id: 'churchill_africa_uk',
    name: 'Churchill IV Heavy Tank',
    nameKO: '처칠 IV 중전차',
  },
  churchill_black_prince_africa_uk: {
    id: 'churchil_black_prince_africa_uk',
    name: 'Churchill Balck Prince Heavy Tank',
    nameKO: '처칠 블랙 프린스 중전차',
  },
  crusader_aa_africa_uk: {
    id: 'crusader_aa_africa_uk',
    name: 'Crusader AA Medium Tank',
    nameKO: '크루세이더 대공 중형전차',
  },
  crusader_africa_uk: {
    id: 'crusader_africa_uk',
    name: 'Crusader II Medium Tank',
    nameKO: '크루세이더 II 중형전차',
  },
  cwt_15_quad_mount_africa_uk: {
    id: 'cwt_15_quad_mount_africa_uk',
    name: 'CMP 15cwt Anti-arit Truck',
    nameKO: 'CMP 15cwt 대공 트럭',
  },
  cwt_15_truck_africa_uk: {
    id: 'cwt_15_truck_africa_uk',
    name: 'CMP 15cwt Truck',
    nameKO: 'CMP 15cwt 트럭',
  },
  cwt_15_truck_medical_africa_uk: {
    id: 'cwt_15_truck_medical_africa_uk',
    name: 'CMP 15cwt Medical Truck',
    nameKO: 'CMP 15cwt 의료 트럭',
  },
  dingo_africa_uk: {
    id: 'dingo_africa_uk',
    name: 'Dingo Light Scout Car',
    nameKO: '딩고 정찰 경차량',
  },
  grant_africa_uk: {
    id: 'grant_africa_uk',
    name: 'M3 Grant Medium Tank',
    nameKO: 'M3 그랜트 중형전차',
  },
  humber_africa_uk: {
    id: 'humber_africa_uk',
    name: 'Humber Armored Car',
    nameKO: '험버 장갑차',
  },
  matilda_africa_uk: {
    id: 'matilda_africa_uk',
    name: 'Mtilda II Heavy Tank',
    nameKO: '마틸다 II 중전차',
  },
  stuart_africa_uk: {
    id: 'stuart_africa_uk',
    name: 'M3 Stuart Light Tank',
    nameKO: 'M3 스튜어트 경전차',
  },
};

export const getMissingSquadData = (squadId: string) => {
  return (
    missingSquadDataTable[squadId] ?? {
      id: squadId,
      name: '',
      nameKO: '',
    }
  );
};
