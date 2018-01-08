$(document).ready( function(){
	$('.home .js-back').hide(); //Ocultando flecha en index.html

	//alert("recetas");
	$('#p-callout').text('NUEVAS RECETAS');/*para agregar el texto nuevas recetas*/

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	renderActivities(activities);

});
/*Función que se encarga de pintar TODAS las recetas que tengan marcado el atributo "highlighted" como TRUE*/
function renderHighlightedRecipes(recipesArray) {
	//console.log('Recipes: ', recipesArray);
	//console.log('Resultado: ', recipesArray[0].highlighted);
	for(var i = 0; i < recipesArray.length; i++){ // recorriendo la variable recipesArray
		if(recipesArray[i].highlighted == true){  //condicional para buscar la propidad highlighted = true
			 // console.log('resultado', [i]);
      	renderRecipe([i]); //pasando como parámetro el objeto que cumplió la condición	
	  }
	  function renderRecipe(recipe) {
			//console.log('Voy a pintar la receta: ', [recipe]);
			$('.list-recipes').append/*('<img src="img/recipes/320x350/' + recipesArray[i].name + '.jpg">')para probar cargar solo la imagen*/
			('<a class="item-recipe" href="#"><span class="attribution"><span class="title-recipe">' + 
			recipesArray[i].title + '</span><span class="metadata-recipe"><span class="author-recipe">' + 
			recipesArray[i].source.name + '</span><span class="bookmarks-recipe"><span class="icon-bookmark">'+ 
			'</span></span></span></span>' + '<img src="img/recipes/320x350/' + recipesArray[i].name + '.jpg"/></a>');
		}
	}  
}
/* Función que se encarga de pintar todas las actividades*/
function renderActivities(activitiesArray) {
	//console.log('Activities: ', activitiesArray);

	for (var j = 0; j < activitiesArray.length; j++) {
		//console.log(j);
	renderActivity(j);

		function renderActivity(recipe) {
		 if (recipe >= 0) {
		 	$('.wrapper-message').hide();
		 	$('.list-activities').append/*('<img src="' + activities[0].userAvatar + '">');*/ 
		 		('<a href="#" class="item-activity"><span class="attribution">' + 
		 		'<span class="avatar"><img src="' + activities[0].userAvatar + '">' +
    			'</span><span class="meta"><span class="author">' + activities[0].userName + '</span>' + 
    			'made<span class="recipe">' + activities[0].recipeName +'</span>:' + activities[0].text + 
      			'<span class="location">&mdash;' + activities[0].place + '</span></span></span>' +
      			'<div class="bg-image" style="background-image: url(' + activities[0].image + ');">' + 
      			'</div></a>');
		 }		
	}	
}
}





