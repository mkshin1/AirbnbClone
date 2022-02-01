// creating your own promises

const getComputer = new Promise((resolve, reject) => {
  let ans = "I am getting a new computer";
  resolve(ans);
});

const nextMonth = () => {
  getComputer
    .then((resolved) => console.log(resolved))
    .catch((error) => console.log(error));
};

nextMonth();
