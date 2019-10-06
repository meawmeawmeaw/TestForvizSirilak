console.log("MeawTEST")

var obj_booking = [
  {
    "id": 1,
    "roomId": "A101",
    "startTime": "2019-09-28 13:00:00",
    "endTime": "2019-09-28 14:00:00",
    "title": "Lunch with Petr"
  },
  {
    "id": 2,
    "roomId": "A101",
    "startTime": "2019-09-28 14:00:00",
    "endTime": "2019-09-28 15:00:00",
    "title": "Sales Weekly Meeting"
  },
  {
    "id": 3,
    "roomId": "A101",
    "startTime": "2019-09-28 16:00:00",
    "endTime": "2019-09-28 18:00:00",
    "title": "Anastasia Website Warroom"
  },
  {
    "id": 4,
    "roomId": "A101",
    "startTime": "2019-09-29 13:00:00",
    "endTime": "2019-09-29 14:00:00",
    "title": "One-on-One Session"
  },
  {
    "id": 5,
    "roomId": "A101",
    "startTime": "2019-09-29 16:00:00",
    "endTime": "2019-09-29 18:00:00",
    "title": "UGC Sprint Planning"
  },
  {
    "id": 6,
    "roomId": "A102",
    "startTime": "2019-09-30 09:00:00",
    "endTime": "2019-10-04 18:00:00",
    "title": "5-Day Design Sprint Workshop"
  },
  {
    "id": 7,
    "roomId": "Auditorium",
    "startTime": "2019-09-19 09:00:00",
    "endTime": "2019-09-23 19:00:00",
    "title": "Thai Tech Innovation 2019"
  },
  {
    "id": 8,
    "roomId": "A101",
    "startTime": "2019-09-28 10:00:00",
    "endTime": "2019-09-28 13:00:00",
    "title": "Raimonland project"
  },
  {
    "id": 9,
    "roomId": "A102",
    "startTime": "2019-09-30 18:00:00",
    "endTime": "2019-09-30 20:00:00",
    "title": "Management Meetinng"
  },
  {
    "id": 10,
    "roomId": "A101",
    "startTime": "2019-10-04 14:00:00",
    "endTime": "2019-10-06 11:00:00",
    "title": "3-day workshop Corgi costume"
  }
];

for (i in obj_booking) {
  var obj = obj_booking[i];
  checkAvailability(obj)
  getBookingsForWeek(obj)

}

//A. Create a function that accept room, startTime, endTime and return if the room is available for booking.
function checkAvailability(obj) {

  var dateStartStr = obj.startTime;
  var startDate = new Date(dateStartStr);

  var today = new Date();//today

  var availability = true;

  //check form start date --> if start date <= today, then that room unavailability.
  if (new Date(startDate).getTime() <= today.getTime()) {
    availability = false;
  }

  if (availability == true) {
    console.log("------Availability room-------")
    console.log("Room Title: " + obj.title)
    console.log("Room ID: " + obj.roomId)
    console.log("Start Time: " + obj.startTime)
    console.log("End Time: " + obj.endTime)

  } else {
    console.log("------Unavailability room------")
    console.log("Room Title: " + obj.title)
    console.log("Room ID: " + obj.roomId)
    console.log("Start Time: " + obj.startTime)
    console.log("End Time: " + obj.endTime)
  }

}

//B. Create a function that return all bookings that occur today, this week  and next week for a room. 
function getBookingsForWeek(obj) {
  //occur today
  var today = new Date("2019-09-23 14:00:00"); //test today is 2019-10-04 14:00:00
  var startDate = new Date(obj.startTime)

  if (new Date(startDate).getTime() == today.getTime()) {
    console.log("----------------OCCUR TODAY--------------" + obj.title)
  }

  var dateThisWeek = new Date(today);
  dateThisWeek.setDate(dateThisWeek.getDate() + 7);
  console.log("print :" + dateThisWeek)

  //occur this week
  if (new Date(startDate).getTime() <= dateThisWeek.getTime()) {
    if (new Date(startDate).getTime() >= today.getTime()) {
      console.log("----------------OCCUR THIS WEEK--------------" + obj.title)
      console.log("----------------OCCUR THIS WEEK--------------" + obj.startTime)
    }

  }

  var dateNextWeek = new Date(today);
  dateNextWeek.setDate(dateNextWeek.getDate() + 14);
  console.log("print NEXT :" + dateNextWeek)
  //occur next week
  if (new Date(startDate).getTime() <= dateNextWeek.getTime()) {
    if (new Date(startDate).getTime() >= dateThisWeek.getTime()) {
      console.log("----------------OCCUR NEXT WEEK--------------" + obj.title)
      console.log("----------------OCCUR NEXT WEEK--------------" + obj.startTime)
    }

  }


} 