# Meeting Reminder

A mobile app to make sure you're aware of your meetings.

## Existing code

### Overview

Existing functionality:

- React Native mobile app displaying a list of some existing meetings. Meetings have a time, duration, id, and the person you'll be meeting.
- ExpressJS server with `GET` endpoint `/meetings` which responds with a collection of upcoming meeting requests.

### Instructions for use

- To install dependencies: `yarn install`
- To run ExpressJS server: `yarn run server`
- To run React Native app: `yarn ios` or `yarn android`

Note: This project was bootstrapped with `react-native init`.

## Additional required features

What needs to be added / changed:

- The app needs to present the current meetings in agenda format (a day-by-day summary of upcoming meetings).
- The app needs to retrieve the additional meeting requests from the server's `/meetings` endpoint.
- Any meetings that are possible are automatically accepted and included in the current agenda. Meetings that overlap or otherwise conflict with existing meetings are declined.
- The app needs to `POST` a list of declined meetings to the server.
- The server needs to allow `POST` requests to the endpoint `/declined`. Any declined meetings are removed from the in-memory store of requested meetings, and instead put into another in-memory store (which is sent on a `GET` to `/declined`).
- The app needs an additional screen to summarise any declined meetings.

Feel free to change any of the existing code (and add any dependencies) to achieve the required specifications / functionality. Assume a recent version of iOS/Android. If you're having trouble starting or need help with any part, please send us an email and we'll give you a pointer.
