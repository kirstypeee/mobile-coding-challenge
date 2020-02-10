import express from 'express'
import {generateMeetings} from '../utils/mockData'
import bodyParser from 'body-parser'

const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

let requestedMeetings = generateMeetings(8, 8.64e7 * 2)
let declinedMeetings = []

app.get('/meetings', (_, res) => {
  res.json(requestedMeetings)
})

app.get('/declined', (_, res) => {
  res.json(declinedMeetings)
})

app.post('/declined', (req, res) => {
  declinedMeetings = req.body
  const declinedMeetingTimes = declinedMeetings.map(meeting => meeting.time)
  requestedMeetings = requestedMeetings.filter(
    meeting => !declinedMeetingTimes.includes(meeting.time),
  )
})

app.listen(3001)
