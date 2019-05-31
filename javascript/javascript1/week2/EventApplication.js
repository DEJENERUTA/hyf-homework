
//homework for hack your future of javascript week2
//flight Booking fullName function
// By Dejene Daba

let todayIs = "sunday";
const weekDays = ["sunday","monday", "tuesday", "wednsday", "thursday", "friday", "saturday"];
const DaysLeft = 9;
let meetingDay = 0;

function getEventWeekDay(DaysLeft) {
    for (i=0; i<weekDays.length;i++) {
        if (weekDays[i]== todayIs) {
            meetingDay = DaysLeft-i;
            if(meetingDay>7){
                meetingDay %=7;
            }
            i=7;
        }
    };
    return weekDays[meetingDay];
}

console.log("we are meeting on : "+ getEventWeekDay(DaysLeft));