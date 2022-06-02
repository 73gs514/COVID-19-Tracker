let key;
let data;
const searchBtn = document.querySelector("#search-button");

searchBtn.addEventListener("click", () => {
  getChecked();
  getCovidKey().then(res => {
    key = res.covidNowKey;
    console.log("key", key);
    getCovidData(key).then(res => console.log(res));
  })
});

const getCovidKey = () => fetch("../../apiKeys.json").then(res => res.json());

const getCovidData = (apiKey, place, type) => {
  fetch(`https://api.covidactnow.org/v2/states.json?apiKey=${apiKey}`).then(res => res.json());
}


//getChecked returns an ARRAY of filters to narrow what displays on the table
const getChecked = () => {
  //@ marked ARRAY of input type=CHECKBOX
  let marked = document.getElementsByName("filter");
  let labels = [];
  //@ m is an individual checkbox elem of ARRAY marked
  //Each m has an ARRAY of labels of length 1
  for (let m of marked) {
    if (m.checked) {
      labels.push(m.labels[0].innerText.replace(/\s/g, ""))
    }
  }
  console.log(labels);
}