const Events = data.events

let currentDate = data.currentDate

let pastEvents = ""

//console.log(currentDate)

let contenedorCards = document.getElementById("cards");
console.log(contenedorCards.innerHTML)

function eventosPasados (array, fecha) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].date < fecha) {
      pastEvents += `
      <div class="card" style="width: 17rem;">
      <img src="${array[i].image}" class="card-img-top fotocard" alt="${array[i].name}">
      <div class="card-body">
          <h5 class="card-title">${array[i].name}</h5>
          <p class="card-text">${array[i].description}</p>
          <div class="card3">
              <p>Price $ ${array[i].price}</p>
              <a href="./details.html?id=${array[i]._id}" class="btn btn-outline-secondary">More details</a>
          </div>
      </div>
  </div>`
    }
  }
}

eventosPasados (Events, currentDate);
contenedorCards.innerHTML = pastEvents

//console.log(pastEvents)


