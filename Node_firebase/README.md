# google의 firebase 연동 프로젝트

- firebase.google.com 페이지를 통해서 프로젝트를 설정하고
- Realtime DB(Croud DB로 업그레이드중) : Cloud DB를 사용하여 CRUD를 구현하기 위한 서비스
- Hosting : 홈페이지(static web) 를 외부에서 접근할 수 있도록 만들어주는 서비스
- firebase functions : node project 를 firebase host에서 실해할 수 있도록 지원하는 클라우드

## firebase 연동을 하기 위해 tools을 설치

- firebase-tools : npm istall -g firebase-tools
- 최신버전 설치가 안되는 경우는 -npm istall -g firebase-tools@latest를 하면된다.

## 프로젝트를 firebase로 설정

- npm istall firebase
- firebase login
- firebase 프로젝트 초기화 : firebase init

## 프로젝트 서버에 올리기

- firebase deploy

## 프로젝트를 로컬에서 테스트하기

- firebase serve

# nodejs에서 firebase Realtime database 연동

- npm istall firebase
- npm istall firebase-admin
- config 설정값 작성
- npm install moment : 날짜와 관련된 미들웨어
- npm install moment-timezone : 날짜 타임존 설정 미들웨어
