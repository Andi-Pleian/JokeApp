const jokeApiUrl = `https://official-joke-api.appspot.com/random_joke`;

function generateJoke() {
  const jokeType = document.getElementById("jokeType-select").value;

  if (jokeType === 'general') {
    fetchGeneralJoke();
  } else if (jokeType === 'programming') {
    fetchProgrammingJoke();
  } else {
    fetchAnyJoke();
  }
}

function fetchGeneralJoke() {
  fetch (jokeApiUrl) 
    .then(response => response.json())
    .then(data => {
      if (data.type === 'general') {
        displayJoke(data);
      } else {
        fetchGeneralJoke();
      }
    })
    .catch(error => {
      console.error('Error fetching joke.');
      alert('Error fetching joke.');
    })
}

function fetchProgrammingJoke() {
  fetch (jokeApiUrl) 
    .then(response => response.json())
    .then(data => {
      if (data.type === 'programming') {
        displayJoke(data);
      } else {
        fetchProgrammingJoke();
      }
    })
    .catch(error => {
      console.error('Error fetching joke.');
      alert('Error fetching joke.');
    })
}

function fetchAnyJoke() {
  fetch (jokeApiUrl) 
    .then(response => response.json())
    .then(data => {
      displayJoke(data);
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