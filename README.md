![image](https://res.cloudinary.com/dd2duttda/image/upload/v1658830230/Screenshot_2022-07-26_at_10.54.01_m0p3pi.png)

## Introduction
Thank you for taking the time to review my solutions to the workstation booking assignment. I have designed a simple and easy to use booking system. Data is fetched from my mock database and displayed on the screen. A user has the ability to select a date and time from the dropdown menus and submit it via the ‘Confirm booking’ button. I also implemented some basic unit testing with Jest and React testing library (only using unit testing as it is a small scale application).

## Technologies Used
I decided to use Next.Js for its file based routing and to create API endpoints without needing to setup Express.js. I also implemented SASS for its use of declaring CSS variables to avoid repeating lines of code. For testing I used Jest and react testing library along with Mock Service Worker in order to 
mock out API calls.


## Getting Started
First, please clone the repository. 

Then, install the dependencies:
```bash
npm install
```

Run the development server:
```bash
npm run dev
# or
yarn dev
```

For running the tests:
```bash
npm test
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## User Interface
Q1)
1. When the user logs into the application, they will be met with a simple login screen that captures their email address and password. Below these inputs will be a button to 'Login' and a second button to 'Register' an account.
2. The Registeration page will be very similar to the Login page, it will consist of a email input, a password input and a confirm password input.
3. Each workstation will be represented as a card component. These cards will be laid out in columns depending on the screen size (large screens – 4 columns, medium screens – 2 columns, small screens – 1 column).
4. Each card will consist of the following details:
    * Workstation ID
    *	Desk number
    * Current availability status
    * A date dropdown menu
    * A time dropdown menu
    * A button to confirm the booking
5.	The time dropdown menu will be greyed out and unable to be selected until a date has been selected from the date dropdown menu.
6.	The confirm booking button will also be greyed out and unable to be submitted until a date and time have been selected.
7. A time that has already been booked will appear greyed out in the dropdown menu and a user cannot select this time.
8.	Once a user has selected a date and time and has also clicked on the confirm booking button, a POST request will be send to our API that will store this data inside our database.

Q2 and Q3)
Please find the answers in the code base

## Rest API
Q4)

The REST endpoint and URI to receive a workstation schedule would be a ‘GET’ request to the following route:

‘http://api.workstation/schedule?id={id}’ where the query id is a dynamic id for the workstation that is requesting the schedule.

In order to fetch all bookings for a workstation we can query our database to return all events where the ‘id’ we pass through in the query parameter is equal to the ‘workstation_id’ stored in the ‘schedule’ table. This will return all the bookings made for that workstation.


Q5)

The REST endpoint and URI to reserve a workstation would be a ‘POST' request to the following route:

‘http://api.workstation/schedule?id={id}’ where the query id is a dynamic ID for the workstation that is being reserved. Please see below a sample post request I created showing the data I would pass through. The eventObj is a mock piece of data showing what the object being posted would look like.

![image](https://res.cloudinary.com/dd2duttda/image/upload/v1658830223/Screenshot_2022-07-26_at_11.10.02_tq3bmr.png)

## Data Persistence
Q6)

Please see my database design below showing the different types of data you might need to access and store for this application. The database I am designing is for a relational database such as Postgres, as my data is dependent on the other data that is stored.

![image](https://res.cloudinary.com/dd2duttda/image/upload/v1658843274/Screenshot_2022-07-26_at_14.47.36_qcjwry.png)

We will not keep track of the ‘current availability’ inside the database, this could be a function at the API level after a GET request that will check if a ‘start_time_date’ is equal to the current time and will return a BOOLEAN if it is true or false.


## Other

Q7) 

*I am assuming that PM stands for project manager and not product manager.

1.	Is there a deadline or are there key milestones and dates we have to be mindful of for this project?
2.	Will this application be reused for another application? i.e. a booking system for a sports hall.
3.	How will this application be distributed?. Will it be a mobile, desktop or web application and should we focus our efforts on one in particular?
4.	Are there any designs for reference I can use to build this application?
5.	Is it possible to change the tech stack to introduce new tools if necessary?
6.	When do the timeslots open and close for each day?
7.	What platform can we use to communicate issues or questions I might have?



