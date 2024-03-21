const template = document.querySelector("#pet-card-template")
const wrapper = document.createDocumentFragment()




async function petsArea() {
  const petsPromise = await fetch("https://learnwebcode.github.io/bootcamp-pet-data/pets.json")
  const petsData = await petsPromise.json()
  console.log(petsData)
  petsData.forEach(pet => {
    const clone = template.content.cloneNode(true)
    clone.querySelector("h3").textContent = pet.name
    wrapper.appendChild(clone)
  });

  document.querySelector(".list-of-pets").appendChild(wrapper)
}

petsArea()