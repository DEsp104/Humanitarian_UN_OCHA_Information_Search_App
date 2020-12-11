import axios from 'axios';



let searchReport = localStorage.getItem('value-name');
const reportUrl = `https://api.reliefweb.int/v1/reports?appname=apidoc&query[value]=${searchReport}`

let response = async function () { 
  await axios.get(reportUrl).then(res => {
    console.log(res.data);

    const reportData = res.data.data
    for (let i = 0; i < reportData.length; i++) { 
      // document.getElementById('title_section').innerHTML += `<li id = ${reportData[i].id}><a href = './reportsinfo.html'>${reportData[i].fields.title}</a></li>`
    
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

  try {
    num -= 10;
    console.log(num);
    console.log(reportsNum);


    // pageInfo.textContent = `${num} of ${reportsNum + num}`//********

    const responseThree = await axios.get(`https://api.reliefweb.int/v1/reports?appname=apidoc&query[value]=${searchReport}&offset=${num}&limit=10`);
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
newA1.textContent = "next";
document.getElementById('info').appendChild(newA1);

//For page info
let pageInfo = document.createElement('p');
pageInfo.setAttribute("id", 'pageInfo');
document.getElementById('info').appendChild(pageInfo);

document.getElementById('nextTitle').addEventListener('click', async (e) => {
  //add second id name to prev button
  newA2.setAttribute("id", 'prevTitle2');
    
  try {
    newA2.textContent = "prev";
    num += 10;
    
    console.log(num);

    const responseThree = await axios.get(`https://api.reliefweb.int/v1/reports?appname=apidoc&query[value]=${searchReport}&offset=${num}&limit=10`);
    console.log(responseThree.data);

    // let totalCount = responseThree.data.totalCount
    // reportsNum = totalCount - num;

    // pageInfo.textContent = `${num} of ${reportsNum}`

    if (num <= responseThree.data.totalCount) {
      document.getElementById('title_section').innerHTML = ""
      const reponseTitleTwo = responseThree.data.data
      for (let i = 0; i < reponseTitleTwo.length; i++) {
        document.getElementById('title_section').innerHTML += `<li><a href = './reportsinfo.html' id = ${reponseTitleTwo[i].id}>${reponseTitleTwo[i].fields.title}</a></li>`
      }
    }
  
  } catch (e) { 
    console.log(e)
  }
})