const api = 'https://official-joke-api.appspot.com/random_joke';

const jokeBtn = document.getElementById('jokeBtn');
const jokeDisplay = document.getElementById('jokeDisplay');

async function generateJoke() {
  try {
    let response = await fetch(api);
    let json = await response.json();
    console.log(json);

    if (json.setup && json.punchline) {
      jokeDisplay.innerHTML = `<p>${json.setup}</p><p>${json.punchline}</p>`;
    } else {
      jokeDisplay.innerHTML = `<p>Error in fetching joke. Please try again later.</p>`;
    }
  } catch (e) {
    jokeDisplay.innerHTML = `<p>Error fetching joke. Please try again later.</p>`;
    console.log('Error:', e.message);
  }
}

jokeBtn.addEventListener('click', () => {
  generateJoke();
});
