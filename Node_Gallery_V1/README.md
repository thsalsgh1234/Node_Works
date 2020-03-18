# 이미지 갤러리

## multer 미들웨어를 활용한 이미지 업로드 게시판
## mongoDB와 mongoose를 연동하여 데이터 crud 구현


## mongoDB의 용어 정리

#### db
* RDBMS에서 DB와 같은 역을 하며 main sechma
* show dbs : db들의 목록을 확인하는 명령
* use mydb : mydb 라는 이름으로 비어있는 schema를 생성하거나, 이미 있으면 사용할 수 있도록 open 해라

#### collection
* RDBMS에서 TABLE과 같은 역할을 하며 실제 데이터가 저장되는 작은 공간
* show collection : collection의 목록을 확인, 반드시 use db 실행 후 사용
* db.collection.쿼리 명령
* db.tbl_books.insert({변수 : 값 }) : tbl_books라는 컬렉션을 생성하고, 새로운 데이터를 추가하라. 만약 collection이 이미 있으면 기존 collection에 데이터 추가

* db.collection.drop() : collection을 삭제


#### document
* RDBMS에서 한 개의 Record와 같은 역할
* db.collection.remove({}) : collection에 존재하는 document를 전부 삭제
* db.collection.find({}) : 조회 
