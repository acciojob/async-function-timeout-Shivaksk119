//your JS code here. If required.
let test = document.querySelector("#name");
let time = document.querySelector("#delay");
let submitBtn = document.querySelector("#btn");
let output = document.querySelector("#output");

submitBtn.addEventListener("click", setTimeout(()=>{
	output.innerText = `${test}`;
}, 1000))

