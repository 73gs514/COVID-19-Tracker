// import covidNowKey from "../../apiKeys.json";

const searchBtn = document.querySelector("#search-button");

searchBtn.addEventListener("click", () => {
  getChecked();
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
      labels.push(m.labels[0].innerText.replace(/\s/g, ""))
    }
  }
  console.log(labels);
}

const getCovidData = (place) => {
  fetch("")
}
