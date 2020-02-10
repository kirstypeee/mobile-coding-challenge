import React from 'react'
import {SafeAreaView, View, Text, StatusBar} from 'react-native'
import MeetingsTable from '../MeetingsTable'
import {styles} from '../../styles'

const declinedHeaderStyles = {...styles.header, backgroundColor: '#e40046'}

const Header = () => (
  <View style={declinedHeaderStyles}>
    <Text style={styles.headerText}>Declined Meetings</Text>
  </View>
)

const DeclinedBookings = ({route: {params: declinedMeetings}}) => {
  const meetings = declinedMeetings.declinedMeetings
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.SafeAreaView}>
        <Header />
        <View style={styles.body}>
          <MeetingsTable meetings={meetings} declined />
        </View>
      </SafeAreaView>
    </>
  )
}

export default DeclinedBookings
