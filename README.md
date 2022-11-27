<!-- PROJECT LOGO -->
<br />
<div align="center" id="#readme-top">
  <a href="https://job-idenitifier.herokuapp.com/">
    <img src="./logo.png" alt="Logo" width="50" height="50">
  </a>

  <h3 align="center">Tradify</h3>
 <p align="center">

  <strong><a href="https://github.com/memopussle/job_tracker">View Source Code<a></strong>
 •
<strong><a href="https://job-tracker.onrender.com/">View Live Site</a></strong>
  
 </p>

</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
       <li><a href="#requirements">Requirements</a></li>
        <li><a href="#built-with">Built With</a></li>
        <li><a href="#built-with">Diagram</a></li>
      </ul>
    </li>
     <li>
      <a href="#data-store-selection">Summary about data store</a>
      <ul>
        <li><a href="#Summary-about-data-store">Data Store Selection</a></li>
        <li><a href="#explanation">Explanation</a></li>
        <li><a href="#Back-end-folder-structure">Back-end Folder Structure</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#Test-Endpoint">Test endpoints</a></li>
      </ul>
    </li>

 
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project
![Home page](/diagram/tradify-homepage.PNG)
![Add a job](/diagram/addjob.PNG)
![Comment page](/diagram/cmments.PNG)

### Requirements

This is an assignment from Fergus - A Job Portal where tradies can keep track of their jobs. Requirements are:

- Unique job identifier.
- Status: one of "scheduled", "active", "invoicing", “to priced” or “completed”.
- Creation date and time.
-  General information like name and contact details of the client.
- The tradie can also make
notes for each job. 
-A job can have any number of notes associated with them. 

The tradie should be able to:

- Filter and sort the list of jobs.
- Click on a job in the list to view their details and add/edit notes for that job.
- Change the status of a job.


### Built With

This application is built with:
 
#### Front-end
- React/JavaScript

#### Back-end
- NodeJS (logic written by JavaScript)
- Express
- MongoDB ( NoSQL database)

#### Other dependencies

- React-router
- Material UI
- redux-toolkit


### Diagram

![Diagram](/diagram/diagram.png)

| Endpoints    | Method  | Usage|
| ------------- | ------------- | -------- |
| /jobs       | GET | Show all the jobs available         |
| /jobs/:id      | GET      | Get each job using an id specified  |
| /jobs     | POST      | Create a job  |
| /jobs/:id     | DELETE   | Delete a job  |
| /jobs/:id     | PATCH   | Edit a job  |
| /jobs/:id/comments     | POST  | Create a comment for each job  |
| /jobs/:id/comments     | PATCH  | Update a comment  |


<!-- data store Summary --->
## Summary about data store
 
### Data Store Selection

I use MongoDB as the database and AWS cloud services (provided by MongoDB) for this project. 

MongoDB offers: 
- Flexibility
- Scalability (horizontal scaling)
- High Performance 

### Explanation

The reason is that MongoDB is performance, scalability, flexibility and an accessible environment. MongoDB is almost 100 times faster than a traditional database; hence the user is more likely to receive the content/data faster. MongoDB can perform well with a large data volume, allowing users to insert thousands of records in a second. Also, MongoDB has a feature called horizontal scaling. This feature will enable unlimited comments to be added to each post with easy management. SQL database is way more difficult when you have to add each column for each comment, which can end up being hundreds of columns for 1 job (1 row) and making data management very difficult. 

For a professionally built application, the ability to store a large amount of data and easy management are essential. For example, you can easily add more features (show how many jobs a tradie has done, offer financial management, suggestions...). For the back-end, you can easily add more fields on top of the document, more collections to the database (finance management, etc), and users can make any number of notes associated with each job. I also use React (JavaScript framework) for the front end, which pairs up nicely with MongoDB and makes it very easy to scale up this project in the future. 


### Back-end folder structure

- The logic of back-end is written in JavaScript, with back-end JavScript environment (NodeJS), and data is stored in MongoDB. 


![Back-end structure](/diagram/folder-structur.png)

<!-- GETTING STARTED -->

## Getting Started

This is the instruction on how to run this project locally:

1. Clone the project

```sh
git clone https://github.com/memopussle/job_tracker.git
```

2. Install npm package on client folder

```sh
cd client
npm install
```

3. Install npm package on server folder


```sh
cd server
npm install
```
4. In server folder, add your own MongoDB Atlas link in .env file (example for env setup can be found in .env.example):

```sh
PORT = YOUR_PORT
CONNECTION_URL = MONGODB_ATLAS_URL
```

5. Open http://localhost:3000 to see the project.


## Test Endpoint

You can test endpoints in Insomnia or other testing and validating alternatives (Postman, Swagger UI, Paw etc). Here are screenshots of how endpoins results look like:

![Get all jobs](/diagram/getjobs.PNG)

![Get a job](/diagram/geteachjob.PNG)

![Post a comment](/diagram/postcomment.PNG)


- Use this base URL: https://job-idenitifier.herokuapp.com and add either one of the endpoints below: 

| Endpoints    | Method  | Usage|
| ------------- | ------------- | -------- |
| /jobs       | GET | Show all the jobs available         |
| /jobs/:id      | GET      | Get each job using an id specified  |
| /jobs     | POST      | Create a job  |
| /jobs/:id     | DELETE   | Delete a job  |
| /jobs/:id     | PATCH   | Edit a job  |
| /jobs/:id/comments     | POST  | Create a comment for each job  |
| /jobs/:id/comments     | PATCH  | Update a comment  |



## Contact

Thu Giang - xanhtham.cuc@gmail.com 

Project Link: [Tradify](https://github.com/memopussle/job_tracker)

