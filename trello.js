let myToDo = {
    day: 'Friday',
    meetings: 0,
    meetDone: 0,
}

let addMeeting = function (todo, meet=0) {
    todo.meetings = todo.meetings + meet
}

let meetDone = function (todo, meet=0){
    todo.meetDone = todo.meetDone + meet
}

let resetDay = function (todo){
    todo.meetings = 0
    todo.meetDone = 0
}

let getSummaryOfDay = function (todo){
    let meetingsLeft = todo.meetings - todo.meetDone
    return `you have ${meetingsLeft} meetings left today!`
}
addMeeting (myToDo, 6)
addMeeting (myToDo,2)
addMeeting (myToDo, 1)

meetDone (myToDo, 5)
console.log(myToDo);
console.log(getSummaryOfDay(myToDo));