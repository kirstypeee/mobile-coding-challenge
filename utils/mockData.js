import uuid from 'uuid/v4'

// A non-exhaustive list of Seer's canine companions.
const meetingCompanion = [
  'Crumpet',
  'Daisy',
  'Nala',
  'Padfoot',
  'Oscar',
  'Willa',
]

const generateMeeting = offset => ({
  time: Date.now() + offset,
  duration: 3.6e6,
  id: uuid(),
  person: meetingCompanion[Math.floor(Math.random() * meetingCompanion.length)],
})

export const generateMeetings = (quantity, offset) =>
  Array(quantity)
    .fill('')
    .reduce(
      (acc, _, i) => {
        return [...acc, generateMeeting((i + 1) * offset)]
      },
      [generateMeeting(6000)],
    )
