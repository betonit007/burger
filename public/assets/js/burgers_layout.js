$(function() {
    $(".delBurger").on("click", function(event) {
        var id = $(this).data("id");
        console.log(id);
        var newDevoured = $(this).data("devoured");


        var newDevouredState = {
            devoured: newDevoured
        };

        $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newDevouredState
        }).then(
            function() {
                console.log("changed devoured to", newDevoured);
                location.reload();
            }
        );
    });
    $(".create-form").on("submit", function(event) {
        event.preventDefault();
        console.log($("#burg").val().trim());
        var newBurger = {
            name: $("#burg").val().trim(),
            devoured: 0
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger");
                location.reload();
            }
        );
    });
})