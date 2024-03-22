const template = document.querySelector("#pet-card-template")
const wrapper = document.createDocumentFragment()

async function start() {
  const weatherPromise = await fetch("https://api.weather.gov/gridpoints/MFL/110,50/forecast")
  const weatherData = await weatherPromise.json()
  console.log()
  const ourTemperature = weatherData.properties.periods[0].temperature
  document.querySelector("#temperatur-output").textContent = ourTemperature
  console.log(ourTemperature)
}
start()

async function petsArea() {
  const petsPromise = await fetch("https://learnwebcode.github.io/bootcamp-pet-data/pets.json")
  const petsData = await petsPromise.json()
  petsData.forEach(pet => {
    const clone = template.content.cloneNode(true)
    wrapper.appendChild(clone)
    clone.querySelector("h3").textContent = pet.name
  })
  document.querySelector(".list-of-pets").appendChild(wrapper)

}
petsArea() 