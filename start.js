async function start() {
  const weatherPromise = await fetch("https://api.weather.gov/gridpoints/MFL/110,50/forecast")
  const weatherData = await weatherPromise.json()
  console.log()
  const ourTemperature = weatherData.properties.periods[0].temperature
  document.querySelector("#temperatur-output").textContent = ourTemperature
  console.log(ourTemperature)
}
start()