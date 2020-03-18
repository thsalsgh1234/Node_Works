var mongoose = require('mongoose')

var bookVO = mongoose.Schema({

    search : {
        type:String,        //  입력한 검색어
        required : false
    },
    title : {
        type:String,        //  입력한 검색어
        required : false,
        unique : false
    },        //  도서 제목
    link : {
        type:String,        //  입력한 검색어
        required : false,
        unique : false
    },          //  링크
    image : {
        type:String,        //  입력한 검색어
        required : false,
        unique : false
    },         //  이미지
    author : {
        type:String,        //  입력한 검색어
        required : false,
        unique : false
    },        //  저자
    price : {
        type:String,        //  입력한 검색어
        required : false,
        unique : false
    },         //  가격
    discount : {
        type:String,        //  입력한 검색어
        required : false,
        unique : false
    },      //  할인가격
    publisher : {
        type:String,        //  입력한 검색어
        required : false,
        unique : false
    },     //  출판사
    pubdate : {
        type:String,        //  입력한 검색어
        required : false,
        unique : false
    },      //  출판연도
    isbn : {
        type:String,        //  입력한 검색어
        required : false,
        unique : true
    },          //  ISBN이 같은 도서라면 저장을 금지한다.
    description : {
        type:String,        //  입력한 검색어
        required : false,
        unique : false
    }    //  요약

})

module.exports = mongoose.model('tbl_book',bookVO);