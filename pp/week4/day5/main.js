// 1. Calculator


function ModernCalculator(a,b,c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.arg = arguments;

    this.sum = function() {
        return this.a + this.b + this.c;
    };

    this.mul = function() {
        return this.a * this.b * this.c;
    };

    this.div = function () {
        return this.a / this.b / this.c;
    };

    this.sub = function () {
        return this.a - this.b - this.c;
    };

    this.sqrt = function () {
        
        var r = this.a;

        var precision = Math.pow(10, -10);
        
        while (Math.abs(this.a-r*r) > precision) {
            r = (r + this.a / r) / 2;
        }

        return Math.round(r * 100) / 100;
    };

    this.pow = function () {
        var product = 1;

        for(var i = 0; i< this.b; i++) {
            product *= this.a;
        }

        return product;
    };

    this.changeA = function (newNumber) {
        this.a = newNumber;
    };

    this.changeB = function (newNumber) {
		this.b = newNumber;
	};

    this.changeC = function (newNumber) {
		this.c = newNumber;
	};

    this.quadraticFormula = function () {
        var newArra = []; 
        var tmp = Math.pow(this.b, 2) - (4 * this.a * this.c); // The discriminant

        if(tmp < 0){ // The discriminant is smaller then zero so, there are two complex roots.

			tmp *= -1;
			newArra[0] = -this.b + " + " + Math.sqrt(tmp) / (2 * this.a) + "i";
			newArra[1] = -this.b + " - " + Math.sqrt(tmp) / (2 * this.a) + "i";
            
			return newArra;
		}else if(tmp === 0) { // The discriminant is smaller then zero so, there are two real roots.
			return -this.b / (2 * this.a);
		}
        
        newArra[0] = (-this.b + Math.sqrt(tmp)) / (2 * this.a);
        newArra[1] = (-this.b - Math.sqrt(tmp)) / (2 * this.a);

        return newArra;
    };

    this.makeArray = function() {
        return this.arg;
    };

    this.isEven = function () {
        if(this.a === 0 || this.b === 0 || this.c  === 0) return false;

        if(this.a % 2 === 0 && this.b % 2 === 0 && this.c % 2 === 0 ) return true;

        return false;
    };

    this.isPrime = function () {
        var newArray = [this.a, this.b, this.c];

        for(var i =0; i < newArray.length; i++) {
            
            if(newArray[i] < 2) return false;

            for(var j =2; j<Math.sqrt(newArray[i]); j++) {
                if(newArray[i] % j === 0 ) return false
            }
        }

        return true;
    };

    this.convertToString = function () {
        return "" + this.a + this.b + this.c;
    };
    
    this.sumAndMultiply = function () {
        return this.sum() *123; 
    };

    this.reverseNumber = function () {
        var num = this.sumAndMultiply() + "";
        var newNum = "";

        for(var i = num.length-1; i >= 0; i--) {
            newNum += num[i];
        }
        return newNum;
    };

    this.createNewProperty = function (n) {
        this.d = n;
        return true;
    };


}

var calc = new ModernCalculator(2, 4, 2);

console.log(calc.quadraticFormula());
