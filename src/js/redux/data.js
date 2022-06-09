let campuses = [
    {id: 0, campus_name: "Central", image: require("../assets/Central.jpg")},
    {id: 1, campus_name: "Main", image: require("../assets/Main.jpg")},
    {id: 2, campus_name: "ET", image: require("../assets/ET.jpg")},
    {id: 3, campus_name: "Engineering", image: require("../assets/Engineering.jpg")},
    {id: 4, campus_name: "New", image: require("../assets/New.jpg")},
]

let practiceData = [
    { id: 0, title: "C-310", camp: "Central", type: "practice", image: require("../assets/prac.png") },
    { id: 1, title: "C-210", camp: "Central", type: "practice", image: require("../assets/prac.png") },
    { id: 2, title: "C-110", camp: "Central", type: "practice", image: require("../assets/prac.png") },
    { id: 3, title: "C-410", camp: "Central", type: "practice", image: require("../assets/prac.png") },
    { id: 4, title: "C-510", camp: "Central", type: "practice", image: require("../assets/prac.png") },
    { id: 5, title: "C-610", camp: "Central", type: "practice", image: require("../assets/prac.png") },
    { id: 6, title: "C-710", camp: "Central", type: "practice", image: require("../assets/prac.png") }
];

let lectureData = [
    { id: 0, title: "C-310", camp: "Central", type: "lecture", image: require("../assets/lec.png") },
    { id: 1, title: "C-210", camp: "Central", type: "lecture", image: require("../assets/lec.png") },
    { id: 2, title: "C-110", camp: "Central", type: "lecture", image: require("../assets/lec.png") },
    { id: 3, title: "C-410", camp: "Central", type: "lecture", image: require("../assets/lec.png") },
    { id: 4, title: "C-510", camp: "Central", type: "lecture", image: require("../assets/lec.png") },
    { id: 5, title: "C-610", camp: "Central", type: "lecture", image: require("../assets/lec.png") },
    { id: 6, title: "C-710", camp: "Central", type: "lecture", image: require("../assets/lec.png") }
];

let baseInfo = [
    {id: 0, type: "lecture", camp: "Central", class: "C-310", date: "30/05/2022", startTime: "12:00", endTime: "13:20", name: "Vladyslav", email: "polkamarka@gmail.com"},
    {id: 0, type: "lecture", camp: "Central", class: "C-310", date: "27/05/2022", startTime: "12:00", endTime: "13:20", name: "Vladyslav", email: "polkamarka@gmail.com"},
    {id: 0, type: "lecture", camp: "Central", class: "C-310", date: "25/05/2022", startTime: "12:00", endTime: "13:20", name: "Vladyslav", email: "polkamarka@gmail.com"},
    {id: 0, type: "lecture", camp: "Central", class: "C-310", date: "31/05/2022", startTime: "12:00", endTime: "13:20", name: "Vladyslav", email: "polkamarka@gmail.com"},
    {id: 0, type: "lecture", camp: "Central", class: "C-310", date: "14/05/2022", startTime: "12:00", endTime: "13:20", name: "Vladyslav", email: "polkamarka@gmail.com"},
    {id: 0, type: "lecture", camp: "Central", class: "C-310", date: "12/05/2022", startTime: "12:00", endTime: "13:20", name: "Vladyslav", email: "polkamarka@gmail.com"},
];

export function getBaseInfo() {
    return baseInfo;
}

export function getCampuses() {
    return campuses;
}

let infoForBooking = {};

export function setBookingInfo(param, value) {
    infoForBooking[param] = value;
    //console.log(infoForBooking);
}

export function getBookingInfo() {
    return infoForBooking;
}

export function getClassData(classType) {
    if(classType === "practice") {
       return practiceData;
    }
    return lectureData;
}