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
    var inputtedToppings = $("input#toppings").val();

    var newPizza = new Pizza(inputtedSize, inputtedToppings);

    $("ul#pizzas").append("<li><span class='pizza'>" + newPizza.sizePie + "</span></li>");

    $("input#new-pizza").val("");
    $("input#toppings").val("");
  });
});
