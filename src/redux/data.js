let practiceData = [
    { title: "Practice class", camp: "Central" },
    { title: "Practice class", camp: "Central" },
    { title: "Practice class", camp: "Central" },
    { title: "Practice class", camp: "Central" }
];

let lectureData = [
    { title: "Lecture class", camp: "Central" },
    { title: "Lecture class", camp: "Central" },
    { title: "Lecture class", camp: "Central" },
    { title: "Lecture class", camp: "Central" }
];

function getClassData(classType) {
    if(classType === "practice") {
       return practiceData;
    } else {
        return lectureData;
    }
}