function toggle0() {
    var htmlShow = document.getElementById("content0");
    if (htmlShow.style.display === "none") {
        htmlShow.style.display = "block";
    } else {
        htmlShow.style.display = "none";
    }
}

function toggle1() {
    var htmlShow = document.getElementById("content1");
    if (htmlShow.style.display === "none") {
        htmlShow.style.display = "block";
    } else {
        htmlShow.style.display = "none";
    }
}

function toggle2() {
    var htmlShow = document.getElementById("content2");
    if (htmlShow.style.display === "none") {
        htmlShow.style.display = "block";
    } else {
        htmlShow.style.display = "none";
    }
}

function toggle3() {
    var htmlShow = document.getElementById("content3");
    if (htmlShow.style.display === "none") {
        htmlShow.style.display = "block";
    } else {
        htmlShow.style.display = "none";
    }
}

function toggle4() {
    var htmlShow = document.getElementById("content4");
    if (htmlShow.style.display === "none") {
        htmlShow.style.display = "block";
    } else {
        htmlShow.style.display = "none";
    }
}

function toggle5() {
    var htmlShow = document.getElementById("content5");
    if (htmlShow.style.display === "none") {
        htmlShow.style.display = "block";
    } else {
        htmlShow.style.display = "none";
    }
}

// Color Array Random Selector

let root = document.documentElement;

var colors1 = [
    "#00c000",
    "#c000bf",
    "#0700c0",
    "#c00013",
    "#c09600"
];

var color_1 = colors1[Math.floor(Math.random() * colors1.length)];

root.style.setProperty("--color-1", color_1);

var colors2 = [
    "#e6ffe6",
    "#ffe6ff",
    "#dedeff",
    "#ffe6e8",
    "#fff9e6"
];

var color_2 = colors2[Math.floor(Math.random() * colors2.length)];

root.style.setProperty("--color-2", color_2);