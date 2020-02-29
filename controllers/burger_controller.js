var express = require("express");
var burger = require("../models/burger");

var router = express.Router();

router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hdbrsObj = {
            burgers: data
        };
        console.log(hdbrsObj);
        res.render("home", hdbrsObj);
    });

    router.post("/api/burgers", function (req, res) {
        console.log('reach api')
        burger.insertOne(
            ["burger_name", "food_state"],
            [req.body.burger_name, req.body.food_state],
            function (result) {
                // Send back the ID of new burger
                res.json({ id: result.insertId });
            }
        );
    });
    router.put("/api/burgers/:id", function (req, res) {
        var condition = "id = " + req.params.id;

        console.log("condition", condition);
        burger.updateOne({ food_state: req.body.food_state }, condition, function (
            result
        ) {
            if (result.changedRows === 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });
});
module.exports = router;
