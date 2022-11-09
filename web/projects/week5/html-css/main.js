function find(arr) {
    var maxPrice = -Infinity;
    var index;
    for(var i=0; i<arr.length; i++) {
        if(arr[i].price > maxPrice) {
            maxPrice = arr[i].price;
            index = i;
        }
    }

    return arr[index].name
}

var arr = [
	{
		name: "Ananas",
		price: 100,
	},
	{
		name: "Banana",
		price: 200,
	},
	{
		name: "kruska",
		price: 130,
	},
	{
		name: "Jabuka",
		price: 500,
	},
];

//console.log(find(arr));

arr.sort((a, b) => (b.price - a.price));
console.log(arr[0].name);
