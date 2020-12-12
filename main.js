import Axios from 'axios';

let getReport = document.getElementById("getReports");
// console.log(getReport)
//following variables are from inputs and select elements
const searchReportInput = document.getElementById("reportText");
const countrySelect = document.getElementById("country");
const organizationSelect = document.getElementById("organizationSelect");
const disasterSelect = document.getElementById("disasterSelect");
const languageSelect = document.getElementById("languageSelect");

getReport.addEventListener('click', () => {

  //value from keyword input save to local storage
  let searchReport = searchReportInput.value;
  localStorage.setItem('value-name', searchReport);

  //value from country input save to local storage
  let countryValue = countrySelect.value;
  localStorage.setItem('country-value', countryValue);

  //value from disaster input save to local storage
  let disasterValue = disasterSelect.value;
  localStorage.setItem('disaster-value', disasterValue);

  //value from Organization input save to local storage
  let orgValue = organizationSelect.value;
  localStorage.setItem('org-value', orgValue);

  //value from Organization input save to local storage
  let langValue = languageSelect.value;
  localStorage.setItem('lang-value', langValue);

  
  if (searchReport.length > 1) {
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


//Below is the code to open the nav up when hamburger icon is clicked

document.querySelector('.hamburger').addEventListener('click', () => {
	document.getElementById("myDropdown").classList.toggle("show");
})

/* The code below states that whenever the user clicks any part of the window, the dropdown will close.The if statement states that if user click any where but the button, then it matches () will return false and with ! this will turn false into true. */

window.onclick = function(e) {

  if (!e.target.matches('.hambtn')) {
    
	var hamcontent = document.getElementsByClassName("ham-dropdowncontent");
    	for (let i = 0; i < hamcontent.length; i++) {
      		let openHamContent = hamcontent[i];
      		if (openHamContent.classList.contains('show')) {
        	openHamContent.classList.remove('show');
      }
    }
  }
}

