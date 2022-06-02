// global variables
let key;
let data;
const searchBtn = document.querySelector("#search-button");

//returns the covid data in full
//will give this inform to function that makes a table
//@ apiKey STRING Required
//@ place STRING optional
//@ type STING optional
function getCovidData(apiKey, place, type) {
  fetch(`https://api.covidactnow.org/v2/states.json?apiKey=${apiKey}`)
    .then(res => res.json())
    .then(res => {
      console.log("covid res", res);
      //call another function that will display in table
    });
}

function getCovidKey() { 
  console.log("inside getCovidKey")
  fetch("../../apiKeys.json")
    .then(res => {
      console.log("inside .then of covidKey()")
      return res.json();
    })
    .then(res => {
      console.log("res", res);
      getCovidData(res.covidNowKey);
    }); 
};

searchBtn.addEventListener("click", function () {
  getChecked();
  getCovidKey();
});





//getChecked returns an ARRAY of filters to narrow what displays on the table
const getChecked = () => {
  //@ marked ARRAY of input type=CHECKBOX
  let marked = document.getElementsByName("filter");
  let labels = [];
  //@ m is an individual checkbox elem of ARRAY marked
  //Each m has an ARRAY of labels of length 1
  for (let m of marked) {
    if (m.checked) {
      labels.push(m.labels[0].innerText.replace(/\s/g, ""));
    }
  }
  console.log(labels);
}