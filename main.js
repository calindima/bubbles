"use strict";

const divs = document.querySelectorAll('#app div');

divs.forEach( div => {
  //div.style.transform = `translate(20vw, 50vh)`;  
    div.addEventListener("mouseenter", () => {
        div.style.transform = `translate( ${Math.random()*100}vw, ${Math.random()*100}vh )`;
        div.style.backgroundColor = `hsl( ${Math.random()*360}, ${Math.random()*100}%, ${Math.random()*100}% )`;
    } )
} )