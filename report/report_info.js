import axios from 'axios'



let titleId = localStorage.getItem('report-id');
const reportIdByIdUrl = `https://api.reliefweb.int/v1/reports/${titleId}`



let responseTwo = async function () { 
  await axios.get(reportIdByIdUrl).then(res => { 
    console.log(res.data.data[0].fields.title)

    let responseTitle = res.data.data[0].fields.title;
    let responseBody = res.data.data[0].fields['body-html'];
    console.log(responseBody)
    

    if (responseBody === undefined) {
      let responseImageUrl = res.data.data[0].fields.file[0].preview.url;
      let newImageElement = document.createElement('img');
      newImageElement.setAttribute('src',`${responseImageUrl}`);
      document.getElementById('report_information').appendChild(newImageElement);
    } else { 
      document.getElementById('report_information').innerHTML = `<h3>${responseTitle}</h3>${responseBody}`
    }
  
  
  }).catch(err => { 
    console.log(err);
  })
}

responseTwo();