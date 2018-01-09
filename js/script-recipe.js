$(document).ready( function(){
	$('.recipe .js-menu').hide(); //Ocultando menú en recipe.html
	console.log("Documento listo");//mostrar en consola "documento listo"
});//final función.ready...no tocar

$('.js-show-recipe').click( function(){
	$('.page').removeClass('make');//removiendo clase "make" al div con clase "page"
	$('.js-show-recipe').addClass('active');//agregando clase "active" al a con clase "js-show-recipe"
	$('.js-show-make').removeClass('active');//removiendo clase "active" al a con clase "js-show-make"
});//final función.click pestaña recipe...no tocar

$('.js-show-make').click( function(){
	$('.page').addClass('make');//agregando clase "make" al div con clase "page"
	$('.js-show-make').addClass('active');//agregando clase "active" al a con clase "js-show-make"
	$('.js-show-recipe').removeClass('active');//removiendo clase "active" al a con clase "js-show-recipe"
});//final función.click pestaña make...no tocar

$('.icon-arrow-left-alt').click( function(){
	if ($('.page').hasClass('make')) {//si el div clase "page" tiene la clase "make" 
		$('.page').removeClass('make');//removiendo clase "make" al div con clase "page"
		$('.js-show-recipe').addClass('active');//agregando clase "active" al a con clase "js-show-recipe"
		$('.js-show-make').removeClass('active');//removiendo clase "active" al a con clase "js-show-make"
	} else { //de otro modo
		$('.page').addClass('make');//agregando clase "make" al div con clase "page"
		$('.js-show-make').addClass('active');//agregando clase "active" al a con clase "js-show-make"
		$('.js-show-recipe').removeClass('active');//removiendo clase "active" al a con clase "js-show-recipe"
	}
});//final funcion.click flecha atrás...no tocar
