// import axios from 'axios'

//---------
//filter[field]=country&filter[value]=nicaragua&fields[include][]=country

// https://api.reliefweb.int/v1/reports?appname=apidoc&filter[operator]=AND&filter[conditions][0][field]=headline&filter[conditions][1][field]=country&filter[conditions][1][value]=France

// https://api.reliefweb.int/v1/reports?appname=apidoc&filter[operator]=AND&filter[conditions][0][field]=disaster&filter[conditions][1][field]=country&filter[conditions][1][value]=Nicaragua&fields[include][]=disaster

//----------
// let typeofDisaster = localStorage.getItem('report-id');
// const reportIdByIdUrl = `https://api.reliefweb.int/v1/reports/${titleId}`
//https://api.reliefweb.int/v1/reports?appname=rwint-user-0&profile=list&preset=latest&slim=1&query[value]=disaster_type.id%3A4719&query[operator]=AND


// let responseTwo = async function () { 
//   await axios.get(reportIdByIdUrl).then(res => { 
//     console.log(res.data.data)

//     let responseTitle = res.data.data[0].fields.title;
//     let responseBody = res.data.data[0].fields['body-html'];
//     // console.log(responseBody)
    

//     if (responseBody === undefined) {
//       let responseImageUrl = res.data.data[0].fields.file[0].preview.url;
//       let newImageElement = document.createElement('img');
//       newImageElement.setAttribute('src',`${responseImageUrl}`);
//       document.getElementById('report_information').appendChild(newImageElement);
//     } else { 
//       document.getElementById('report_information').innerHTML = `<h3>${responseTitle}</h3>${responseBody}`
//     }
  
  
//   }).catch(err => { 
//     console.log(err);
//   })
// }

// responseTwo();

// //Below is the code to open the nav up when hamburger icon is clicked

// document.querySelector('.hamburger').addEventListener('click', () => {
// 	document.getElementById("myDropdown").classList.toggle("show");
// })


// /* The code below states that whenever the user clicks any part of the window, the dropdown will close.The if statement states that if user click any where but the button, then it matches () will return false and with ! this will turn false into true. */

// window.onclick = function(e) {

//   if (!e.target.matches('.hambtn')) {
    
// 	var hamcontent = document.getElementsByClassName("ham-dropdowncontent");
//     	for (let i = 0; i < hamcontent.length; i++) {
//       		let openHamContent = hamcontent[i];
//       		if (openHamContent.classList.contains('show')) {
//         	openHamContent.classList.remove('show');
//       }
//     }
//   }
// }