# COH3 Info

![release version label](https://img.shields.io/static/v1?label=release&message=v0.1.3&color=blue&style=flat-square)
![game data version label](https://img.shields.io/static/v1?label=game_data&message=v1.1.4&color=green&style=flat-square)

게임 Company of heroes3의 유닛 정보 웹앱 프로젝트입니다.

웹 사이트 : https://coh3info.com

노션 문서 : https://depv.notion.site/CoH3-info-50ca36fc84484aff9851099eb9928050

## 목표

Company of Heroe3(이하 coh3)는 게임 내 유닛의 능력치를 자세히 알려주지 않기 때문에 유닛의 특징과 유닛간 대결의 우위를 파악하기 어렵습니다. 이는 유저들이 게임에 적응하는데 오래걸립니다.

이 프로젝트는 게임 내 유닛의 정보를 쉽게 파악하게하여 게임의 접근성을 낮추어 새로 유입된 유저와 기존 유저들이 좀 더 원활하게 게임을 플레이 할 수 있도록 돕는 것을 목표로 합니다.

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

## 개발 큰 틀

이 프로젝트는 게임데이터를 추출하여 나온 json파일을 맵핑하여 사용합니다.

(게임데이터에 대한 설명을 보시려면 노션문서의 [게임데이터](https://depv.notion.site/68e28bc4850c491397a5e39e6a1143c6)를 읽어보세요.)

### 데이터 맵핑 흐름도

![data_map_flow drawio](https://user-images.githubusercontent.com/78804014/233899523-ecb9c97f-ac9b-4e2e-996f-07257d978cd6.png)

### 데이터 인터페이스

json파일의 데이터는 정의된 인터페이스에 따라 맵핑됩니다.
([예:sbps 맵핑 코드](https://github.com/coh3-info/coh3-info/blob/010b86d8737325fb2dbc1c5537a16fdf917f77a9/src/util/game_data/mapper/sbps/index.ts#L10))

이는 게임 데이터를 JS환경에서 좀 더 편하게 사용할 수 있게 가공하는 과정이라 생각할 수 있습니다.

데이터 인터페이스는 src/types/game_data/ 폴더에 위치해 있습니다.

#### 데이터 인터페이스 예시

[Squad](https://github.com/coh3-info/coh3-info/blob/75e83910fc1debe1267ad73aaec6d6bd720a98c7/src/types/game_data/squad.d.ts#L10),
[Entity](https://github.com/coh3-info/coh3-info/blob/010b86d8737325fb2dbc1c5537a16fdf917f77a9/src/types/game_data/entity.d.ts#L13),
[Weapon](https://github.com/coh3-info/coh3-info/blob/010b86d8737325fb2dbc1c5537a16fdf917f77a9/src/types/game_data/weapon.d.ts#L30)

### Stats 인터페이스

게임 데이터는 복잡하게 서로 연결되어 있습니다. 컴포넌트에서 좀 더 편하게 사용하기 위해 맵핑된 데이터로 Stats객체를 생성하여 사용합니다.
([createUnitStats](https://github.com/coh3-info/coh3-info/blob/010b86d8737325fb2dbc1c5537a16fdf917f77a9/src/util/stats/unitStats.ts#L7))

예를들어 한 분대구성원의 충원비를 구하려면 Squad.reinforce.costPercentage와 Entity.cost.manpower를 곱하여 구해야 합니다. coh3의 게임데이터는 이와같이 계산하여 능력치를 구하는 경우가 많습니다. 이를 편하게 하기 위해 Stats객체를 생성할 때 계산을 해주고 이후에는 해당 속성을 참조하면 바로 능력치 값을 얻을 수 있게 하였습니다. 위의 예시에서 EntityStats객체를 생성하면 EntityStats.reinforce.manpower를 참조하여 간단하게 능력치 값을 구할 수 있습니다.

Stats 인터페이스는 src/types/stats/ 폴더에 위치해 있습니다.

#### Stats 예시

[SquadStats](https://github.com/coh3-info/coh3-info/blob/010b86d8737325fb2dbc1c5537a16fdf917f77a9/src/types/stats/squadStats.d.ts#L3),
[EntityStats](https://github.com/coh3-info/coh3-info/blob/010b86d8737325fb2dbc1c5537a16fdf917f77a9/src/types/stats/entityStats.d.ts#L3),
[WeaponStats](https://github.com/coh3-info/coh3-info/blob/010b86d8737325fb2dbc1c5537a16fdf917f77a9/src/types/stats/weaponStats.d.ts#L14)

이 과정을 통해 최종적으로 생성된 UnitStats객체로 모든 유닛의 능력치 정보를 다룹니다.

### 추후 계획

현재는 public 폴더에 json파일들이 있고 클라이언트에서 이 json파일을 불러와 클라이언트에서 맵핑합니다. 이 과정은 시간이 오래 걸립니다. 추후에 서버를 만들어 서버에서 json파일을 한번만 맵핑한 뒤 이 맵핑된 데이터를 클라이언트에 전송해 주는 식으로 개발하려 합니다. 그러므로 추후에 맵핑과정이 바뀔 수 있습니다.

## 게임 데이터와 이미지

게임 데이터와 이미지는 추출기 가이드에 따라 추출하여 사용합니다.

[추출기 가이드](https://depv.notion.site/83bc75c8b4ea40a1adf7ad7789b04f73)

(추출기 제작자분이 사용해도 좋다고 허락해주셨습니다.)

### 데이터 추출기

https://github.com/cohstats/coh3-data

### 이미지 추출기

https://github.com/cohstats/coh3-image-extractor
