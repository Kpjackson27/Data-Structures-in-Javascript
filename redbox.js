//read contents of the file 
function createArr(file){
	var arr = read(file).split("\n");
	for(var i =0; i<arr.length; ++i){
		arr[i] = arr[i].trim();
	}
	return arr;
}

//take movie array and store the contents in a list
var movieList = new List();
for(var i = 0; i<movies.length; ++i){
	movieList.append(movies[i]);
}

//display the contents of the list
function displayList(list){
	for(list.front();list.currPos() < list.length(); list.next()){
		if(list.getElement() instanceof Customer){
			print(list.getElement()["name"] + "," + 
				list.getElement()["movie"]);
		}
		else {
			print(list.getElement());
		}
	}
}

//Initialize customer object
var customers = new List();

//create customer object
function Customer(name, movie){
	this.name = name;
	this.movie = movie;
}

//Allow a cusotmer to check out a movie
function checkOut(name, movie, filmList, customerList){
	if(movieList.contains(movie)){
		var c = new Customer(name, movie);
		customerList.append(c);
		filmList.remove(movie);
	}
	else {
		print(movie + " is not available.");
	}
}

/**** Testing out Method ***/
/* var movies = createArr("films.txt");
 * var movieList = new List();
 * var customers = new List();
 * for(var i = 0; i < movies.length; ++i){
 *		movieList.append(movies[i]);
 *}
 *print("Available movies: \n");
 *displayList(movieList);
 *putstr("\nEnter your name: ");
 *var name = readline();
 *putstr("What movie would you like?");
 *var movie = readline();
 *checkOut(name, movie, movieList, customers);
 *print("n\Customer Rentals: \n");
 *displayList(customers);
 *print("\nMovies Now Available/n");
 *displayList(movieList);
 */




