$(document).ready( function(){
	$('.home .js-back').hide(); //Ocultando flecha en index.html

	//alert("recetas");
	$('#p-callout').text('NUEVAS RECETAS');/*para agregar el texto nuevas recetas*/

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/

function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	//console.log('Resultado: ', recipesArray[0].highlighted);
	for(var i = 0; i < recipesArray.length; i++){ // recorriendo la variable recipesArray
		if(recipesArray[i].highlighted == true){  //condicional para buscar la propidad highlighted = true
			 // console.log('resultado', [i]);
      return renderRecipe([i]); //pasando como parámetro el objeto que cumplió la condición
	}
}
    
}


/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
	$('.list-recipes').append('<a class="item-recipe" href="#"><span class="attribution"><span class="title-recipe">' + 
		recipesArray[i].title + '</span><span class="metadata-recipe"><span class="author-recipe">' + 
		recipesArray[i].source.name + '</span><span class="bookmarks-recipe"><span class="icon-bookmark">'+ 
		'</span></span></span></span>' + '<img src="' + recipesArray[i].source.url + '"/></a>');
}


/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


