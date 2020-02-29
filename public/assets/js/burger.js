$(function () {
    $("#addburger").on("click", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#newburger")
                .val()
                .trim(),
            food_state: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("Added new burger");
            location.reload();
        });
    });

    $(".eat-thy-buns").on("click", function (event) {
        event.preventDefault();

        var id = $(this).data("id");
        var food_stateState = {
            food_state: 1
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: food_stateState
        }).then(function () {
            console.log("Burger food_state");
            location.reload();
        });
    });
});