$(document).ready( function(){
	$('.recipe .js-menu').hide(); //Ocultando menú en recipe.html
	console.log("Documento listo");
});//final función.ready...no tocar

$('.js-show-recipe').click( function(){
	$('.page').removeClass('make');
	$('.js-show-recipe').addClass('active');
	$('.js-show-make').removeClass('active');
});//final función.click...no tocar

$('.js-show-make').click( function(){
	$('.page').addClass('make');
	$('.js-show-make').addClass('active');
	$('.js-show-recipe').removeClass('active');
});//final función.click...no tocar
