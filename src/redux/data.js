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

let bookingInfo = [
    {id: 0, type: "lecture", camp: "Central", class: "C-310", date: "2022-05-26", startTime: "12:00", endTime: "13:20", name: "Vladyslav", email: "polkamarka@gmail.com"},
    {},
    {},
    {},
    {},
    {},
];

let infoForBooking = {};

export default function getClassData(classType) {
    if(classType === "practice") {
       return practiceData;
    }
    return lectureData;
}