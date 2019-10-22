// console.log("CONNECTED!");
var movies = [
    {
        title: "Matrix",
        rating: 5,
        hasWatched: false
    },
    {
        title: "Gattaca",
        rating: 4.5,
        hasWatched: true
    },
    {
        title: "Frozen",
        rating: 4,
        hasWatched: false
    },
    {
        title: "Lord Of The Rings",
        rating: 5,
        hasWatched: true
    }
];

function printMovies(x){
    if(movies[x].hasWatched === true){
        console.log('You have watched "' + movies[x].title +'" - ' + movies[x].rating + ' stars.');
    } else   
        console.log('You have not seen "' + movies[x].title +'" - ' + movies[x].rating + ' stars.');
}

for(var i = 0; i < movies.length; i++){
    printMovies(i);
}