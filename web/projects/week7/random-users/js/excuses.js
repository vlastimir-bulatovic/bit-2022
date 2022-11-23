function getRandomExcuses(wrapper) {
  const url = "https://excuser.herokuapp.com/v1/excuse/10";

  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      const ul = document.createElement("ol");
      ul.innerHTML = "<h4>Excuses:</h4>";
      wrapper.append(ul);

      res.forEach((element) => {
        const item = document.createElement("li");
        item.textContent = element.excuse;
        wrapper.append(item);
      });
    })
    .catch((error) => console.log(error));
}
