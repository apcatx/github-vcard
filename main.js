let header = document.querySelector(".header");
let basics = document.querySelector(".basics");
let story = document.querySelector(".story");

let req = new XMLHttpRequest();

req.open("GET", "https://api.github.com/users/apcatx");
req.addEventListener("load", function(){
  let obj = JSON.parse(req.response);
  header.innerHTML += ``

  basics.innerHTML += `
  <p>Name: ${obj.name}</p>
  <p>Github URL: <a href="${obj.html_url}">apcATX</a></p>
  <p>Inmate #: ${obj.id}</p>
  <p>Company: TBD</p>
  <p>Website: <a href="${obj.blog}">thatswhatsup.com</a></p>
  `
  story.innerHTML += `
  <p>Hello my name is Austin</p>

  `
  });


req.send()
