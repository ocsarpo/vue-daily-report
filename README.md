# daily-report (Vue.js로 데일리리포트 앱 만들기 <br>@프로그래머스)

## https://programmers.co.kr/learn/courses/4672 강의 따라 만든 레포입니다


* 내 일상을 기록하고 회고하는 데일리리포트(Daily Report) 라는 앱을 만듭니다.
* 최종적으로는 Firebase 로 서버에 배포합니다.
* 일정 추가, 수정, 삭제와 같은 기본 기능을 구현해보고,
* 외부 모듈 임포트하는 방법과
* 사용자 설정 메뉴(Redux, Vuex 사용을 위하여)
* 외에 SPA 앱들이 가진 기본적인 기능과 장점을 가진 앱을 같이 만들어요!

```
데일리 리포트가 뭐에요? 하루 동안 있었던 일을 기록하고, 그 일들에 대한 자신의 만족도를 스스로 기록할 수 있는 '일상 기록 시스템' 입니다. 이미 많은 분들이 온, 오프라인에서 사용하고 있는 훌륭한 자기계발 도구입니다. 이를 보통 오프라인에서 노트에 작성한다면, 우리는 SPA로 개발해서 온라인에서 써보는 것이죠.
```

## 알고 수강하면 더 좋을, SPA의 특장점
```
Multi-Page Application 방식과 Single-Page Application 방식은 각각 특장점이 있지만, SPA 방식의 경우 이런 특징이 있답니다.

사용성을 극대화 하기 좋다: 필요한 부분만 렌더링하고, 매번 새로운 페이지를 불러오지 않아도 되기에 웹 사이트를 이용하는 데에 편리함이 커짐.
소스코드 관리에 유용하다: 개발자 입장에서는 REST API를 기반으로 서버에서 오는 데이터와 브라우저에서 처리할 데이터를 분리할 수 있어 개발 및 유지보수에 편리함.
배포 프로세스가 간편해진다: MPA 방식의 경우 배포 시 많은 페이지들을 함께 띄워야 하고, CSS, JS의 버전관리도 따로 진행해야만 함. 그러나 Vue, Angular 등을 활용하면 배포 자동화의 이점을 취하기 좋음.
```
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Compiles and Firebase deploy
```
npm run deploy
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
