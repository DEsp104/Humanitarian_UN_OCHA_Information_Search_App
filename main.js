import Axios from 'axios';


let getReport = document.getElementById("getReports");
const searchReportInput = document.getElementById("reportText");



getReport.addEventListener('click', () => {

  let searchReport = searchReportInput.value;
  localStorage.setItem('value-name', searchReport);

  if (searchReport.length > 1 ) {
    document.getElementById("linkToReport").setAttribute('href', "./report/reports.html");
    document.getElementById("linkToReport").setAttribute('target', "_blank")
    // window.open("./report/reports.html");
  } else if (searchReport === "") {
    document.getElementById("linkToReport").removeAttribute("href", "target");
    alert("Enter key term");
  }

  searchReportInput.value = "";
})



//Using https://restcountries.eu/#filter-response to populate the country dropdown

const selectEleById = document.getElementById('country');
const url = 'https://restcountries.eu/rest/v2/all?fields=name';


let countryResponse = async function () { 
  await Axios.get(url).then(res => { 
    // console.log(res.data);
    const countries = res.data;
    for (let i = 0; i < countries.length; i++) { 
      // console.log(countries[i].name);
      let optionElement = document.createElement('option');
      optionElement.textContent = `${countries[i].name}`
      optionElement.setAttribute('value', `${countries[i].name}`)
      selectEleById.appendChild(optionElement);
    }

  }).catch(err => { 
    console.log(err);
  })
}

countryResponse();