import axios from 'axios';


//get value from keyword, disaster, lang, org, and country
let searchReport = localStorage.getItem('value-name');
let langValue = localStorage.getItem('lang-value');
let countryValue = localStorage.getItem('country-value');
let disasterValue = localStorage.getItem('disaster-value');
let orgValue = localStorage.getItem('org-value');



// const reportUrl = `https://api.reliefweb.int/v1/reports?appname=apidoc&query[value]=${searchReport}`
const reportUrl = `https://api.reliefweb.int/v1/reports?appname=apidoc&query[value]=${searchReport}&filter[operator]=AND&filter[conditions][0][operator]=AND&filter[conditions][0][conditions][0][field]=country.name&filter[conditions][0][conditions][0][value]=${countryValue}&filter[conditions][0][conditions][1][operator]=AND&filter[conditions][0][conditions][1][field]=language.id&filter[conditions][0][conditions][1][value]=${langValue}&filter[conditions][2][field]=source.type.id&filter[conditions][2][value]=${orgValue}&filter[conditions][3][field]=disaster.type.id&filter[conditions][3][value]=${disasterValue}`

console.log(reportUrl);

let response = async function () { 

  await axios.get(reportUrl).then(res => {
    console.log(res.data);

    const reportData = res.data.data
    for (let i = 0; i < reportData.length; i++) { 

      let newLi = document.createElement('li');
      let newA = document.createElement('a');
      newA.setAttribute('href', './reportsinfo.html')
      newA.setAttribute("id", `${reportData[i].id}`);
      newA.textContent = `${reportData[i].fields.title}`
    
      newLi.appendChild(newA);
      document.getElementById('title_section').appendChild(newLi);    
    }
  }).catch(err => { 
    console.log(err)
  })
}

response();




//Click title, save id number to local storage
document.getElementById('title_section').addEventListener('click', (e) => { 
  let reportId = e.target.id;
  console.log(reportId.id)

  localStorage.setItem('report-id', reportId);
})



//Click next or previous and you will get fresh 10 new reports
let num = 0;

//total number of reports
let reportsNum = 0;

//For prev
let newA2 = document.createElement('a');
newA2.setAttribute("href", '#')
newA2.setAttribute("id", 'prevTitle')
newA2.textContent = "";
document.getElementById('info').appendChild(newA2);

document.getElementById('prevTitle').addEventListener('click', async (e) => {
  //to keep the id on when user reach the last page and the arrow disappears
  newA1.setAttribute("id", 'nextTitle');

  try {
    num -= 10;
    console.log(num);
    console.log(reportsNum);


    // pageInfo.textContent = `${num} of ${reportsNum + num}`//********

    const responseThree = await axios.get(`https://api.reliefweb.int/v1/reports?appname=apidoc&query[value]=${searchReport}&filter[operator]=AND&filter[conditions][0][operator]=AND&filter[conditions][0][conditions][0][field]=country.name&filter[conditions][0][conditions][0][value]=${countryValue}&filter[conditions][0][conditions][1][operator]=AND&filter[conditions][0][conditions][1][field]=language.id&filter[conditions][0][conditions][1][value]=${langValue}&filter[conditions][2][field]=source.type.id&filter[conditions][2][value]=${orgValue}&filter[conditions][3][field]=disaster.type.id&filter[conditions][3][value]=${disasterValue}&offset=${num}&limit=10`);
    console.log(responseThree.data);

    if (num >= 0) {
      document.getElementById('title_section').innerHTML = ""
      const reponseTitleTwo = responseThree.data.data
      for (let i = 0; i < reponseTitleTwo.length; i++) {
        document.getElementById('title_section').innerHTML += `<li><a href = './reportsinfo.html' id = ${reponseTitleTwo[i].id}>${reponseTitleTwo[i].fields.title}</a></li>`
      }
    }
    if (num === 0) { 
      newA2.textContent = "";
      newA2.removeAttribute("id", 'prevTitle2')
    }
  
  } catch (e) { 
    console.log(e)
    num = 0;
  }
})


//For next
let newA1 = document.createElement('a');
newA1.setAttribute("href", '#')
newA1.setAttribute("id", 'nextTitle')
newA1.textContent = "";
document.getElementById('info').appendChild(newA1);

//****For page info
// let pageInfo = document.createElement('p');
// pageInfo.setAttribute("id", 'pageInfo');
// document.getElementById('info').appendChild(pageInfo);

document.getElementById('nextTitle').addEventListener('click', async (e) => {
  //add second id name to prev button
  newA2.setAttribute("id", 'prevTitle2');
    
  try {
    newA2.textContent = "";
    num += 10;
    
    console.log(num);

    const responseThree = await axios.get(`https://api.reliefweb.int/v1/reports?appname=apidoc&query[value]=${searchReport}&filter[operator]=AND&filter[conditions][0][operator]=AND&filter[conditions][0][conditions][0][field]=country.name&filter[conditions][0][conditions][0][value]=${countryValue}&filter[conditions][0][conditions][1][operator]=AND&filter[conditions][0][conditions][1][field]=language.id&filter[conditions][0][conditions][1][value]=${langValue}&filter[conditions][2][field]=source.type.id&filter[conditions][2][value]=${orgValue}&filter[conditions][3][field]=disaster.type.id&filter[conditions][3][value]=${disasterValue}&offset=${num}&limit=10`);
    console.log(responseThree.data);

    // let totalCount = responseThree.data.totalCount
    // reportsNum = totalCount - num;

    // pageInfo.textContent = `${num} of ${reportsNum}`
    let totalCount = Math.ceil((responseThree.data.totalCount + 1) / 10) * 10;
    console.log(totalCount);


    if (num < totalCount) {
      document.getElementById('title_section').innerHTML = ""
      const reponseTitleTwo = responseThree.data.data  
      for (let i = 0; i < reponseTitleTwo.length; i++) {
        document.getElementById('title_section').innerHTML += `<li><a href = './reportsinfo.html' id = ${reponseTitleTwo[i].id}>${reponseTitleTwo[i].fields.title}</a></li>`
      } 
    }
    
    //On last page, next arrow will dissapear
    if (num === totalCount-10) {
      newA1.removeAttribute("id", 'nextTitle');
      console.log("stop")
    }


  
  } catch (e) { 
    console.log(e)
  }
})


//Below is the code to open the nav up when hamburger icon is clicked

document.querySelector('.hamburger').addEventListener('click', () => {
	document.getElementById("myDropdown").classList.toggle("show");
})


