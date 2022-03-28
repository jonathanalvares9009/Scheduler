Tech Stack Used:

- NodeJS (Javascript)
- ExpressJS (NodeJS)
- axios (API requests)
- node-schedule (Scheduling)

Approach:

1. Created a simple NodeJS server that would listen for a POST request from the client(script).
2. Created a scheduler interface that would do the reversal of the string at the specified time and call the API.
3. The API then runs then sleeps for the length of the string and then logs the string.
4. The script has contains the loop to run all the event requests.

Problems faced:

- The loop of the string did not stop even after the requests were successfull.
- The reason for this as past events were being sent so the loop did not finish it work.
- The solution was to use conditional statements to send data to the scheduler interface.

To run it succssfully:

1. Clone the code
2. Run `npm install`
3. Run `node index.js` in one terminal
4. Run `node script.js` in another terminal
