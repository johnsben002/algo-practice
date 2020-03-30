/**
 * 
 * @description given an array of objects with startTime and endTime for meetings, condense these meetings into common meeting ranges
 */

const commonMeeting = (meetings) => {
  // sort meetings by start time
  meetings.sort((a,b) => (a.startTime - b.startTime));
  
  // establish a new array to store condensed meetings
  const condensedMeetings = [meetings[0]];


  for (let i = 1; i < meetings.length; i += 1) {
    const lastMeeting = condensedMeetings[condensedMeetings.length-1];
    if (lastMeeting.endTime >= meetings[i].startTime) {
      lastMeeting.endTime = Math.max(meetings[i].endTime, lastMeeting.endTime);
    } else {
      condensedMeetings.push(meetings[i]);
    }
  }

  return condensedMeetings;
};

console.log(commonMeeting([
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
]));

// expected output:   [
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 8 },
//   { startTime: 9, endTime: 12 },
// ]