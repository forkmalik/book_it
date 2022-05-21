let practiceData = [
    { id: 0, title: "Practice class", camp: "Central", type: "practice", image: require("../assets/prac.png") },
    { id: 1, title: "Practice class", camp: "Central", type: "practice", image: require("../assets/prac.png") },
    { id: 2, title: "Practice class", camp: "Central", type: "practice", image: require("../assets/prac.png") },
    { id: 3, title: "Practice class", camp: "Central", type: "practice", image: require("../assets/prac.png") }
];

let lectureData = [
    { id: 0, title: "Lecture class", camp: "Central", type: "lecture", image: require("../assets/lec.png") },
    { id: 1, title: "Lecture class", camp: "Central", type: "lecture", image: require("../assets/lec.png") },
    { id: 2, title: "Lecture class", camp: "Central", type: "lecture", image: require("../assets/lec.png") },
    { id: 3, title: "Lecture class", camp: "Central", type: "lecture", image: require("../assets/lec.png") }
];

export default function getClassData(classType) {
    if(classType === "practice") {
       return practiceData;
    }
    return lectureData;
}