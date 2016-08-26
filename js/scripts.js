//business logic
function Pizza(sizePie, toppings) {
  this.sizePie = sizePie;
  this.toppings = toppings;

}

Pizza.prototype.cost = function() {
//size of pie price + toppings price;

}



$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();

    var inputtedSize = $("input#new-size").val();
    var inputtedToppings = $("input#new-toppings").val();

    var newPizza = new Pizza(inputtedSize, inputtedToppings);

    $("#show-selection").show();
    $(".size").text(newPizza.sizePie);
    $(".toppings").append(newPizza.toppings);

    $("input#new-pizza").val("");
    $("input#toppings").val("");
  });
});
