# Humanitarian_UN_OCHA_Information_Search_App

## A Humanitarian World Events Reporting API Based Application

![](./WeMundoBanner.png)

## Description steph branch test 2

This is a web application that allows users to gather informational reports about humantirian relief efforts and disasters worldwide. Users will be able to look at published reports by reputable established sources, from the United Nations Office for the Corrdination of Humanitarian Affairs (OCHA), based on diffferent parameters, such as : disaster types, geolocation by country or events expanding worldwide reach, publishing organization, report language, and keyword search. The APPNAME application takes it a step further, by allowing users to see all reports related to their search results in the context of an interactive Google map, and lists of reports. The application has desktop, mobile, and tablet responsive capabilities.

## User Interfaces

### Homepage Search Tabs and Dropdown menus give user the ability to narrow down reports by the main parameters.

- Type of disaster affecting area(s). These can include environmental disasters, health (pandemic) outbreaks.
- Key words and names related to a specific event or local region.
- Country being affected by humanitarian disasters.
- Organziation that has written and published the report.
- Language the report has been published in.

![](./cancer_app_Desktop_page_1_correct.png)

### Second page of the application will provide search results and interactive Google Map.

- Near the top of the page, the users search parameters will appear, to remind user of their previously inputed search criteria.
- The results yeilded from based search (from first page) will then be shown on interactive Google Map with markers symbolozing the location each report is based out of.
- A list of the first ten related reports shown on the map will be displayed below the map, with buttons that allow the user to click individual trials for further information.
- A button at the bottom of the page will allow users to load the following ten reports (11-20) from the yielded results.

![](./cancer_app_Desktop_page_2.png)

### Third page of the application will provide detailed information on the chosen trial user has selected from the yeilded results.

![](./cancer_app_Desktop_page_3.png)

### Mobile Interface

![](./cancer_app_iPhone8_mobile_correct.png)

### Tablet Interface

![](./cancer_app_tablet_correct.png)

## API Usage

### UN OCHA WebRelief API

![](./NCI_API.png)

- API enpoints used: Clinical Trials, Disease, Terms, and Interventions.

- https://clinicaltrialsapi.cancer.gov/

### Google Maps Javascript API

- https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY

## Requirements:

- The Ctrials web application will be developed using HTML, CSS, and Javascript.
- The data will be retrieved from an external source (the National Cancer Institute's Clinical Trials API and Google Maps API) by using Axios, and rendered into the DOM.
- Flexbox will be used to efficently lay out, align, and distribute elements on the application pages.
- An API Key will be utilized to access the Google Maps API, with its corresponding ENV file.
- The National Cancer Institutue's API does not require an API Key.
- Ctrials will be an application designed and built to be responsive on three different screen sizes: desktop, mobile, and tablet. Application will be hosted on Netlify.

## Inspiration

As developers, who were previously in the biology and science fields, we wanted to create an application that could be useful for people who need breakthrough clinical health services and scientific researchers conducting clinical trials. The Ctrials application provides is an easy to use tool for individuals looking for readily accessible cancer clinical research trials information, along with location proximity, to better connect possible participants to clinical trials.

Thank you to the National Cancer Institute for the development of their clinical trials API. We sought out inspiration from their current search website: https://www.cancer.gov/about-cancer/treatment/clinical-trials/search/advanced .

### Developed by: Stephanie Pena and David Espinal

## Contact

#### Want to know more? Feel free to reach us at:

- [LinkedIn - Stephanie Pena](https://www.linkedin.com/in/stephanie-a-pe%C3%B1a-1132bb16a/)
- [LinkedIn - David Espinal](https://www.linkedin.com/in/david-espinal-28b91a1b7/)
- [Email - Stephanie Pena](mailto:stephp23@gmail.com)
- [Email - David Espinal](despinal0425@gmail.com)

##### Disclaimer: We do not own the rights to any of the images included in this repository. All images were pulled from standard Google searches.
