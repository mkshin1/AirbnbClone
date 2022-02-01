var isMomHappy = true;

// Promise
var willIGetNewPhone = new Promise(function (resolve, reject) {
  if (isMomHappy) {
    var phone = {
      brand: "Samsung",
      color: "black",
    };
    resolve(phone); // fulfilled
  } else {
    var reason = new Error("mom is not happy");
    reject(reason); // reject
  }
});

// 2nd promise
var showOff = function (newPhone) {
  return new Promise(function (resolve, reject) {
    var message =
      "Hey friend, I have a new " +
      newPhone.color +
      " " +
      newPhone.brand +
      " phone";

    resolve(message);
  });
};

// call our promise
var askMom = function () {
  willIGetNewPhone
    .then(showOff)
    .then(function (fulfilled) {
      // yay, you got a new phone
      console.log(fulfilled);
      // output: { brand: 'Samsung', color: 'black' }
    })
    .catch(function (error) {
      // oops, mom didn't buy it
      console.log(error.message);
      // output: 'mom is not happy'
    });
};

askMom();

// promises are asynchronous

`
order of sequence of the when calling the chained promises 
1. before asking Mom
2. after asking mom
3. Hey friend, I have a new black Samsung phone.
`;

// ES7: Full example
const isMomHappy = true;

// Promise
const willIGetNewPhone = new Promise((resolve, reject) => {
  if (isMomHappy) {
    const phone = {
      brand: "Samsung",
      color: "black",
    };
    resolve(phone);
  } else {
    const reason = new Error("mom is not happy");
    reject(reason);
  }
});

// 2nd promise
async function showOff(phone) {
  return new Promise((resolve, reject) => {
    var message =
      "Hey friend, I have a new " + phone.color + " " + phone.brand + " phone";

    resolve(message);
  });
}

// call our promise in ES7 async await style
async function askMom() {
  try {
    console.log("before asking Mom");

    let phone = await willIGetNewPhone;
    let message = await showOff(phone);

    console.log(message);
    console.log("after asking mom");
  } catch (error) {
    console.log(error.message);
  }
}

// async await it here too
(async () => {
  await askMom();
})();
