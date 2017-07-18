let header = document.querySelector(".header");
let basics = document.querySelector(".basics");
let story = document.querySelector(".story");
let picture = document.querySelector(".picture");

let req = new XMLHttpRequest();

req.open("GET", "https://api.github.com/users/apcatx");
req.addEventListener("load", function(){
  let obj = JSON.parse(req.response);

  header.innerHTML += `
    <h1>${obj.name}</h1>
  `
  basics.innerHTML += `
    <h2>The Basics</h2>
    <li><span>Name: </span>${obj.name}</li>
    <li><span>Github URL: </span><a href="${obj.html_url}">apcATX</a></li>
    <li><span>Inmate: </span>#${obj.id}</li>
    <li><span>Company: </span>TBD</li>
    <li><span>Website: </span><a href="${obj.blog}">thatswhatsup.com</a></li>
  `
  story.innerHTML += `
    <h2 id="story">The Story</h2>
    <p>${obj.bio}</p>
  `
  picture.innerHTML += `
    <img src="${obj.avatar_url}">
  `
  });


req.send()
