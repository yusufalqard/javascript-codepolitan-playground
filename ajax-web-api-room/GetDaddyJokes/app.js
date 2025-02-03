const jokes = document.querySelector("#jokes");
const button = document.querySelector("button");

const addDadJokes = async () => {
  const textJoke = await getDadJokes();
  const newLI = document.createElement("LI");
  newLI.append(textJoke);
  jokes.append(newLI);
};

const getDadJokes = async () => {
  try {
    const SetConfig = {
      headers: {
        Accept: "application/json",
      },
    };
    const res = await axios.get("https://icanhazdadjoke.com/", SetConfig);
    return res.data.joke;
  } catch (error) {
    return 'No Jokes obtained';
  }
};

button.addEventListener("click", addDadJokes);
