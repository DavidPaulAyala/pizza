//business logic
function Pizza(sizePie, toppings){
  this.sizePie = sizePie;
  this.toppings = toppings;
}

Pizza.prototype.costPizza = function(){
  if (this.sizePie === "Small"){
    piePrice = 9;
  }
  if (this.sizePie === "Medium"){
    piePrice = 13;
  }
  if (this.sizePie === "Large"){
    piePrice = 16;
  }
  if (this.toppings.length > 0){
  piePrice += (this.toppings.length * 1);
  }
  return piePrice
}



$(document).ready(function() {
  $("form#new-pizza").submit(function(event) {
    event.preventDefault();
    var piePrice = 0;
    var inputtedSize = $("#new-size").val();
    var userSelectedToppings = $("input:checkbox[name=pieToppings]:checked").map(function(){
      return $(this).val();
    }).get();
    var newPizza = new Pizza(inputtedSize, userSelectedToppings);

    newPizza.costPizza(piePrice);

    $("#show-selection").show();
    $(".size").text(newPizza.sizePie);
    $(".toppings").text(userSelectedToppings);
    $(".price").text("$" + newPizza.costPizza(piePrice) + ".00");

  });
});
