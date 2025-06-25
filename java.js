const myObj = {
  name: "kosi",
  age: 300,
  hobbies: ["smacking", "fighting"],
};

console.log(myObj);
console.log(myObj.hobbies[0]);

delete myObj.name;
myObj.location = "anambra";
console.log(myObj);

const fullAnswer = JSON.stringify(myObj);
console.log(fullAnswer);
console.log(fullAnswer.name);

const secondAnswer = JSON.parse(fullAnswer);
console.log(secondAnswer);

const playGuiter = () => {
  return "playing Guiter";
};

console.log(playGuiter());

const view = document.querySelector("#white");
const div = view.querySelector("div");
const para = div.querySelector("p");

const doSomething = () => {
  return alert("welcome");
};

para.addEventListener("click", doSomething, false);
para.removeEventListener("click", doSomething, false);

para.addEventListener("click", (event) => {
  event.target.textContent = "clicked";
});

view.addEventListener("click", (event) => {
  event.target.toggle.style.backgroundColor = "pink";
});
div.addEventListener("click", (event) => {
  div.style.backgroundColor = "yellow";
});

console.log(para);




const shoe = {
  size : 53,
  type : 10
}


// const azu = JSON.stringify(shoe)

// console.log(azu);

// const ewu = JSON.parse(azu)
// console.log(ewu);


sessionStorage.setItem("azundu", JSON.stringify(shoe));

const myData = JSON.parse(sessionStorage.getItem("azundu"));

console.log(myData);



