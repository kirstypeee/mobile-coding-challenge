import React, {useState} from 'react'
import {SafeAreaView, View, Text, StatusBar, Button} from 'react-native'
import {groupBy} from 'lodash'
import moment from 'moment'
import MeetingsTable from '../MeetingsTable'
import {generateMeetings} from '../../utils/mockData'
import {styles} from '../../styles'

const existingMeetings = generateMeetings(6, 8.64e7)

const groupByDate = meeting => {
  return moment(meeting.time)
    .startOf('day')
    .format()
}

const Header = () => (
  <View style={styles.header}>
    <Text style={styles.headerText}>Meeting Reminders</Text>
  </View>
)

const AcceptedBookings = ({navigation}) => {
  const [fetched, setFetched] = useState(false)
  const [meetingsByDay, setMeetingsByDay] = useState(
    groupBy(existingMeetings, groupByDate),
  )

  const processMeetings = async () => {
    const data = await fetch('http://localhost:3001/meetings')
    const proposedMeetings = await data.json()
    const groupedMeetings = groupBy(proposedMeetings, groupByDate)
    const acceptedMeetings = []
    const declinedMeetings = []
    Object.keys(groupedMeetings).forEach(date => {
      const exisitingDates = Object.keys(meetingsByDay)
      if (exisitingDates.includes(date)) {
        const oldMeetings = meetingsByDay[date]
        const meetings = groupedMeetings[date]
        meetings.forEach(meeting => {
          const overlaps = oldMeetings.some(oldMeeting =>
            moment(meeting.time).isBetween(
              moment(oldMeeting.time).subtract(meeting.duration, 'ms'),
              moment(oldMeeting.time).add(oldMeeting.duration, 'ms'),
            ),
          )
          if (overlaps) {
            declinedMeetings.push(meeting)
          } else {
            acceptedMeetings.push(meeting)
          }
        })
      } else {
        acceptedMeetings.concat(groupedMeetings[date])
      }
    })
    const allMeetings = acceptedMeetings.concat(existingMeetings)
    setMeetingsByDay(groupBy(allMeetings, groupByDate))
    setFetched(true)
    await fetch('http://localhost:3001/declined', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(declinedMeetings),
    })
  }

  const getDeclinedMeetings = async () => {
    const data = await fetch('http://localhost:3001/declined')
    const declinedMeetings = await data.json()
    console.log(declinedMeetings)
    navigation.navigate('Declined Meetings', {
      declinedMeetings: declinedMeetings,
    })
    return declinedMeetings
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.SafeAreaView}>
        <Header />
        <View style={styles.body}>
          {fetched && (
            <View style={styles.successWrapper}>
              <Text style={styles.successText}>✓ Fetched Meeting Requests</Text>
            </View>
          )}
          <MeetingsTable meetings={meetingsByDay} />
          <View style={styles.buttonContainer}>
            <Button title={'Get Meeting Requests'} onPress={processMeetings} />
            <Button
              title={'View Declined Meetings'}
              disabled={!fetched}
              onPress={getDeclinedMeetings}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  )
}

export default AcceptedBookings
