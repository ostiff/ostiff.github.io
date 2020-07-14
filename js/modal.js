const modal = document.getElementById("myModal");
const navbar = document.getElementsByClassName("navbar")[0];
const span = document.getElementsByClassName("close")[0];
const modal_name = document.getElementById("modal-name");
const modal_left = document.getElementById("modal-left");
const modal_right_top = document.getElementById("modal-right-top");
const date = document.getElementById("li-date");
const link = document.getElementById("li-link");
const modal_right_bottom = document.getElementById("modal-right-bottom");

const modal_content = [
    [
        "Hardware graphics intern (Imgtec)",
        "<p class=\"mbr-fonts-style align-center display-7 mbr-pt-4\"> " +
        "I am currently an intern at Imagination Technologies (Main office) working in there Hardware graphics " +
        "team." +
        "</p>" +
        "<p class=\"mbr-fonts-style align-center display-7 mbr-pt-4\">" +
        "This section will be updated once I finish my placement" +
        "</p>",
        "July 2020 - Present",
        "Imagination Technologies website",
        "https://www.imgtec.com/",
        "<img alt=\"image\" layout=\"responsive\" src=\"assets/images/2020-logo-stacked-2.png\" class='modal-image'>"
    ],
    [
        "COVID-19 Visualistion platform",
        "general stuff",
        "April 2020 - June 2020",
        "Documentation",
        "https://protondx-documentation.herokuapp.com/",
        "<img src=\"assets/images/detail-view.gif\" layout=\"responsive\" alt=\"image\" class='modal-image'>"
    ],
    [
        "Undergraduate Teaching Assistant",
        "<p class=\"mbr-fonts-style align-center display-7 mbr-pt-4\" style='margin-top: 0; padding-top: 0'> " +
        "I spent one year as a teaching assistant for the 'Programming for Engineers' module in the Electrical and " +
        "Electronic Engineering department. The module focuses on procedural and object-oriented programming in C++." +
        " It helps students understand key programming concepts as well as how to use the command line and virtual" +
        "machines." +
        "</p>" +
        "<p class=\"mbr-fonts-style align-center display-7 mbr-pt-4\" style='margin-bottom: 0; padding-bottom: 0'> " +
        "Being a teaching assistant allowed me to further improve my own understanding of some notions and to learn " +
        "some entirely new skills." +
        "</p>",
        "October 2019 - March 2020",
        "N/A",
        "",
        "<img alt=\"image\" layout=\"responsive\" src=\"assets/images/IMP_ML_W_N_CLEAR-SPACE.png\" class='modal-image'>"
    ],
    [
        "Functional programming language",
        "general stuff",
        "February 2020 - March 2020",
        "Repo currently private (Coming soon)",
        "",
        "picture"
    ],
    [
        "Self monitoring and watering plant-pot",
        "general stuff",
        "January 2020 - February 2020",
        "Github - contains link to marketing website",
        "https://github.com/tobhil98/PlantCareSystem-IoTDevice",
        "picture"
    ]
    ,
    [
        "MIPS CPU Simulator (C++)",
        "<p class=\"mbr-fonts-style align-center display-7 mbr-pt-4\" style='margin-top: 0; padding-top: 0'> " +
        "As part of a team of two, we implemented a CPU simulator based on the MIPS I instruction set architecture " +
        "(ISA). The simulator took as input MIPS I binaries and executed them, returning a result in the designated " +
        "registers. Over 50 CPU instructions were supported, including both ALU and memory oriented ones. " +
        "</p>" +
        "<p class=\"mbr-fonts-style align-center display-7 mbr-pt-4\" style='margin-bottom: 0; padding-bottom: 0'> " +
        "We also developed a extensive test suite designed to demonstrate functionality and identify bugs during " +
        "development." +
        "</p>",
        "October 2018 - November 2018",
        "Repo currently private (Coming soon)",
        "",
        "picture"
    ],
    [
        "C89 to MIPS compiler (C++)",
        "general stuff",
        "February 2019 - March 2019",
        "Repo currently private (Coming soon)",
        "",
        "picture"
    ],
    [
        "Real time face detection on an FPGA",
        "<p class=\"mbr-fonts-style align-center display-7 mbr-pt-4\" style='margin-top: 0; padding-top: 0'>" +
        "As part of a team of three, ..." +
        "</p>" +
        "<p class=\"mbr-fonts-style align-center display-7 mbr-pt-4\"> " +
        "</p>" +
        "<p class=\"mbr-fonts-style align-center display-7 mbr-pt-4\" style='margin-bottom: 0; padding-bottom: 0'> " +
        "</p>",
        "March 2018 - May 2018",
        "N/A",
        "",
        "picture"
    ],
    [
        "Using the potato as a source of energy",
        "<p class=\"mbr-fonts-style align-center display-7 mbr-pt-4\" style='margin-top: 0; padding-top: 0'> " +
        "As part of a supervised research project in a group of three, we tried to determine if the potato could be" +
        " used as a source of renewable energy. The aim was to obtain as much energy as possible from the potato whilst " +
        "having a minimal impact on the environment." +
        "</p>" +
        "<p class=\"mbr-fonts-style align-center display-7 mbr-pt-4\"> " +
        "We used the potatoes to make a copper-zinc batteries, then used them to produce ethanol (~89%) which could be " +
        "used for power generation in fuel cells, cars or powerplants. What remained from the distillation process was" +
        " air-dried and used as solid fuel." +
        "</p>" +
        "<p class=\"mbr-fonts-style align-center display-7 mbr-pt-4\" style='margin-bottom: 0; padding-bottom: 0'> " +
        "We came to the conclusion that whilst some energy was obtained in all these stages, the monoculture of " +
        "potatoes which would be required made this far from renewable." +
        "</p>",
        "2015 - 2016",
        "Website (French)",
        "https://2016tpe.wixsite.com/tpe1",
        "<img alt=\"image\" layout=\"responsive\" src=\"assets/images/distillation.webp\" class='modal-image'>"
    ],
]

let modal_arr = [];
for (let i = 0; i < 9; i++) {
    modal_arr.push(document.getElementById("modal-" + String(i)));
}

modal_arr.forEach(function (name, i) {
    name.onclick = function() {
        modal_name.innerHTML = modal_content[i][0] || "";
        modal_left.innerHTML = modal_content[i][1] || "";
        date.innerHTML = "Date: " + modal_content[i][2];
        link.innerHTML = modal_content[i][3];
        link.href = modal_content[i][4]
        modal_right_bottom.innerHTML = modal_content[i][5] || "";
        modal.style.display = "block";
    }
});

span.onclick = function() {
    modal.style.display = "none";
}

navbar.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}
