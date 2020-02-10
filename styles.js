import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
  SafeAreaView: {
    backgroundColor: '#CCC',
    flex: 1,
  },
  header: {
    backgroundColor: '#353535',
    padding: 15,
  },
  headerText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  body: {
    backgroundColor: '#FFF',
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  existingMeetings: {
    padding: 10,
    alignItems: 'center',
  },
  tableHeader: {
    color: '#353535',
    fontSize: 20,
    marginTop: 10,
    marginBottom: 10,
    alignSelf: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '50%',
  },
  tableWrapper: {
    display: 'flex',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  rowWrapper: {
    display: 'flex',
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  cellWrapper: {
    display: 'flex',
    flex: 1,
    alignSelf: 'stretch',
    color: 'black',
    fontSize: 16,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2,
    padding: 10,
    minHeight: 40,
    flexWrap: 'wrap',
    overflow: 'hidden',
    flexDirection: 'row',
  },
  cellContent: {
    display: 'flex',
    flex: 1,
    flexWrap: 'wrap',
    flexShrink: 1,
  },
  buttonContainer: {
    marginTop: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
  },
  tableHeaderText: {
    fontWeight: 'bold',
  },
  successWrapper: {
    borderColor: '#68A500',
    borderStyle: 'solid',
    borderWidth: 2,
    backgroundColor: '#8EBC40',
    display: 'flex',
    padding: 10,
    alignItems: 'center',
  },
  successText: {
    fontSize: 16,
    color: '#fff',
  },
})
