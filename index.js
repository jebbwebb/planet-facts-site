let planetImage = document.querySelector('.planet-image');
const planetBtn = Array.from(document.querySelectorAll('.planet-btn'));
let description = document.querySelector('.description ');
let planetName = document.querySelector('.planet-name');
let planetSource = document.querySelector('.source');
let planetIndex = 2;
let rotationTime = document.querySelector('.rotation-value');
let revolutionTime = document.querySelector('.revolution-value');
let radius = document.querySelector('.radius-value');
let averageTemp = document.querySelector('.average-temp-value');
let overviewBtn = document.querySelector('.overview');
let internalStructure = document.querySelector('.internal-structure');
let surfaceGeology = document.querySelector('.surface-geology');
let geologyImage = document.querySelector('.geology-image');
let btnAnimate = document.querySelectorAll('#btn-animate');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-planets');
console.log(navMenu);

fetch('data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    description.innerText = data[planetIndex].overview.content;
    planetImage.src = data[planetIndex].images.planet;
    planetName.innerText = data[planetIndex].name;
    planetSource.innerText = data[planetIndex].overview.source;
    rotationTime.innerText = data[planetIndex].rotation;
    revolutionTime.innerText = data[planetIndex].revolution;
    radius.innerText = data[planetIndex].radius;
    averageTemp.innerText = data[planetIndex].temperature;
    overviewBtn.style.background = '#6c2cd4';

    planetBtn.forEach((button) => {
      button.addEventListener('click', (e) => {
        event.preventDefault();
        planetIndex = planetBtn.indexOf(e.target);
        button[planetIndex] = description.innerText =
          data[planetIndex].overview.content;
        planetImage.src = data[planetIndex].images.planet;
        planetName.innerText = data[planetIndex].name;
        planetSource.innerText = data[planetIndex].overview.source;
        rotationTime.innerText = data[planetIndex].rotation;
        revolutionTime.innerText = data[planetIndex].revolution;
        radius.innerText = data[planetIndex].radius;
        averageTemp.innerText = data[planetIndex].temperature;
        geologyImage.style.display = 'none';
        overviewBtn.style.background = '#6c2cd4';
        surfaceGeology.style = 'btnAnimate';
        internalStructure.style = 'btnAnimate';
      });
      overviewBtn.addEventListener('click', (e) => {
        event.preventDefault();
        planetSource.innerText = data[planetIndex].overview.source;
        planetImage.src = data[planetIndex].images.planet;
        description.innerText = data[planetIndex].overview.content;
        geologyImage.style.display = 'none';
        overviewBtn.style.background = '#6c2cd4';
        surfaceGeology.style = 'btnAnimate';
        internalStructure.style = 'btnAnimate';
      });
      internalStructure.addEventListener('click', (e) => {
        event.preventDefault();
        description.innerText = data[planetIndex].structure.content;
        planetImage.src = data[planetIndex].images.internal;
        geologyImage.style.display = 'none';
        internalStructure.style.background = '#6c2cd4';
        overviewBtn.style = 'btnAnimate';
        surfaceGeology.style = 'btnAnimate';
      });
      surfaceGeology.addEventListener('click', (e) => {
        event.preventDefault();
        description.innerText = data[planetIndex].geology.content;
        planetImage.src = data[planetIndex].images.planet;
        geologyImage.src = data[planetIndex].images.geology;
        geologyImage.style.display = 'block';
        surfaceGeology.style.background = '#6c2cd4';
        overviewBtn.style = 'btnAnimate';
        internalStructure.style = 'btnAnimate';
      });
    });
  });

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});
planetBtn.forEach((button) =>
  button.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  })
);
