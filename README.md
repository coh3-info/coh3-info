- [COH3 Info](#coh3-info)
  - [목표](#--)
  - [기술 스택](#-----)
    - [클라이언트](#-----)
    - [배포](#--)
  - [개발 환경 실행법](#---------)
  - [게임 데이터를 다루는 법](#-------------)
    - [데이터 맵핑 흐름도](#----------)
    - [추출된 데이터 json파일](#--------json--)
    - [모델 객체](#-----)
    - [Stats 객체](#stats---)
  - [게임 데이터와 이미지](#-----------)
    - [데이터 추출기](#-------)
    - [이미지 추출기](#-------)

# COH3 Info

![release version label](https://img.shields.io/static/v1?label=release&message=v0.1.5&color=blue&style=flat-square)
![game data version label](https://img.shields.io/static/v1?label=game_data&message=v1.2.2&color=green&style=flat-square)

게임 Company of heroes3의 유닛 정보 웹앱 프로젝트입니다.

웹 사이트 : https://coh3info.com

노션 문서 : https://coh3-info.notion.site/CoH3-info-3ef3b44376764a2aab28d68d65d8896f

## 목표

Company of Heroe3(이하 coh3)는 게임 내에서 유닛의 능력치를 자세히 알려주지 않기 때문에 유닛의 특징과 유닛간 대결의 우위를 파악하기 어렵습니다. 이는 유저들이 게임을 적응하는데 오래걸리게 합니다.

이 프로젝트는 게임 내 유닛의 정보를 쉽게 파악하게하여 게임의 접근성을 높여 새로 유입된 유저와 기존 유저들이 좀 더 원활하게 게임을 플레이 할 수 있도록 돕는 것을 목표로 합니다.

## 기술 스택

### 클라이언트

![node.js version label](https://img.shields.io/static/v1?label=node.js&message=v18.15.0&color=43853d&style=flat-square)
![typescript version label](https://img.shields.io/static/v1?label=typescript&message=v4.9.5&color=3178c6&style=flat-square)
![react version label](https://img.shields.io/static/v1?label=react&message=v18.2.0&color=61dafb&style=flat-square)
![react-redux version label](https://img.shields.io/static/v1?label=react-redux&message=v8.0.5&color=764abc&style=flat-square)
![styled-components version label](https://img.shields.io/static/v1?label=styled-components&message=v5.3.9&color=db7093&style=flat-square)
![chart.js version label](https://img.shields.io/static/v1?label=chart.js&message=v4.2.1&color=FF6384&style=flat-square)

### 배포

![netlify label](https://img.shields.io/static/v1?label=&message=netlify&color=555555&style=flat-square)

![skills drawio](https://user-images.githubusercontent.com/78804014/233882218-dcf9c63b-2d65-4a20-934b-98812d1dafcd.png)

## 개발 환경 실행법

```
npm i
```

```
npm start
```

## 게임 데이터를 다루는 법

게임에서는 여러 데이터객체가 서로 복잡하게 연결 되어 하나의 유닛을 구성합니다. 유닛의 정보는 유닛을 구성하는 객체를 통해 참조하거나, 해당 객체와 서로 연결된 다른 객체의 속성과 계산을 하여 구해야합니다. 프로젝트에서 이러한 복잡한 게임 데이터객체를 다루기위해 다음 2가지의 목표를 가지고 객체구조에 대해 고민하였습니다.

1. 구조가 아무리 복잡해도 사용할 때 쉽게 사용할 수 있어야 한다.
2. 구조를 변경해야 할 때 코드 수정을 최소화해야 한다.

위 2가지의 목표를 달성하기 위해 객체를 2단계로 맵핑하는 방법을 선택했습니다.

(게임데이터에 대한 설명을 보시려면 노션문서의 [게임데이터](https://coh3-info.notion.site/1e71dddcd0b44711b665f9c2a5927a28)를 읽어보세요.)

### 데이터 맵핑 흐름도

![data_map_flow drawio](https://user-images.githubusercontent.com/78804014/233899523-ecb9c97f-ac9b-4e2e-996f-07257d978cd6.png)

1. 게임데이터 파일을 데이터추출기를 통해 추출합니다. 추출된 데이터는 json파일에 담깁니다.
2. 웹페이지에 접속하면 json파일을 서버에 요청하여 가져옵니다.
3. 응답으로 json파일을 받으면 json파일을 맵핑하여 모델객체를 생성합니다. (Squad, Entity 등)
4. 맵핑이 완료되면 전역 state로 저장됩니다.
5. 하나의 유닛을 구성하는 모든 모델객체를 참조하고 있는 Unit을 생성합니다.
6. Unit를 이용해 UnitStats를 생성합니다.
   1. UnitStats는 생성될 때 Stats객체들을 생성하고 참조합니다.
   2. Stats객체는 Unit에 포함된 모델객체를 기반으로 생성됩니다.
7. UnitStats통해 Stats객체를 참조할 수 있고 이 Stats객체의 속성을 통해 게임유닛의 정보를 알 수 있습니다.

### 추출된 데이터 json파일

게임 데이터는 추출기를 통해 json파일형태로 추출됩니다. 게임의 거의 모든 데이터가 포함됩니다. 이중에는 이 프로젝트에서 필요없는 데이터도 모두 포함합니다.

소총병 분대를 예로 들어보겠습니다. (실제로는 아주 많은 속성이 있습니다. 예시를 위해 간략화하여 실제와 다를 수 있습니다.)

sbps.json

```json
{
  "riflemen_us": {
    "name": "Riflemen Squad",
    "faction": "america",
    "canCapture": "True",
    "voice": "sound/riflemen_squad_sound",
    "loadout": [
      {
        "entity": "ebps/rifleman_squad_leader_us",
        "num": 1
      },
      {
        "entity": "ebps/rifleman_us",
        "num": 5
      }
    ]
  }
}
```

### 모델 객체

위 예시에서 눈여겨 볼 속성은 `canCapture`과 `voice`입니다.

`canCapture`속성은 boolean타입인데 값이 그냥 단순히 문자열로 되어있습니다.

`voice`속성은 게임에선 필요하겠지만 이 프로젝트에선 사용되지 않습니다. (물론 추후에 소리 정보까지 제공하는 기능을 구현한다면 필요할 수도 있습니다.)

게임데이터를 다루기위해 불필요한 속성은 거르고, 타입에 맞게 속성을 맵핑하여 '모델'객체를 생성합니다.

프로젝트에서 타입에러를 감지하거나 vscode의 자동완성기능을 사용하여 생산성을 높이기 위함 등 typescript의 기능을 온전히 사용하기 위한 작업입니다.
([예:sbps 맵핑 코드](https://github.com/coh3-info/coh3-info/blob/010b86d8737325fb2dbc1c5537a16fdf917f77a9/src/util/game_data/mapper/sbps/index.ts#L10))

데이터는 정의된 인터페이스에 따라 맵핑됩니다.

다음은 맵핑된 모델 객체 예시입니다.

```ts
interface Squad {
  id: string;
  name: string;
  faction: string;
  canCapture: boolean;
  loadout: {
    entity: string;
    num: number;
  }[];
}

//state를 가져오는 예시입니다. 실제 코드는 다릅니다.
const riflemenSquad: Squad = squadsState.get('riflemen_us');
/* 
  {
    id: 'riflemen_us',
    name: 'Riflemen Squad',
    faction: 'america',
    canCapture: true,
    loadout: [
      {
        entity: 'ebps/rifleman_squad_leader_us',
        num: 1,
      },
      {
        entity: 'ebps/rifleman_us',
        num: 5,
      },
    ],
  };
*/
```

`canCapture`속성이 문자열 "True"에서 부울값 true로 변경되었고, `voice`속성은 걸러진 것을 볼 수 있습니다. 추가로 `id`속성으로 'riflemen_us'값이 설정되었습니다.

모델 인터페이스: [Squad](https://github.com/coh3-info/coh3-info/blob/75e83910fc1debe1267ad73aaec6d6bd720a98c7/src/types/game_data/squad.d.ts#L10),
[Entity](https://github.com/coh3-info/coh3-info/blob/010b86d8737325fb2dbc1c5537a16fdf917f77a9/src/types/game_data/entity.d.ts#L13),
[Weapon](https://github.com/coh3-info/coh3-info/blob/010b86d8737325fb2dbc1c5537a16fdf917f77a9/src/types/game_data/weapon.d.ts#L30)

이제 데이터 맵핑까지 했으니 필요한 정보를 구해보겠습니다. 필요한 정보는 분대이름, 분대진영, 분대체력, 분대비용 등이 있습니다.

그전에 분대구성원 객체인 Entity 모델 객체의 예시를 보겠습니다. (Enity 모델 객체는 ebps.json을 맵핑하여 생성합니다.)

```ts
interface Entity {
  id: string;
  hitpoint: number;
  cost: number;
  speed: number;
  hardpoint: string[];
}

//state를 가져오는 예시입니다. 실제 코드는 다릅니다.
const riflemanSquadLeader: Entity = entitiesState.get('rifleman_squad_leader_us');
/*
  {
    id: 'rifleman_squad_leader_us',
    hitpoint: 100,
    cost: 60,
    speed: 3.6,
    hardpoint: [],
  };
*/

const rifleman: Entity = entitiesState.get('rifleman_us');
/*
  {
    id: 'rifleman_us',
    hitpoint: 100,
    cost: 50,
    speed: 3.6,
    hardpoint: [],
  };
*/
```

Squad 모델 객체는 loadout속성을 통해 이 Entity 모델 객체를 참조합니다.

이제 필요한 정보를 구해보겠습니다.

우선 분대이름과 분대진영은 `riflmenSquad.name`, `riflemenSquad.faction`으로 구할 수 있습니다.

분대비용은 해당 분대를 구성하는 각 분대구성원의 비용을 합해 구할 수 있습니다.

```ts
const riflemenSquadCost =
  riflemanSquadLeader.cost * riflemenSquad.loadout[0].num + rifleman.cost * riflemenSquad.loadout[1].num;

// (60 * 1) + (50 * 5) = 260
```

분대 체력도 마찬가지로 분대구성원 체력의 합으로 구할 수 있습니다.

실제로 이보다 더 복잡하게 계산하여 구하는 경우도 많습니다.<br>
정보를 구할 때 마다 복잡한 계산코드를 작성해야 합니다. <br>
만약 계산식이 바뀔경우 계산코드가 작성된 곳을 전부 수정해 주어야 합니다.

### Stats 객체

이 문제를 해결하기 위해 Stats 객체를 생성하여 사용합니다.
Stats객체는 생성될 때 위와 같은 계산을 통해 구해진 값을 속성으로 가지고 있습니다.

다음은 Stats객체의 예시입니다.

```ts
interface SquadStats {
  id: string;
  name: string;
  faction: string;
  canCapture: boolean;
  hitpoint: number;
  cost: number;
  loadout: {
    entity: string;
    num: number;
  }[];
}

const riflemenSquad: SquadStats = createUnit(unit).squad;
/*
  {
    id: 'riflemen_us',
    name: 'Riflemen Squad',
    faction: 'america',
    canCapture: true,
    hitpoint: 600,
    cost: 260,
    loadout: [
      {
        entity: 'ebps/rifleman_squad_leader_us',
        num: 1,
      },
      {
        entity: 'ebps/rifleman_us',
        num: 5,
      },
    ],
  };
*/
```

이제 `riflemenSquad.hitpoint`, `riflemeneSquad.cost`로 간단하게 체력과 비용을 구할 수 있습니다.

계산식이 바뀐다고 하여도 Stats객체를 생성하는 코드만 수정해주면 됩니다.

Stats객체 생성 코드:
[createUnitStats](https://github.com/coh3-info/coh3-info/blob/010b86d8737325fb2dbc1c5537a16fdf917f77a9/src/util/stats/unitStats.ts#L7)

Stats 인터페이스: [SquadStats](https://github.com/coh3-info/coh3-info/blob/010b86d8737325fb2dbc1c5537a16fdf917f77a9/src/types/stats/squadStats.d.ts#L3),
[EntityStats](https://github.com/coh3-info/coh3-info/blob/010b86d8737325fb2dbc1c5537a16fdf917f77a9/src/types/stats/entityStats.d.ts#L3),
[WeaponStats](https://github.com/coh3-info/coh3-info/blob/010b86d8737325fb2dbc1c5537a16fdf917f77a9/src/types/stats/weaponStats.d.ts#L14)

## 게임 데이터와 이미지

게임 데이터와 이미지는 추출기 가이드에 따라 추출하여 사용합니다.

[게임 자원 추출기 가이드](https://coh3-info.notion.site/2eb8d301aa9f402cb51d31fccbfedafa)

(추출기 제작자분이 사용해도 좋다고 허락해주셨습니다.)

### 데이터 추출기

https://github.com/cohstats/coh3-data

### 이미지 추출기

https://github.com/cohstats/coh3-image-extractor
