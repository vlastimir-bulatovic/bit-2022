"use strict";


(function(){

    function Product(productName, productPrice, productExpirationDate) {
        this.id = Math.floor(Math.random() * 90000) + 10000;
        this.name = productName;
        this.price = Number(productPrice).toFixed(2);
        this.expirationDate = productExpirationDate;


        this.getData = function () {
            return `${this.name.slice(0,2).toUpperCase()+this.id}, ${this.name}, ${this.price}`;
        }
    }

    const product1 = new Product("Banane", 344.99, "11.15.2023");
    const product2 = new Product("Bananica", 34.99, "10.15.2023");
    const product3 = new Product("Vino", 2424.99, "12.15.2023");
    const product4 = new Product("Jogurt", 344.99, "1.11.2022");

    function ShoppingBag() {
        this.products = [];


        this.addProduct = function (productInstance) {
            if( !(productInstance instanceof Product)  && new Date(productInstance.expirationDate).getTime() > new Date().getTime()) return;

            this.products.push(productInstance);
        }

        this.getAveragePrice = function () {
            return this.products.reduce((sum, current) => sum + Number(current.price), 0)  / this.products.length;
        }

        this.getMostExpensive = function () {
            return Math.max(...this.products.map((el) => el.price));
        }

        this.totalPrice = function () {
            let total = 0;

            this.products.forEach( (el) => total += Number(el.price));

            return total;
        }
    }

    const shoppingBag = new ShoppingBag();

    shoppingBag.addProduct(product1);
    shoppingBag.addProduct(product2);
    shoppingBag.addProduct(product3);
    shoppingBag.addProduct(product4);


    function PaymentCard(accountBallance, accountStatus, cardExpirationDate) {
        this.balance = Number(accountBallance).toFixed(2);
        this.isActive = accountStatus;
        this.expirationDate = cardExpirationDate;
    }

    const userAccount = new PaymentCard(20000, true, "02.03.2023");


    function checkoutAndBuy(shoppingBag, account) {
        if(shoppingBag.totalPrice() > account.balance) return `You need $${shoppingBag.totalPrice()-account.balance} more`;
        if(!account.isActive) return `Your account isn't active`;
        if(new Date(account.expirationDate).getTime() < new Date().getTime()) return `Your card expired`;

        account.balance -= shoppingBag.totalPrice();

        return `Success`
    }

    console.log(checkoutAndBuy(shoppingBag, userAccount));
    console.log("balance after payment:", userAccount.balance);

})();
