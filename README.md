![image](https://res.cloudinary.com/dd2duttda/image/upload/v1658745357/Screenshot_2022-07-25_at_11.24.34_mgakgs.png)

## Introduction
Thank you for taking the time to review my solutions to the workstation booking assignment. I have taken the time to design a simple and easy to use booking system. Data is fetched from my mock database and displayed on the screen. A user has the ability to select the “View Schedule” button which will open up a new page showing that particular workstations calendar (currently simulated with displaying an image of a calendar from Google Calendar). I also implemented some basic unit testing.

## Technologies used
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
1. Each workstation will be represented as a card component. These cards will be laid out in columns depending on the screen size (large screens – 4 columns, medium screens – 2 columns, small screens – 1 column).
2. Each card will consist of the following details:
    *	Desk number
    * Workstation ID
    * Current availability status
    * A button to view the 5 day schedule
3. The ‘View Schedule’ button will link to a calendar that will display the next 5 days showing the availability of the workstation in 30 minute blocks. The design for the calendar is mocked after the “Google Calendar” for its simple, straightforward and already proven design.
4.	When a user chooses a timeslot, that time will appear on the calendar. The user will have the ability to select the “Confirm” button at the bottom of the screen to book the selected timeslot. 
5.	A booked timeslot will appear on the calendar containing the name of the user who booked it and at which time the booking starts. Any other user cannot select a pre booked timeslot and reassign it to themselves.  

Q2 and Q3)
Please find the answers in the code base

## Rest API
Q4)
The REST endpoint and URI to receive a workstation schedule would be a ‘GET’ request to the following route:
‘http://api.workstation/schedule?id={id}’ where the query id is a dynamic id for the workstation that is requesting the schedule.

Q5)
The REST endpoint and URI to receive a workstation schedule would be a ‘POST' request to the following route:
‘http://api.workstation/schedule?id={id}’ where the query id is a dynamic ID for the workstation that is requesting the schedule. Please see below a sample post request I created showing the data I would pass through. The eventObj is a mock piece of data showing what the object being posted would look like. 
![image](https://res.cloudinary.com/dd2duttda/image/upload/v1658745938/Screenshot_2022-07-21_at_15.36.23_yllaxj.png)

Inside the event object I am adding in the ‘eventUpdated’ property for future proofing if we want to implement a feature that allows a user to update their booking.

## Data persistence
Q6)
Please see my database design below showing the different types of data you might need to access and store for this application.

![image](https://res.cloudinary.com/dd2duttda/image/upload/v1658758541/Screenshot_2022-07-25_at_15.15.28_t1qynl.png)

I have designed it so that each timeslot would have its own id. Example:

* Monday -> 09:00 – 09:30 -> timeslot_id: 100
* Monday -> 09:30 – 10:00 -> timeslot_id: 101
* Tuesday -> 09:00 – 09:30 -> timeslot_id: 200

This way we can easily keep track of the timeslots that are already booked and what timeslots are currently free.


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



