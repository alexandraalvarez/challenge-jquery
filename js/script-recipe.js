$(document).ready( function(){
	$('.recipe .js-menu').hide(); //Ocultando menú en recipe.html
	console.log("Documento listo");
});//final función.ready...no tocar

$('.js-show-recipe').click( function(){
	$('.page').removeClass('make');
});//final función.click...no tocar

$('.js-show-make').click( function(){
	$('.page').addClass('make');
});//final función.click...no tocar
