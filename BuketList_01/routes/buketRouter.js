var express = require("express")
var router = express.Router()
var buketVO = require("../models/buketVO")

router.get("/", function (req, res) {

    buketVO.find({})

        .limit(10).skip(0)
        .sort({ bGoal: 'asc' })
        .exec(function (err, bukets) {
            res.render("buket/list", { bukets: bukets })

        })
})

router.get("/insert", function (req, res) {
    var buket = new buketVO()
    res.render("buket/write",

        { buket: buket, formTitle: 'INSERT' })
})

router.post("/insert", function (req, res) {
    var buket = new buketVO(req.body)
    buket.save(function (err, data) {
        res.redirect("/buket")
    })

})
router.get("/update/:id", function (req, res) {
    var id = req.params.id
    buketVO.findOne({ _id: id }, function (err, buket) {
        res.render("buket/write",
            { buket: buket, formTitle: 'UPDATE' }
        )
    })
})


router.post('/update/:id', function (req, res) {
    var id = req.params.id
    buketVO.update({ _id: id },
        { $set: req.body }, function (err, data) {
            res.redirect("/buket")
        })
})


router.get("/delete/:id", function (req, res) {
    var id = req.params.id

    buketVO.deleteOne({ _id: id }, function (err, data) {
        res.redirect("/buket")
    })
})




module.exports = router



