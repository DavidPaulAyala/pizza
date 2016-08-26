//business logic
function Pizza(sizePie, toppings) {
  this.sizePie = sizePie;
  this.toppings = [];
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

Pizza.prototype.costTopping = function(){
  return parseInt(this.toppings.length) * 1;
  console.log(pieToppings)
}



$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();

    var inputtedSize = $("#new-size").val();

    var userSelectedToppings = [];
    $("input:checkbox[name=pieToppings]:checked").each(function(){
      var inputtedToppings = $(this).val();
      userSelectedToppings.push(inputtedToppings);
    });

    var newPizza = new Pizza(inputtedSize, toppings);

    $("#show-selection").show();
    $(".size").text(newPizza.sizePie);
    $(".toppings").text(userSelectedToppings);
    $(".price").text("$" + newPizza.costPizza() + ".00");

  });
});
