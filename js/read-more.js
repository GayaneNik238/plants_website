let authorNames = [
    "Harper Lee",
    "Jane Austen",
    "Charlotte Bronte",
    "F. Scott Fitzgerald",
    "Vladimir Nabokov"
];

let currentDate = document.getElementById("current-date");
let authorName = document.getElementById("author-name");

currentDate.innerHTML = new Date().toLocaleDateString();

let j = Math.floor(Math.random() * 5);
authorName.innerHTML = authorNames[j];
