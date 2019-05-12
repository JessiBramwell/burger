$(function () {

  // UPDATE EATEN STATUS ON CLICK
  $(".update-eaten").on("click", function (e) {
    let id = $(this).data("id");
    let eaten = $(this).data("eaten_update");

    let update = {
      eaten: eaten
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: update
    }).then(
      function () {
        console.log("updated eaten status to " + update);
        location.reload();
      }
    );
  });

  // ADD ITEM ON FORM SUBMIT
  $(".add-form").on("submit", function (e) {
    e.preventDefault();

    let newBurger = {
      name: $("#name").val().trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function () {
        console.log("added " + newBurger);
        location.reload()
      }
    );
  });

  // DELETE ITEM ON CLICK
  $(".delete-item").on("click", function (e) {
    let id = $(this).data("id");

    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function () {
        console.log("deleted " + id);
        location.reload();
      }
    );
  });
});