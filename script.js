const baseURL = "https://fruityvice.com/api/fruit/"
const modals = document.querySelectorAll(".modal")

modals.forEach(modal => {

  fetch(`${baseURL}${modal.dataset.pageid}`)
    .then(res => {
      return res.json()

    }).then(data => {
      let info = document.createElement("p")

      info.innerText = `Fruit: ${data.name}

    Order: ${data.order}
    Family: ${data.family}
    Genus: ${data.genus}
    Calories: ${data.nutritions.calories}
    Fat: ${data.nutritions.fat}g
    Sugar: ${data.nutritions.sugar}g
    Carbohydrates: ${data.nutritions.carbohydrates}g
    Protein: ${data.nutritions.protein}g`

      modal.appendChild(info)

    }).catch(error => {
      console.error('Error', error)
    })
})


const fruits = document.querySelectorAll(".fruit")
const overlay = document.querySelector(".overlay")
const buttons = document.querySelectorAll("button")

for (let i = 0; i < modals.length; i++) {
  if (fruits[i].id === modals[i].id) {

    fruits[i].addEventListener("click", () => {
      modals[i].classList.remove("hidden")
      overlay.classList.remove("hidden")
    })
  }
}

const closeModal = () => {
  for (let i = 0; i < modals.length; i++) {
    modals[i].classList.add("hidden")
    overlay.classList.add("hidden")
  }
}

buttons.forEach(button => {
  button.addEventListener("click", closeModal)
})

overlay.addEventListener("click", closeModal)

document.addEventListener("keydown", (e) => {
  for (let i = 0; i < modals.length; i++) {

    if (e.key === "Escape" && !modals[i].classList.contains("hidden")) {
      closeModal()
    }
  }
})