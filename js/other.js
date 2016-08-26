function Pie(size, sauce){
  this.pizzaSize = size;
  this.pizzaSauce = sauce;
  this.pizzaFiber = [];
  this.pizzaProtein = [];
  this.totalAmount = 0;
  console.log(this.pizzaSize);
};


Pie.prototype.sizeCost = function(){
  var pizzaCost = 0;
  if (this.pizzaSize === "Family"){
    pizzaCost = 20;
  }if (this.pizzaSize === "Large"){
    pizzaCost = 16;
  }if (this.pizzaSize === "Medium"){
    pizzaCost = 10;
  }if (this.pizzaSize === "Small"){
    pizzaCost = 6;
  }
};
Pie.prototype.fiberCost = function(){
  return parseInt(this.pizzaFiber.length) * 1;
  console.log(fiberCost);
};

Pie.prototype.proteinCost = function(){
  return parseInt(this.pizzaProtein.length) * 2;
  console.log(proteinCost);
};

Pie.prototype.totalCost = function(){
  this.totalAmount = (fiberCost + proteinCost + sizeCost);
};


$(document).ready(function(){
  // add Fiber option begin
  $("butt.new-pie-vegies original").click(function(){
    $("#pie-vegies").append('<div id="new-pie-vegies">'+
                              '<label class="new-pie-vegies clone" for="">Select topping: $1/each</label>'+
                              '<select class="new-pie-vegies clone" name="">'+
                                '<option>Pineapple</option>'+
                                '<option>Mushrooms</option>'+
                                '<option>Spinach</option>'+
                                '<option>Onions</option>'+
                                '<option>Sun Dried Tomatoes</option>'+
                                '<option>Artichoke Hearts</option>'+
                              '</select>'+
                              '</div>')
  })
    // add Fiber Option end
  // add Protein option begin
  $("#pie-meat").click(function(){
    $("div.new-pie-meat").append('<label class="pie-meat" for="">Select topping: $1/each</label>'+
                              '<select class="pie-meat" name="">'+
                              '<option>Pepperoni</option>'+
                              '<option>Salami</option>'+
                              '<option>BBQ Chicken</option>'+
                              '<option>Italian Sausage</option>'+
                              '<option>Canadian Style Bacon</option>'+
                            '</select>')
  });
  // add Protein option end

  // submitform begin
  $("form.display-option").submit(function(event){
    event.preventDefault();

    var pieSize = $("select.pie-size").val();
    var pieSauce = $("select.pie-sauce").val();

    var orderedPizza = new Pie(pieSize, pieSauce);

    $(".addedToppings").each(function(){
      var pieVegies = $("select.pie-vegies").val();
      var pieMeats = $("select.pie-meat").val();
      orderedPizza.pizzaFiber.push(pizzaVegies);
      orderedPizza.pizzaProtein.push(pizzaMeat);
    })
  });
  // Submitform end
});
// document end
