const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');

const addDadJokes = async () => {
    const textJoke = await getDadJokes();
    const newLI = document.createElement('LI');
    newLI.append(textJoke);
    jokes.append(newLI);
};

const getDadJokes = async () => {
  const SetConfig = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await axios.get("https://icanhazdadjoke.com/", SetConfig);
  return(res.data.joke);
};

button.addEventListener('click', addDadJokes);