
function updateClock() {
  const now = new Date();
  const time = now.toLocaleTimeString('es-AR', { hour12: false });
  document.getElementById('time').textContent = time;

  const options = { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' };
  const date = now.toLocaleDateString('es-AR', options);
  document.getElementById('date').textContent = date.charAt(0).toUpperCase() + date.slice(1);
}

setInterval(updateClock, 1000);
updateClock();

// Obtener temperatura desde OpenWeatherMap
const API_KEY = '206723204317738fb197354df1f321c5';
const LAT = '-34.6037'; // Buenos Aires
const LON = '-58.3816';

function fetchTemperature() {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=metric&lang=es`)
    .then(response => response.json())
    .then(data => {
      const temp = data.main.temp.toFixed(1);
      document.getElementById('temperature').textContent = `${temp}°C`;
    })
    .catch(() => {
      document.getElementById('temperature').textContent = `--°C`;
    });
}

fetchTemperature();
setInterval(fetchTemperature, 10 * 60 * 1000);
