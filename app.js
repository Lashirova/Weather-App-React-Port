window.addEventListener('load',()=> {
  let long;
  let lat;
  let temperatureDescription = document.querySelector('.temperature-description');
  let temperatureDegree = document.querySelector('.temperature-degree');
  let locationTimeZone = document.querySelector('.location-timezone');
  let apiKey='2082573baa2c88e4ee84edd0044c8192';
  if(navigator.geolocation){
navigator.geolocation.getCurrentPosition(position => {
  long=position.coords.longitude;
  lat=position.coords.latitude;

  const proxy = 'https://cors-anywhere.herokuapp.com/'
;
const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`

  fetch(api)
        .then(res => {
          return res.json();
        })
        .then(data =>{
            console.log(data);
            const {temperature, summary}= data.currently;
            temperatureDegree.textContent = temperature;
          })
        });
      }
    });

  