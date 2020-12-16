//clear anything on local storage  page is on load
window.addEventListener('load', () => {
  localStorage.clear();
});


//Populate the country page with countries name
const url = 'https://restcountries.eu/rest/v2/all?fields=name';
const countryList = document.getElementById('country_list');

let countryResp= async function () { 
  await axios.get(url).then(res => { 
    // console.log(res.data);
    const countries = res.data;
    // console.log(countries)

    let count = 0;
    let num = 0;
    for (let i = 0; i <= 5; i++) { 
      // console.log(countries[i].name);
      let ulElement = document.createElement('ul');
      countryList.appendChild(ulElement);
      count += 49;

      for (let j = num; j < count; j++) { 
        let ulElement = countryList.children[i]
        let liElement = document.createElement('li');
        let aElement = document.createElement('a');
        aElement.textContent = countries[j].name;
        aElement.setAttribute('id', `${countries[j].name}`)
        liElement.appendChild(aElement);
        ulElement.appendChild(liElement);
      }
      num += 49
    }
  }).catch(err => { 
    console.log(err);
  })
}

countryResp();


//get name of any country when clicked 
countryList.addEventListener('click', async (e) => { 
  try {
    console.log(e.target.id);
    let selectedCountry = e.target.id;
    console.log(selectedCountry);
    
    let countryUrl = `https://api.reliefweb.int/v1/countries?filter[field]=name&filter[value]=${selectedCountry}`
    
    const responseCountry = await axios.get(countryUrl);
    
    let href = responseCountry.data.data[0].href
    console.log(href);
    //name of country saved in local storage  
    localStorage.setItem('href', href);
    
    if (selectedCountry) {
      location.replace('./countryinfo.html');
    }
  } catch (e) { 
    console.log(e);
  }

  

});



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
