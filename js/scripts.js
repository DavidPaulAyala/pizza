//business logic
function Pizza(sizePie, toppings) {
  this.sizePie = sizePie;
  this.toppings = toppings;
}



Pizza.prototype.costPizza = function() {
  var piePrice = 0;
  if (this.sizePie === "Small") {
    piePrice = 9;
  }if (this.sizePie === "Medium") {
    piePrice = 13;
  }if (this.sizePie === "Large"){
    piePrice = 16;
  }
  return piePrice
};



$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();

    var inputtedSize = $("#new-size").val();
    var inputtedToppings = $("input#new-toppings").val();

    var newPizza = new Pizza(inputtedSize, inputtedToppings);

    $("#show-selection").show();
    $(".size").text(newPizza.sizePie);
    $(".toppings").text(newPizza.toppings);
    $(".price").text("$" + newPizza.costPizza() + ".00");

  });
});
