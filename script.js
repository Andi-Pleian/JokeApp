function generateJoke() {
  const jokeApiUrl = `https://official-joke-api.appspot.com/random_joke`;

  fetch (jokeApiUrl) 
    .then(response => response.json())
    .then(data => {
      displayjoke(data);
    })
    .catch(error => {
      console.error('Error fetching joke.');
      alert('Error fetching joke.');
    })
}

function displayjoke(data) {
  const jokeSetup = data.setup;
  const jokePunchline = data.punchline;

  const jokeDivInfo = document.getElementById('joke-div');
  jokeDivInfo.innerHTML = '';

  const jokeHTML = `
    <p>${jokeSetup}</p>
    <p>${jokePunchline}</p>
  `;

  jokeDivInfo.innerHTML = jokeHTML;
  jokeDivInfo.style.display = "block";
}