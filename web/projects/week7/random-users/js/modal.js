function closeModal() {
  const modal = document.querySelector(".modal");

  document.querySelector(".modal button").addEventListener("click", () => {
    modal.classList.remove("show");

    document.body.style.position = "";
    document.body.style.top = "";
  });
}

function fillModal(modalInfo, modal) {
  modal.innerHTML = "";

  const img = document.createElement("img");
  img.src = modalInfo.picture.large;
  modal.append(img);

  const name = document.createElement("p");
  name.textContent = `Name: ${modalInfo.name.title}. ${modalInfo.name.first} ${modalInfo.name.last}`;
  modal.append(name);

  const email = document.createElement("p");
  email.textContent = `Email: ${modalInfo.email}`;
  modal.append(email);

  const birthDate = document.createElement("p");
  birthDate.textContent = `Date of birth: ${new Date(
    modalInfo.dob.date
  ).getFullYear()}/ ${new Date(modalInfo.dob.date).getMonth() + 1}/ ${
    new Date(modalInfo.dob.date).getDay() + 1
  }`;
  modal.append(birthDate);

  const address = document.createElement("p");
  address.textContent = `Address: ${modalInfo.location.street.name} ${modalInfo.location.street.number}`;
  modal.append(address);

  const phone = document.createElement("p");
  phone.textContent = `Phone number: ${modalInfo.cell}`;
  modal.append(phone);

  const city = document.createElement("p");
  city.textContent = `City: ${modalInfo.location.city}`;
  modal.append(city);

  const state = document.createElement("p");
  state.textContent = `State: ${modalInfo.location.state}`;
  modal.append(state);

  const age = document.createElement("p");
  age.textContent = `Age: ${modalInfo.dob.age}`;
  modal.append(age);

  const nationality = document.createElement("p");
  nationality.textContent = `Nationality: ${modalInfo.location.country}`;
  modal.append(nationality);

  document.querySelector(".modal").classList.add("show");
}
