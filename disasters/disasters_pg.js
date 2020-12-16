//clear anything on local storage  page is on load
window.addEventListener('load', () => {
  localStorage.clear();
});


//Populate the country page with countries name
const disasterType_url = 'https://api.reliefweb.int/v1/references/disaster-types?';
const disasterTypeList = document.getElementById('disasterType_List');

let disasterTypeResp = async function () {
  await axios.get(disasterType_url).then(res => {
    // console.log(res.data);
    const disasterTypes = res.data;
    // console.log(disasterTypes)

    let count = 0;
    let num = 0;
    for (let i = 0; i <= 22; i++) {
      // console.log(disasterTypes.data[i].fields.code);
      let ulElement = document.createElement('ul');
      disasterTypeList.appendChild(ulElement);
      count += 21;
      
  
      for (let j = num; j < count; j++) { 
        let ulElement = disasterTypeList.children[i]
        let liElement = document.createElement('li');
        let aElement = document.createElement('a');
        aElement.textContent = disasterTypes.data[j].fields.name;
        aElement.setAttribute('id', `${disasterTypes.data[j].fields.code}`)
        liElement.appendChild(aElement);
        ulElement.appendChild(liElement);
      }
      num += 21
     }
    }).catch(err => { 
      // console.log(err);
    })
  }

  disasterTypeResp();

// console.log(ulElement)
//       for (let j = num; j < count; j++) { 
//         let ulElement = disasterTypeList.children[i]
//         let liElement = document.createElement('li');
//         let aElement = document.createElement('a');
//         aElement.textContent = disasterTypes.data[j].fields.name;
//         aElement.setAttribute('id', `${disasterTypes.data[j].fields.code}`)
//         aElement.setAttribute('', `${disasterTypes.data[j].fields.code}`)
//         aElement.setAttribute('href', `./disasters_info.html`)

//         liElement.appendChild(aElement);
//         document.getElementById('title_section').appendChild(liElement);
//         ulElement.appendChild(liElement);
//       }
//       num += 21

//       if (disasterTypes.length === 0 || disasterTypes.length < 10) {
//         newaElement.remove();
//       }
     
//     }).catch(err => { 
//       console.log(err);
//     })
//   }
// }

// disasterTypeResp();
// get name of any disaster types are clicked 
disasterTypeList.addEventListener('click', async (e) => {
  try {
    // console.log(e.target.id);
    let selectedDisaster = e.target.id;
    // console.log(selectedDisaster);
  
    let disasterAPI_url = `https://api.reliefweb.int/v1/disasters?filter[field]=glide&filter[value]=${selectedDisaster}`

    
    const responseTypeDisaster = await axios.get(disasterAPI_url);
    
    let href = responseTypeDisaster.data.data[0].href
    // console.log(href);
        //name of disaster type saved in local storage  
        localStorage.setItem('href', href);
    
        if (selectedDisaster) {
          location.replace('./disasters_info.html');
        }
     
  } catch (e) {
    // console.log(e);
  
  }
});
  



//Below is the code to open the nav up when hamburger icon is clicked

document.querySelector('.hamburger').addEventListener('click', () => {
	document.getElementById("myDropdown").classList.toggle("show");
})


/* The code below states that whenever the user clicks any part of the window, the dropdown will close.The if statement states that if user click any where but the button, then it matches () will return false and with ! this will turn false into true. */

window.onclick = function (e) {

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