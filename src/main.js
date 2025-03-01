import './style.css'
const app = document.querySelector('#app');
let styles =['crimson','yellow','orange']
let index= 0;

setInterval(() => {
  app.style.background=styles[index]
  index=(index +1) %styles.length;
}, 1000);