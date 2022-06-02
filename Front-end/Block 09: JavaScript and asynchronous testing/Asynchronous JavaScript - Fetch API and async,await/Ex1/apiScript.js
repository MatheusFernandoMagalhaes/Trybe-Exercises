// apiScript.js
// const API_URL = 'https://icanhazdadjoke.com/';


// const fetchJoke = () => {
//   const obj = {
//     method: 'GET',
//     headers: { 'Accept': 'application/json' },
//   }
//   fetch(API_URL, obj)
//     .then((promise) => promise.json())
//     .then(({ joke }) => document.getElementById('jokeContainer').innerHTML = joke)
// };
// window.onload = () => fetchJoke();

const API_URL = 'https://icanhazdadjoke.com/';


const fetchJoke = async () => {
  try {
    const obj = {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
    }
    fetch(API_URL, obj)
      .then((promise) => promise.json())
      .then(({ joke }) => document.getElementById('jokeContainer').innerHTML = joke)

  } catch (error) {
    console.log(error);
  }
};
window.onload = () => fetchJoke();

