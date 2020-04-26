import "./src/styles/global.css"
import Observer from 'fontfaceobserver'

const bodyFont = new Observer('GT Super');

bodyFont.load().then(() => {
  document.documentElement.classList.add('font-ready')
})