"use strict";

(function (){

    const continent = {
		ASIA: "AS",
        AUSTRALIA: "AS",
		AFRICA: "AF",
        AMERICA:{
            NORTH:"NA",
            SOUTH:"SA" 
        },
		EUROPE: "EU"
	};

    Object.freeze(continent);

    function createPlayer(personName, personSurname, personBirthDate, playerBetAmount, countryName, countryOdds, countryContinent) {
        return new Player(
            new Person(personName, personSurname, personBirthDate), 
            playerBetAmount, 
            new Country(countryName, countryOdds, countryContinent));
    }

    function createBettingPlace(addressCountry, addressCity, addressZip, addressStreet, addressStreetNumber) {
        return new BettingPlace( new Address(addressCountry, addressCity, addressZip, addressStreet, addressStreetNumber) );
    }

    let player1 = createPlayer("Pera","Petrovic","06.19.1998", 500, "Albania", 2.1, continent.EUROPE);
    let player2 = createPlayer("Pera","Petrovic","06.19.1998", 600, "Monte Negro", 2.1, continent.EUROPE);
    let player3 = createPlayer("Pera","Petrovic","06.19.1998", 500, "Serbia", 2.1, continent.EUROPE);
    let player4 = createPlayer("Pera","Petrovic","06.19.1998", 600, "Monte Negro", 2.1, continent.EUROPE);

    let betPlace1 = createBettingPlace("Serbia", "Belgrade", 1100, "Nemanjina", "12a");
    betPlace1.addPlayer(player1);
    betPlace1.addPlayer(player2);

    let betPlace2 = createBettingPlace("Serbia", "Belgrade", 1100, "Nemanjina", "12a");
    betPlace2.addPlayer(player3);
    betPlace2.addPlayer(player4);

    let bettingHouse = new BettingHouse("Football world cup");
    bettingHouse.addBettingPlace(betPlace1);
    bettingHouse.addBettingPlace(betPlace2);
    console.log(bettingHouse.getData());

    function Country(countryName, countryOdds, countryContinent) {
        this.name = countryName;
        this.odds = countryOdds;
        this.continent = countryContinent;
    
    }


    function Person(personName, personSurname, personBirthDate) {

        this.name = personName;
        this.surname = personSurname;
        this.birthDate = personBirthDate;

        this.getData = function() {
            return `${this.name} ${this.surname}, ${new Date().getFullYear() - new Date(this.birthDate).getFullYear()} years`;
        }
    }


    function Player(personInstance, playerBetAmount, countryInstance) {
        if(personInstance instanceof Person) this.person = personInstance;
        if(countryInstance instanceof Country) this.country = countryInstance;
        this.betAmount = playerBetAmount;

        this.expectedWinAmount = function () {
            return this.country.odds * this.betAmount;
        }

        this.getData = function() {
            return `\n\t\t${this.country.name}, ${this.expectedWinAmount()} eur, ${this.person.getData()}`;
        }

    }


    function Address(addressCountry, addressCity, addressZip, addressStreet, addressStreetNumber) {
        this.country = addressCountry;
        this.city = addressCity;
        this.postalCode = addressZip;
        this.street = addressStreet;
        this.streetNumber = addressStreetNumber;

        this.getData = function () {
            return `${this.street} ${this.streetNumber}, ${this.postalCode} ${this.city}, ${this.country}`;
        }
    }


    function BettingPlace(bettingAddress) {
        if(bettingAddress instanceof Address) this.address = bettingAddress;
        this.players = [];


        this.getData = function () {
            let allBets = 0;
            let playersData = "";

            this.players.forEach((el) => {
                allBets += el.expectedWinAmount();
                playersData += el.getData();
            });

            return `\n\t${this.address.street}, ${this.address.postalCode} ${this.address.city}, sum of bets: ${allBets} ${playersData}`;
        }
        
        this.addPlayer = function (player) {
            if( !(player instanceof Player) ) return ;

            this.players.push(player);
        }

    }

    function BettingHouse(bettingCompetition) {
        this.competition = bettingCompetition;
        this.bettingPlaces = [];
        this.playerNumber = 0;


        this.addBettingPlace = function (bettingPlace) {
            if( !(bettingPlace instanceof BettingPlace) ) return;

            this.bettingPlaces.push(bettingPlace);
            this.playerNumber += bettingPlace.players.length;
        }


        this.getData = function () {

            let bettingData = "";
            this.bettingPlaces.forEach((el) => bettingData += el.getData());

            return `${this.competition} Winner, ${this.bettingPlaces.length} betting places, ${this.playerNumber} bets ${bettingData} \n\nThere are ${mostBets()}`
        }

        function mostBets() {
            let tmpArrayOfCountries=[]; 
            let count = 0, tmpCount=0;
            let country = "";

            this.bettingPlaces.forEach((el) => {
                el.players.forEach((element) => {
                    tmpArrayOfCountries.push(element.country.name);
                });
            })
            tmpArrayOfCountries = tmpArrayOfCountries.sort();

            tmpArrayOfCountries.forEach((el, i, arr) => {
                
                const regex = new RegExp(`${el}`, "g");

                tmpCount = (arr.join(" ").match(regex) || []).length;

                if(tmpCount > count){
                    count = tmpCount;
                    country = el;
                } 
            })
            
            return `${count} bet${(count>1) ? "s":"" } on ${country}`;
        }

    }


})();