setTimeout(function () {
    window.open('index3.html', '_self');
    alert("round 2 done");
}, 58000);
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
window.onload = function () {
    var fiveMinutes = 60 * 1,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};
const quizData = [
    {
        question: "Which one of the following river flows between Vindhyan and Satpura ranges?",
        a: "Narmada",
        b: "Mahanadi",
        c: "Son",
        d: "Netravati",
        correct: "a",
    },
    {
        question: "The Central Rice Research Station is situated in?",
        a: "Chennai",
        b: "Cuttack",
        c: "Bangalore",
        d: "Quilon",
        correct: "b",
    },
    {
        question: "Who among the following wrote Sanskrit grammar?",
        a: "Kalidasa",
        b: "Charak",
        c: "Panini",
        d: "Aryabhatt",
        correct: "c",
    },
    {
        question: "Which among the following headstreams meets the Ganges in last?",
        a: "Alaknanda",
        b: "Pindar",
        c: "Mandakini",
        d: "Bhagirathi",
        correct: "d",
    },
    {
        question: "Tsunamis are not caused by",
        a: "Hurricanes",
        b: "Earthquakes",
        c: "Undersea landslides",
        d: "Volcanic eruptions",
        correct: "a",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0
function f2(){
    return score;
}
loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           <button onclick="location.href='index3.html'">Next</button>
           `
       }
    }
})