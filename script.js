const baseURL = "https://fruityvice.com/api/fruit/"
const modals = document.querySelectorAll(".modal")

modals.forEach(modal => {

  fetch(`${baseURL}${modal.dataset.pageid}`)
    .then(res => {
      return res.json()

    }).then(data => {
      let info = document.createElement("p")
      // info.classList.add("modal")

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
      console.log(modal)

    }).catch(error => {
      console.error('Error', error)
    })
})