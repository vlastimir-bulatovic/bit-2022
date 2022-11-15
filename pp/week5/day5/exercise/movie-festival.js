"use strict";


(function(){

    function Genre(genreName) {
        this.genre = genreName;

        this.getData = function () {
            return `${this.genre.charAt()}${this.genre.charAt(this.genre.length-1)}`
        }
    }


    function Movie(movieTitle, genreInstance, movieLength) {
        this.title = movieTitle;
        this.genre = genreInstance;
        this.length = movieLength;


        this.getData = function() {
            return `${this.title}, ${this.length}min, ${this.genre.getData()}`
        }
    }


    function createMovie(movieTitle, movieGenre, movieLength) {
        return new Movie(movieTitle, new Genre(movieGenre), movieLength);
    }

    const movie1 = createMovie("Betmen", "Action", 130);
    const movie2 = createMovie("Betmen", "Action", 130);




    function Program(programDate) {
        this.date = programDate;
        this.movies = [];
        this.movieNumber = this.movies.length;

        this.addMovie = function(movieInstance) {
            if( !(movieInstance instanceof Movie) ) return;

            this.movies.push(movieInstance);
        }


        this.getData = function () {
            let moviesData = "";
            let movieLength = 0;

            this.movies.forEach((el) => {
                moviesData += `\n${el.getData()}`;
                movieLength += el.length;
            });

            return [moviesData, movieLength];
        }
    }


    function createProgram(date) {
        return new Program(date); 
    }

    const program1 = createProgram("12.12.2022");
    program1.addMovie(movie1);
    program1.addMovie(movie2);

    console.log(program1.getData());

    function Festival(festivalName) {
        this.name = festivalName;
        this.programs=[];
        this.movieNumber = 0;

        this.addProgram = function (programInstance) {
            if( !(programInstance instanceof Program) ) return;

            this.programs.push(programInstance);
            this.movieNumber+= programInstance.movieNumber;
        }


        this.getData = function () {
            let result = "";
            let data, length;

            this.programs.forEach((el) => {
                [data, length] = el.getData();
                result += `${data}`;
            });

            return `${this.name}, ${length} ${result}`;
        }
    }

    const festival = new Festival("Festival in Kan");

    festival.addProgram(program1);
    console.log(festival.getData());


})()