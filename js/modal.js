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
        "<p class=\"mbr-fonts-style align-center display-7 mbr-pt-4\" style='margin-top: 0; padding-top: 0'> " +
        "I am currently an intern at Imagination Technologies (Main office) working in their Hardware graphics " +
        "team." +
        "</p>" +
        "<p class=\"mbr-fonts-style align-center display-7 mbr-pt-4\" style='margin-bottom: 0; padding-bottom: 0'> " +
        "This section will be updated once I finish my placement." +
        "</p>",
        "July 2020 - Present",
        "Imagination Technologies website",
        "https://www.imgtec.com/",
        "<img alt=\"image\" layout=\"responsive\" src=\"assets/images/2020-logo-stacked-2.png\" class='modal-image'>"
    ],
    [
        "COVID-19 Visualistion platform",
        "<p class=\"mbr-fonts-style align-center display-7 mbr-pt-4\" style='margin-top: 0; padding-top: 0'> " +
        "For my third-year project, I created a COVID-19 diagnostic tracking platform. This was designed to interface" +
        " with a diagnostic device created by a team in the Centre for Bio-Inspired Technology at Imperial College" +
        " London. The platform, which is centred around an interactive map, allows users to access information from " +
        "countrywide to postcode level scales. Diagnostic statistics and demographics are generated client-side based" +
        " on the selected region. Authenticated clinicians can also access patient-specific information and detailed" +
        " results for individual diagnostic tests." +
        "</p>" +
        "<p class=\"mbr-fonts-style align-center display-7 mbr-pt-4\"> " +
        "A REST API was created to query information from the server and to upload data using the dedicated upload" +
        " page or administrator interface." +
        "</p>" +
        "<p class=\"mbr-fonts-style align-center display-7 mbr-pt-4\" style='margin-bottom: 0; padding-bottom: 0'> " +
        "The backend for the platform was implemented in Python using Django. The frontend used JavaScript, HTML " +
        "and CSS. The platform was deployed to Heroku using a Spatial Postgres database (PostGIS)." +
        "</p>",
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
        " machines." +
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
        "<img alt=\"image\" layout=\"responsive\" src=\"assets/images/blue.png\" class='modal-image'>"
    ],
    [
        "Self monitoring and watering plant-pot",
        "<p class=\"mbr-fonts-style align-center display-7 mbr-pt-4\" style='margin-top: 0; padding-top: 0'> " +
        "As part of a team of three, I created a self-monitoring and watering plant-pot. It monitored air " +
        "temperature and humidity as well as soil moisture to determine when to water the plant. A small pump and " +
        "reservoir were used to dispense water when needed. The sensors and pump were connected to a Raspberry Pi." +
        " Sensor readings and watering information were passed on to the database where they were processed to be " +
        "displayed in an app. The app was used to adjust watering settings and monitor plant health or historical " +
        "data" +
        "</p>" +
        "<p class=\"mbr-fonts-style align-center display-7 mbr-pt-4\"> " +
        "We also added Amazon Alexa support to get basic information or water the plant (e.g. “Alexa, ask my plant " +
        "when it was last watered”)." +
        "</p>" +
        "<p class=\"mbr-fonts-style align-center display-7 mbr-pt-4\" style='margin-bottom: 0; padding-bottom: 0'> " +
        "Most of the code was implemented in Python with Microsoft PowerApps being used for the app." +
        "</p>",
        "January 2020 - February 2020",
        "Github - contains link to marketing website",
        "https://github.com/tobhil98/PlantCareSystem-IoTDevice",
        "picture"
    ],
    [
        "C89 to MIPS compiler (C++)",
        "<p class=\"mbr-fonts-style align-center display-7 mbr-pt-4\" style='margin-top: 0; padding-top: 0'> " +
        "As part of a team of two, I implemented a C to MIPS assembly compiler. The compiler took in C (89) code " +
        "which was lexed and parsed to produce an Abstract Syntax Tree (AST). The AST was then used to" +
        " generate the MIPS assembly code. This same AST was also used to generate Python code equivalent to the " +
        "C code, acting as a C to Python translator." +
        "</p>" +
        "<p class=\"mbr-fonts-style align-center display-7 mbr-pt-4\"> " +
        "The language constructs supported by the compiler and translator are detailed in the repository Readme." +
        "</p>" +
        "<p class=\"mbr-fonts-style align-center display-7 mbr-pt-4\" style='margin-bottom: 0; padding-bottom: 0'>" +
        "The compiler/translator was written using Lex for the lexer, Yacc for the parser and C++ from there onwards. " +
        "The testbench was written in Bash." +
        "</p>",
        "February 2019 - March 2019",
        "Repo currently private (Coming soon)",
        "",
        "<img alt=\"image\" layout=\"responsive\" src=\"assets/images/compiler_languages.png\" class='modal-image'>"
    ],
    [
        "MIPS CPU Simulator (C++)",
        "<p class=\"mbr-fonts-style align-center display-7 mbr-pt-4\" style='margin-top: 0; padding-top: 0'> " +
        "As part of a team of two, I implemented a CPU simulator based on the MIPS I instruction set architecture " +
        "(ISA). The simulator took as input MIPS I binaries and executed them, returning a result in the designated " +
        "registers. Over 50 CPU instructions were supported, including both ALU and memory oriented ones. " +
        "</p>" +
        "<p class=\"mbr-fonts-style align-center display-7 mbr-pt-4\"> " +
        "We also developed an extensive test suite designed to demonstrate functionality and identify bugs during " +
        "development." +
        "</p>" +
        "<p class=\"mbr-fonts-style align-center display-7 mbr-pt-4\" style='margin-bottom: 0; padding-bottom: 0'> " +
        "The simulator was implemented using C++ and the testbench primarily relied on Bash." +
        "</p>",
        "October 2018 - November 2018",
        "Repo currently private (Coming soon)",
        "",
        "<img alt=\"image\" layout=\"responsive\" src=\"assets/images/simulator_languages.png\" class='modal-image'>"
    ],
    [
        "Real time face detection on an FPGA",
        "<h3 class=\"mbr-section-subtitle mbr-fonts-style align-center mbr-white mbr-light display-2\">1st Year Project</h3>" +
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
        "<img alt=\"image\" layout=\"responsive\" src=\"assets/images/face_detection.gif\" class='modal-image'>"
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
        "<img alt=\"image\" layout=\"responsive\" src=\"assets/images/tpe.jpg\" class='modal-image'>"
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
