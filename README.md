# Facility booking - adda challenge

## Client - frontend UI

1. For installing dependencies use below command which will install all dependencies 
   ### `npm install`
2. Start client server on new terminal use below command
   ### `npm start`
3. Runs the app in the development mode.
  Open http://localhost:3000 to view it in your browser.

## Server - Backend

1. For installing dependencies use below command which will install all dependencies 
   ### `npm install`
2. Start backend server on new terminal use below command
   ### `npm start`
3. Runs the app in the development mode.
  Open http://localhost:5000 to view it in your browser.

## Testing 

1. Select facility name, date , time and submit 
2. Select valid slot refer below data
   {"startTime": "10:00", "endTime": "16:00"},
   {"startTime": "16:00", "endTime": "22:00"}

   ### ----- Test cases-----
   1. When slot is available - Booking successful
   2. Try booking same slot - Booking failed. Slot is already booked
