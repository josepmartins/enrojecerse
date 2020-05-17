import "./src/styles/global.css"
import Observer from 'fontfaceobserver'

const bodyFont = new Observer('Bon Vivant');

bodyFont.load().then(() => {
  document.documentElement.classList.add('font-ready')
})