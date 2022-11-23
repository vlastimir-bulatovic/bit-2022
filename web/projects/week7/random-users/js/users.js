async function getRandomUsers() {
  const males = await fetch("https://randomuser.me/api/?results=10&gender=male")
    .then((res) => res.json())
    .then((res) => res.results)
    .catch((error) => console.log(error));

  const females = await fetch(
    "https://randomuser.me/api/?results=10&gender=female"
  )
    .then((res) => res.json())
    .then((res) => res.results)
    .catch((error) => console.log(error));

  const wrapper = document.getElementById("cardWrapper");
  const modal = document.querySelector(".modal>.modal-body>.data");
  const all = males.concat(females).sort(() => Math.random() - 0.5);
  all.forEach((element) => {
    const card = document.createElement("div");
    card.addEventListener("click", () => {
      document.body.style.position = "fixed";
      document.body.style.top = `-${window.scrollY}px`;
      fillModal(element, modal);
      getRandomExcuses(modal);
      getRandomBeers(modal);
    });

    wrapper.append(card);

    const img = document.createElement("img");
    img.src = element.picture.large;
    card.append(img);

    const name = document.createElement("p");
    name.textContent = `${element.name.title}. ${element.name.first} ${element.name.last}`;
    card.append(name);

    const email = document.createElement("p");
    email.textContent = `${element.email}`;
    card.append(email);

    const birthDate = document.createElement("p");
    birthDate.textContent = `${new Date(element.dob.date).getFullYear()}/ ${
      new Date(element.dob.date).getMonth() + 1
    }/ ${new Date(element.dob.date).getDay() + 1}`;
    card.append(birthDate);
  });
}
