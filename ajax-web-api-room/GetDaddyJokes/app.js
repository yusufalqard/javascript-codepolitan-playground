const getDadJokes = async () => {
  const SetConfig = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await axios.get("https://icanhazdadjoke.com/", SetConfig);
  console.log(res.data.joke);
};
