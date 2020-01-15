var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
	return number1 - number2;
};

var multiply = function(number1, number2) {
	return number1 * number2;
};

var divide = function(number1, number2) {
	return number1 / number2;
};

var bmi = function(number1,number2) {
	return number1 / (number2 * number2);
}

var USAbmi = function(number1,number2) {
	return (number1 / (number2 * number2)) * 703;
}

var C2F = function(number1) {
	return (number1 * (9/5))+32;
}

var F2C = function(number1) {
	return (number1 -32)/(9/5)
}

//alert(F2C(number1, number2));
	$(function() {   
	$("form#add").submit(function(event) {  
		event.preventDefault();                    
		var number1 = parseInt($("#add1").val());
		var number2 = parseInt($("#add2").val());
		var result = add(number1, number2);
		$("#output0").text(result);
		});
	$("form#subtract").submit(function(event) {  
		event.preventDefault();                    
		var number1 = parseInt($("#sub1").val());
		var number2 = parseInt($("#sub2").val());
		var result2 = subtract(number1, number2);
		$("#output1").text(result2);
		});
	
	$("form#multiply").submit(function(event) {  
		event.preventDefault();                    
		var number1 = parseInt($("#mult1").val());
		var number2 = parseInt($("#mult2").val());
		var result3 = multiply(number1, number2);
		$("#output2").text(result3);
		});
	$("form#divide").submit(function(event) {  
		event.preventDefault();                    
		var number1 = parseInt($("#div1").val());
		var number2 = parseInt($("#div2").val());
		var result4 = divide(number1, number2);
		$("#output3").text(result4);
		});
	});