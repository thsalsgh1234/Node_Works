var mongoose = require('mongoose')

/*
    mongodb는 원칙적으로 table 구조가 없는 상태인데
    mongoose를 사용해서 마치 RDMBS처럼 table 구조를 생성하여 사용 것처럼 느껴진다.

    사용중에 collection 구조를 변경했을 때
    변경한 구조가 실제 db에 반영이 안되거나 데이터가 잘못 추가되는 경우가 있는데, 그럴때는 mongodb를 콘솔에서 collection을 삭제하고 다시 프로젝트를 실행해주어야 한다.

    
*/
var galleryVO = mongoose.Schema({

    gStrTitle : String,
    gStrText : String,
    gUpLoadPhotoName : String,          // 이미지를 업로드 할때 변환된 이름
    gOriginalPhotoName : String,        // 이미지의 원래 이름
    gUpLoadStartDate : {
        type : Date,
        default : Date.now()
    }

})

module.exports = mongoose.model("tbl_gallery",galleryVO)