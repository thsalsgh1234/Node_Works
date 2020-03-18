var express = require('express')
var router = express.Router();
var request = require('request')

var book = require('../models/book');
var naver = require('../config/naver_secret')

var reqOptions = (api_url) => {

    var options = {

        url : api_url,
        headers : {

            'X-Naver-Client-Id' : naver.client_id,
            'X-Naver-Client-Secret' : naver.client_secret

        }

    }

    return options

}


module.exports = (app) => {

    router.get("/",(req,res) => {

        res.json(naver)

    })

    router.post('/naver', (req,res)=>{

        /*
            method=GET 방식으로 form에서 값을 전달하면 req.query에 변수가 담겨서 전달되고

            method=POST 방식으로 form에서 값을 전달하면 req.body에 변수가 담긴다.
        */

        let search = req.body.search
        let api_url = naver.book_url
        api_url += '?query=' +encodeURI(search)

        /*
            검색을 실행했을때
            1. DB에 해당하는 검색어가 저장되어 있는지를 찾아보고
            2. 있으면 DB 내용을 화면에 보여주고 만약 없으면 naver에서 조회하여 가져온 후
            3. DB에 저장하고 결과를 화면에 보여라
        */
        request.get(reqOptions(api_url), (err,response,body)=>{

            if(err){

                console.log(err)
                res.send(response.statusMessage)

            }else if(response.statusCode == 200){
                // res.json(responseJson)

                book.find({search : search}, (err,data)=>{

                    var dataLength = Object.keys(data).length

                    if(dataLength > 0){
                        res.render("list",{books:data})
                    }else{

                        var responseJson = JSON.parse(body).items
        
                        responseJson.forEach(element => {
                            element.search = search
                        });


                        book.collection.insertMany(responseJson, (err,result) => {  

                            console.log(err)
                            console.log(result)
        
                            if(err){
                                res.send("DATA BULK INSERT ERROR")
                            }else{
                                res.render("list",{books:responseJson})
                            }
        
                        })
                        
                    }

                })

            }else {

                res.send("check plz")

            }

        })

    })

    return router

}