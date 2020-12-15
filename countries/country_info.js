//Below is the code to open the nav up when hamburger icon is clicked

document.querySelector('.hamburger').addEventListener('click', () => {
	document.getElementById("myDropdown").classList.toggle("show");
})

let countryUrl = localStorage.getItem('href');


let countryResponse = async function () { 
  await axios.get(countryUrl).then(res => { 
    console.log(res)
  }).catch(e => { 
    console.log(e);
  })

  
}

countryResponse()





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