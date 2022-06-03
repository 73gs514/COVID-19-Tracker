// global variables
let key;
let data;
let labels = [];
const searchBtn = document.querySelector("#search-button");
const filterBtn = document.querySelector(".filterBtn");
const filterOptions = document.querySelector(".filterOptions")
const table = document.querySelector(".results-table");

//returns the covid data in full
//will give this inform to function that makes a table
//@ apiKey STRING Required
//@ place STRING optional
//@ type STING optional
function getCovidData(apiKey, place) {
  fetch(`https://api.covidactnow.org/v2/states.json?apiKey=${apiKey}`)
    .then(res => res.json())
    //call another function that will display in table
    .then(res => makeTables(res, labels));
}

function getCovidKey() {
  fetch("../../apiKeys.json")
    .then(res => res.json())
    .then(res => getCovidData(res.covidNowKey));
};

searchBtn.addEventListener("click", function () {
  //gives you filters
  getChecked();
  //give you data
  getCovidKey();
});

//getChecked returns an ARRAY of filters to narrow what displays on the table
const getChecked = () => {
  //@ marked ARRAY of input type=CHECKBOX
  let marked = document.getElementsByName("filter");
  labels = [];
  //@ m is an individual checkbox elem of ARRAY marked
  //Each m has an ARRAY of labels of length 1
  for (let m of marked) {
    if (m.checked) {
      labels.push(m.labels[0].innerText.replace(/\s/g, ""));
    }
  }
}

function toggleFilter(event) {
  let element = event.target;
  if (element.matches(".filterBtn")) {
    if (filterOptions.classList.contains("hidden")) {
      filterOptions.classList.replace("hidden", "visible");
    } else {
      filterOptions.classList.replace("visible", "hidden");
    }
  }
}

filterBtn.addEventListener("click", function (e) {
  toggleFilter(e);
});

//@filter ARRAY of STRINGS
//@data ARRAY of OBJs
function makeTables(data, filters) {
  console.log("makeTables", data)
  let tableBody = document.createElement("tbody");
  //If filters is empty make a table with all of the data
  if (filterBtn.length === 0) {
    for (d of data) {
      //make the rows and columns
      console.log("d.actuals", d.actuals);
      let row = document.createElement("tr");
      let cell = document.createElement("td");
      let cellText = document.createTextNode(d.actuals);
    }
  } else {
    //check if data is iterable
    console.log(data.length, filters);
    let headText = document.createTextNode("State");
    let thead = document.createElement("th");
    thead.appendChild(headText);
    table.appendChild(thead);
    for (let i = 0; i < filters.length; i++) {
      let headText = document.createTextNode(filters[i]);
      let thead = document.createElement("th");
      console.log("headText", headText);
      thead.appendChild(headText);
      table.appendChild(thead);
    }
    for (d of data) {
      console.log("for loop", d);
      let row = document.createElement("tr");
      let cell = document.createElement("td");
      let cellText = document.createTextNode(d.state);
      cell.appendChild(cellText);
      row.appendChild(cell);
      for (f of filters) {
        let propName = f.charAt(0).toLowerCase() + f.substring(1);
        console.log("word", propName);
        if (d.actuals[propName]) {
          console.log("found", d.actuals[propName]);
          //make a table row
          let cell = document.createElement("td");
          let cellText = document.createTextNode(d.actuals[propName]);
          cell.appendChild(cellText);
          row.appendChild(cell);
        } else {
          console.log("not found");
        }
      }
      tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
    table.setAttribute("border", "2");
  }
  //for the columns take the length of filters
  //for the rows, make a check to only read the data that has the words that filters has.
  //the way you make these is after iterating
  //table (look at link for further help" https://stackoverflow.com/questions/14643617/create-table-using-javascript)
}
