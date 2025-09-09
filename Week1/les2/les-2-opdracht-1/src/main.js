import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

function imageSpin() {
  const images = document.querySelectorAll("img")
  let angle = 0;
  images.forEach(img => {
    img.addEventListener('click', function() {
        angle = (angle + 90) % 360;
        img.style.transform = `rotate(${angle}deg)`;
    })
  })
}
imageSpin()