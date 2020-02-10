import React, {useState} from 'react'
import {View, Text, Button} from 'react-native'
import moment from 'moment'
import {styles} from '../styles'

const renderTableHeader = () => {
  return (
    <View style={styles.rowWrapper}>
      <View style={styles.cellWrapper}>
        <Text style={styles.tableHeaderText}>Time</Text>
      </View>
      <View style={styles.cellWrapper}>
        <Text style={styles.tableHeaderText}>Doggo</Text>
      </View>
      <View style={styles.cellWrapper}>
        <Text style={styles.tableHeaderText}>Duration</Text>
      </View>
      <View style={styles.cellWrapper}>
        <Text style={styles.tableHeaderText}>UserId</Text>
      </View>
    </View>
  )
}

const renderRow = (meeting, declined) => {
  return (
    <View style={styles.rowWrapper} key={meeting.id}>
      <View style={styles.cellWrapper}>
        <Text style={styles.cellContent}>
          {moment(meeting.time).format(declined ? 'dddd HH:mm' : 'HH:mm')}
        </Text>
      </View>
      <View style={styles.cellWrapper}>
        <Text style={styles.cellContent}>{meeting.person}</Text>
      </View>
      <View style={styles.cellWrapper}>
        <Text style={styles.cellContent}>
          {meeting.duration / 1000 / 60 + ' mins'}
        </Text>
      </View>
      <View style={styles.cellWrapper}>
        <Text style={styles.cellContent}>{meeting.id}</Text>
      </View>
    </View>
  )
}

const renderDayByDay = (currentDay, setCurrentDay) => (
  <View style={styles.rowWrapper}>
    <Button
      title="<"
      onPress={() =>
        setCurrentDay(
          moment(currentDay)
            .subtract(1, 'd')
            .format(),
        )
      }
    />
    <Text style={styles.tableHeader}>
      Meetings{' '}
      {moment(currentDay).calendar(null, {
        lastDay: '[Yesterday]',
        sameDay: '[Today]',
        nextDay: '[Tomorrow]',
        lastWeek: '[Last] dddd',
        nextWeek: 'dddd',
        sameElse: 'L',
      })}
    </Text>
    <Button
      title=">"
      onPress={() =>
        setCurrentDay(
          moment(currentDay)
            .add(1, 'd')
            .format(),
        )
      }
    />
  </View>
)

const renderDeclined = () => (
  <View style={styles.rowWrapper}>
    <Text style={styles.tableHeader}>Declined Meetings</Text>
  </View>
)

const renderTodaysMeetings = (meetings, currentDay) =>
  meetings[currentDay] ? (
    meetings[currentDay].map(meeting => renderRow(meeting))
  ) : (
    <Text style={styles.tableHeader}>No meetings</Text>
  )

const renderDeclinedMeetings = meetings =>
  meetings ? (
    meetings.map(meeting => renderRow(meeting, true))
  ) : (
    <Text style={styles.tableHeader}>No meetings</Text>
  )
const MeetingsTable = props => {
  const {meetings, declined} = props
  const [currentDay, setCurrentDay] = useState(Object.keys(meetings)[0])
  return (
    <View style={styles.existingMeetings}>
      <View style={styles.tableWrapper}>
        {declined
          ? renderDeclined()
          : renderDayByDay(currentDay, setCurrentDay)}
        {renderTableHeader()}
        {declined
          ? renderDeclinedMeetings(meetings)
          : renderTodaysMeetings(meetings, currentDay)}
      </View>
    </View>
  )
}

export default MeetingsTable
