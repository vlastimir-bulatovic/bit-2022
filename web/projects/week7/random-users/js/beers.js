function getRandomBeers(wrapper) {
  const beerIds = [
    Math.floor(Math.random() * 325) + 1,
    Math.floor(Math.random() * 325) + 1,
    Math.floor(Math.random() * 325) + 1,
  ];

  const url = `https://api.punkapi.com/v2/beers?ids=${beerIds.join("|")}`;

  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      const beerWrapper = document.createElement("div");
      beerWrapper.innerHTML = "<h4>Beers:</h4>";
      beerWrapper.classList.add("beer-wrapper");
      wrapper.append(beerWrapper);

      res.forEach((element) => {
        const card = document.createElement("div");
        card.innerHTML = `<img src="${element.image_url}" alt="${element.name}">  
        <p><b>Beer name: </b>${element.name}</p>
        <p><b>First brewed:</b> ${element.first_brewed}</p>
        <p><b>description:</b> ${element.description}</p>
        `;

        beerWrapper.append(card);
      });
    })
    .catch((error) => console.log(error));
}
