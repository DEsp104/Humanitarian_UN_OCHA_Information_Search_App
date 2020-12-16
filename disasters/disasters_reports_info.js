//Below is the code to open the nav up when hamburger icon is clicked

document.querySelector('.hamburger').addEventListener('click', () => {
	document.getElementById("myDropdown").classList.toggle("show");
})

let disasterAPI_url = localStorage.getItem('href');


let disasterResponse = async function () { 
  await axios.get(disasterAPI_url).then(res => { 
    console.log(res.data.data[0].fields["name"]);
    let disasterEventName = res.data.data[0].fields["name"];

    // console.log(res.data.data[0].fields["country"]);
    // let disasterEventCountry = res.data.data[0].fields["country"];

    console.log(res.data.data[0].fields["description-html"]);
    let disasterDescription = res.data.data[0].fields["description-html"];

    if (disasterDescription === undefined) {
      document.getElementById("disaster_description").innerHTML = `
      <h3>Nothing Found</h3>
      <p>Apologies, but no description was found for the requestd disaster. Please search for another disaster type.</p>`;
    } else if (disasterEventName === undefined) {
      document.getElementById("disaster_event_name").innerHTML = `
      <h3>Nothing Found</h3>
      <p>Apologies, but no description was found for the requestd disaster. Please search for another disaster type.</p>`;
    // } else if (disasterEventCountry === undefined) {
    //   document.getElementById("disaster_country").innerHTML = `
    //   <h3>Nothing Found</h3>
    //   <p>Apologies, but no description was found for the requestd disaster. Please search for another disaster type.</p>`;
    } else {
      document.getElementById("disaster_event_name").innerHTML = `${disasterEventName}`;
      // document.getElementById("disaster_country").innerHTML = `${disasterEventCountry}`;
      document.getElementById("disaster_description").innerHTML = `${disasterDescription}`;
    }

  }).catch(e => { 
    // console.log(e);
  })

  
}

disasterResponse()



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