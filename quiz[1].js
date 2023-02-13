
let questions = [
    {
        id: 1,
        question: "What is full form of CPU?",
        answer:"Central Processing Unit",
        options: [
            "Circuit Processor Unit",
            "Circuit Point Unit",
            "Close Primary Unit",
            "Central Processing Unit"
        ]
    },
    {
        id: 2,
        question: "How many bytes is equal to 1 Kilo byte?",
        answer:"1024",
        options: [
            "1000",
            "100",
            "124",
            "1024"
        ]
    },
    {
        id: 3,
        question: "Who is the father of Computer Science?",
        answer:"Charles Babbage",
        options: [
            "Adtiya Chopra",
            "Bonney Kapoor",
            "Albert Einstein",
            "Charles Babbage"
        ]
    },
    {
        id: 4,
        question: "Scientific name of Computer?",
        answer:"Sillico Sapiens",
        options: [
            "Homo Sapiens",
            "Sodium Chloride",
            "Exo Sapiens",
            "Sillico Sapiens"
        ]
    },
    {
        id: 5,
        question: "The first web browser is_____?",
        answer:"Mosaic",
        options: [
            "Chrome",
            "Morzilla",
            "Edge",
            "Mosaic"
        ]
    },
    {
        id: 6,
        question: "Which programming languages are classified as low level languages?",
        answer:"Assembly Language",
        options: [
            "C++",
            "Python",
            "JAVA",
            "Assembly Language"
        ]
    },
    {
        id: 7,
        question: "First page of Website is termed as _____?",
        answer:"Homepage",
        options: [
            "Homepage",
            "Career",
            "Service",
            "None of the these"
        ]
    },
    {
        id: 8,
        question: "What is correcting errors in a programming called?",
        answer:"Debugging",
        options: [
            "Correction",
            "Debugging",
            "Rectify",
            "None of the these"
        ]
    },
    {
        id: 9,
        question: "What is a joystick primarily in computers used for?",
        answer:"Computer Gaming",
        options: [
            "Navigation",
            "Computer Painting",
            "Power Switch",
            "Computer Gaming"
        ]
    },
    {
        id: 10,
        question: "Which of the following commands is given to reboot the computer?",
        answer:"Ctrl+Alt+Del",
        options: [
            "Ctrl+F4",
            "Ctrl+Shift+Del",
            "Alt+Shift+Del",
            "Ctrl+Alt+Del"
        ]
    },
];

let question_count = 0;
let points = 0;

window.onload = function() {
    show(question_count);
};

function show(count) {
    let question = document.getElementById("questions");
    let[first, second, third, fourth] = questions[count].options;

    question.innerHTML = `<h2>Q${count + 1}. ${questions[count].question}</h2>
    <ul class="option_group">
        <li class="option">${first}</li>
        <li class="option">${second}</li>
        <li class="option">${third}</li>
        <li class="option">${fourth}</li>
    </ul>`;
    toggleActive();
}


function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for(let i=0; i < option.length; i++){
        option[i].onclick = function(){
            for(let i=0; i < option.length; i++){
                if(option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        }
    }
}

function next(){

    if(question_count == questions.length -1){
        location.href = "final.html";
    }
    console.log(question_count);


let user_answer = document.querySelector("li.option.active").innerHTML;

if(user_answer == questions[question_count].answer){
    points += 10;
    sessionStorage.setItem("points",points);
}
console.log(points);

question_count++;
show(question_count);
}