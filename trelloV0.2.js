let myToDo = {
    day: 'Sunday',
    meetings: 0,
    meetDone: 0,
    meetLeft: 0,

    addMeeting: function(num){
        this.meetings = this.meetings + num
    },

    meetDone: function(num){
        this.meetDone = this.meetDone +num
    },

    resetDay: function(){
        this.meetDone = 0
        this.meetings = 0
    },

    getSummaryOfDay: function(){
        return `you have ${this.addMeeting - this.meetingDone} meetings left today.`
    }
}

myToDo.addMeeting(10)
myToDo.meetDone(5)
console.log(myToDo.getSummaryOfDay())