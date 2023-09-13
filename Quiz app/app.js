var questionData = [
    {
        question: " In cricket, what is the highest possible score a batsman can achieve in a single delivery?",
        option: ["A)4", "B)6", "C)10", "D)12"],
        answer: "B)6"
    },
    {
        question: "What is the term used in cricket to describe a situation where a bowler takes three wickets on three consecutive deliveries?",
        option: ["A) Hat-trick", "B) Strikeout", "C) Boundary", "D) No-ball"],
        answer: "A) Hat-trick"
    },
    {
        question: " In a One Day International (ODI) cricket match, each team is allowed a maximum of how many overs in their innings?",
        option: ["A) 20 overs", "B) 40 overs", "C) 50 overs", "D) 60 overs"],
        answer: "C) 50 overs"
    },
    {
        question: "Who holds the record for the highest individual score in a Test match inning in international cricket?",
        option: ["A) Virat Kohli", "B) Ricky Ponting", "C) Brian Lara", "D) Sachin Tendulkar"],
        answer: "C) Brian Lara"
    },
    {
        question: " In cricket, what is the term used for the act of a bowler dismissing a batsman without the batsman scoring any runs in an inning?",
        option: ["A) Duck", "B) Yorker", "C) Maiden", "D) Stump"],
        answer: "C) Maiden"
    }
]



var questions = document.getElementById("questions")
var options = document.getElementById("options")
var questionIndex = 0;
var score = 0;
var totalScore = 0;
var scoreHtml = document.getElementById("scoreHtml")
var isStart = false
function renderData() {
    if (isStart && questionIndex < questionData.length) {
        questions.innerHTML = questionData[questionIndex].question
        options.innerHTML = ""
        for (var i = 0; i < questionData[questionIndex].option.length; i++) {
            options.innerHTML += `<div class = "col-md-6">
            <button onclick="checkAnswer('${questionData[questionIndex].option[i]}','${questionData[questionIndex].answer}')" class = "btn rounded shadow-lg px-5 py-2 mt-5">
            ${questionData[questionIndex].option[i]}
            </button>
            </div>`
        }
    }
}
renderData();

function nextQuestion() {
    questionIndex++;
    renderData();
}
function checkAnswer(userAnswer, answer) {
    console.log(userAnswer)
    console.log(answer)
    if (userAnswer == answer) {
        // console.log("correct answer")
        score++;
        scoreHtml.innerHTML = "SCORE : 5/" + score
    } else if (questionIndex == 4) {
        questions.innerHTML = ""
        options.innerHTML = ""
        timer.innerHTML = ""
        Start.innerHTML = ""
    }
    else {
        console.log("wrongAnswer")
    }
    totalScore++
    nextQuestion();
    // console.log(score)

}

var Start = document.getElementById("Start")
var timer = document.getElementById("timer")
var time = 30;
var interval;
function start() {
    isStart = true
    Start.innerHTML = ""
    interval = setInterval(startTimer, 1000)
    renderData()
}
function startTimer() {
    Start.style.display = "none"
    time--;
    timer.innerHTML = time
    if (time == 0) {
        clearInterval(interval)
        timer.innerHTML = ""
        timer = "";
        options.innerHTML = ""
        questions.innerHTML = ""
        options.innerHTML = ""
    }
    else if (totalScore == 5) {
        timer.innerHTML = ""
        Start.style.display = "none"
        questions.innerHTML = ""
        options.innerHTML = ""
    }
}



