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

<<<<<<< HEAD
function getCovidData(apiKey, place, type) {
    console.log("getCovidData")
    fetch(`https://api.covidactnow.org/v2/states.json?apiKey=${apiKey}`)
        .then(res => res.json())
        .then(res => {
            console.log("covid res", res);
            //call another function that will display in table
            makeTables(res, labels);
        });
}

function getCovidKey() {
    console.log("inside getCovidKey")
    var url = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/js?key=AIzaSyC2VaO0gJnfCF6DydgeBzK0GYgOfST-sIE&libraries=places&callback=initAutocomplete"
    console.log(url)
    fetch(url)
        .then(res => {
            console.log("inside .then of covidKey()")
            console.log("res", res)
            return res.json();
        })
        .then(res => {
            console.log("res", res);
            // getCovidData(res.covidNowKey);
        })
        .catch(function (err) {
            console.log(err)
        });
};

searchBtn.addEventListener("click", function() {
    console.log("searchBtn.addEventListener")
    //gives you filters
    getChecked();
    //give you data
    getCovidKey();
=======
function getCovidData(apiKey, place) {
  fetch(`https://api.covidactnow.org/v2/state/${place}.json?apiKey=${apiKey}`)
    .then(res => res.json())
    //call another function that will display in table
    .then(res => makeTables(res, labels));
}

function getCovidKey(place) {
  fetch("../../apiKeys.json")
    .then(res => res.json())
    .then(res => getCovidData(res.covidNowKey, place));
};

searchBtn.addEventListener("click", function () {
  //gives you filters
  getChecked();
  //get the place;
  let place = onPlaceChanged().address_components[0].short_name;
  //give you data
  getCovidKey(place);
>>>>>>> 2014a589780a0c09a06e565faf9d9617b85aaa22
});

let autocomplete;


function initAutocomplete() {
<<<<<<< HEAD
    console.log("initAutocomplete")
    autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'));
    componentRestrictions: {'country' ['US']}
    autocomplete.addListener('place_changed', onPlaceChanged);
=======
  const options = {
    componentRestrictions: { country: "us" },
    fields: ["address_components", "geometry"],
    strictBounds: false,
    types: ["administrative_area_level_1"],
  };
  autocomplete = new google.maps.places.Autocomplete(document.getElementById('autocomplete'), options);
  autocomplete.addListener('place_changed', onPlaceChanged);
>>>>>>> 2014a589780a0c09a06e565faf9d9617b85aaa22
}


function onPlaceChanged() {
<<<<<<< HEAD
    console.log("onPlaceChanged")    
    var place = autocomplete.getPlace();
    if (!place.geometry) {

        document.getElementById('autocomplete').placeholder = 'Enter a place';
    } else 
        {console.log(place)}
    

=======
  var place = autocomplete.getPlace();
  if (!place.geometry) {
    document.getElementById('autocomplete').placeholder =
      'Enter a place';
  } else {
    // console.log(place);
    return place;
  }
>>>>>>> 2014a589780a0c09a06e565faf9d9617b85aaa22
}

//getChecked returns an ARRAY of filters to narrow what displays on the table
const getChecked = () => {
<<<<<<< HEAD
    console.log("getChecked") 
    //@ marked ARRAY of input type=CHECKBOX
    let marked = document.getElementsByName("filter");
    labels = [];
    //@ m is an individual checkbox elem of ARRAY marked
    //Each m has an ARRAY of labels of length 1
    for (let m of marked) {
        if (m.checked) {
            labels.push(m.labels[0].innerText.replace(/\s/g, ""));
        }
=======
  //@ marked ARRAY of input type=CHECKBOX
  let marked = document.getElementsByName("filter");
  labels = [];
  //@ m is an individual checkbox elem of ARRAY marked
  //Each m has an ARRAY of labels of length 1
  for (let m of marked) {
    if (m.checked) {
      labels.push(m.labels[0].innerText.replace(/\s/g, ""));
>>>>>>> 2014a589780a0c09a06e565faf9d9617b85aaa22
    }
  }
}

function toggleFilter(event) {
  let element = event.target;
  console.log("clicked")
  console.log(element.matches(".filterBtn"))
  console.log(filterOptions.classList.contains("hidden"))
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

function isIterable(obj) {
  if (obj === null) {
    return false;
  }
  return typeof obj[Symbol.iterator] === 'function';
}

let tableBody = document.createElement("tbody");

function singleData(data, filters) {
  if (filters.length === 0) {
    let propNames = Object.keys(data.actuals);
    let headText = document.createTextNode(data.state);
    let thead = document.createElement("th");
    thead.appendChild(headText);
    table.appendChild(thead);
    for (p of propNames) {
      let row = document.createElement("tr");
      let cellText = document.createTextNode(p);
      let cell = document.createElement("td");
      cell.appendChild(cellText);
      row.appendChild(cell);
      tableBody.appendChild(row);
      cellText = document.createTextNode(data.actuals[p]);
      cell = document.createElement("td");
      cell.appendChild(cellText);
      row.appendChild(cell);
      tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
  }
  if (filters.length > 0) {
    let headText = document.createTextNode(data.state);
    let thead = document.createElement("th");
    thead.appendChild(headText);
    table.appendChild(thead);
    for (f of filters) {
      let propName = f.charAt(0).toLowerCase() + f.substring(1);
      let row = document.createElement("tr");
      let cellText = document.createTextNode(propName);
      let cell = document.createElement("td");
      cell.appendChild(cellText);
      row.appendChild(cell);
      tableBody.appendChild(row);
      cellText = document.createTextNode(data.actuals[propName]);
      cell = document.createElement("td");
      cell.appendChild(cellText);
      row.appendChild(cell);
      tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
  }
}

//@data ARRAY of OBJS
//@filters ARRAY 
function multipleData(data, filters) {
  if (filters.length > 0) {
    for (f of filters) {
      let headText = document.createTextNode(f);
      let thead = document.createElement("th");
      thead.appendChild(headText);
      table.appendChild(thead);
    }
    for (d of data) {
      let row = document.createElement("tr");
      let cell = document.createElement("td");
      let cellText = document.createTextNode("writes the states");
      cell.appendChild(cellText);
      row.appendChild(cell);
      for (f of filters) {
        let propName = f.charAt(0).toLowerCase() + f.substring(1);
        if (d.actuals[propName]) {
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
  }
  // If filters is empty make a table with all of the data
  if (filters.length === 0) {
    //I need to get all the property names first
    let propNames = Object.keys(data[0].actuals);
    //I need to make all this data the header
    for (p of propNames) {
      let headText = document.createTextNode(propNames[i]);
      let thead = document.createElement("th");
      thead.appendChild(headText);
      table.appendChild(thead);
    }
    for (d of data) {
      let row = document.createElement("tr");
      let cell = document.createElement("td");
      let cellText = document.createTextNode(d.state);
      cell.appendChild(cellText);
      row.appendChild(cell);
      for (prop of propNames) {
        if (d.actuals[prop]) {
          let cell = document.createElement("td");
          let cellText = document.createTextNode(d.actuals[prop]);
          cell.appendChild(cellText);
          row.appendChild(cell);
        } else {
          console.log("not found");
        }
      }
      tableBody.appendChild(row);
    }
    table.appendChild(tableBody);
  }
}

//@filter ARRAY of STRINGS
//@data ARRAY of OBJs
function makeTables(data, filters) {
  let headText = document.createTextNode("State");
  let thead = document.createElement("th");
  thead.appendChild(headText);
  table.appendChild(thead);
  if (isIterable(data)) {
    multipleData(data, filters);
  } else {
    singleData(data, filters);
  }
}