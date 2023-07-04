const baseURL = "https://fruityvice.com/api/fruit/"
const sections = document.querySelectorAll("section")

sections.forEach(section => {

  fetch(`${baseURL}${section.dataset.pageid}`)
    .then(res => {
      return res.json()

    }).then(data => {
      let info = document.createElement("p")
      info.classList.add("modal")

      info.innerText = `Fruit: ${data.name}
    Order: ${data.order}
    Family: ${data.family}
    Genus: ${data.genus}
    Calories: ${data.nutritions.calories}
    Fat: ${data.nutritions.fat}g
    Sugar: ${data.nutritions.sugar}g
    Carbohydrates: ${data.nutritions.carbohydrates}g
    Protein: ${data.nutritions.protein}g`

      section.appendChild(info)

    }).catch(error => {
      console.error('Error', error)
    })
})