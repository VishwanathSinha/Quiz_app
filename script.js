setTimeout(function () {
    window.open('index2.html', '_self');
    alert("round 1 done");
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
        question: "What is the PH of H2O?",
        a: "6",
        b: "7",
        c: "8",
        d: "9",
        correct: "b",
    },
    {
        question: "Which of the following gas is reduced in the reduction process?",
        a: "Oxygen",
        b: "Helium",
        c: "Carbon",
        d: "Hydrogen",
        correct: "d",
    },
    {
        question: "Which of the following compound is mainly used in hand sanitizer?",
        a: "Aldehyde",
        b: "Acetic acid",
        c: "Alcohol",
        d: "Ketone",
        correct: "c",
    },
    {
        question: "What is the S.I unit of frequency?",
        a: "Diopter",
        b: "Second",
        c: "Hertz",
        d: "Meter",
        correct: "c",
    },
    {
        question: " Acid turns blue litmus paper into which color?",
        a: "Black",
        b: "Blue",
        c: "Red",
        d: "Orange",
        correct: "c",
    },
    {
        question: "Which of the following enzymes is not present in the human stomach?",
        a: "Pepsin",
        b: "Hydrochloric acid",
        c: "Mucus",
        d: "Trypsin",
        correct: "d",
    },
    {
        question: "Which of the following gland is present in the human mouth?",
        a: "Adrenal",
        b: "Pituitary",
        c: "Gonads",
        d: "Salivary",
        correct: "d",
    },
    {
        question: "Name the gland which is present above our kidneys?",
        a: "Adrenal",
        b: "Pituitary",
        c: "Gonads",
        d: "Salivary",
        correct: "a",
    },
    {
        question: "What is the basic unit of our neural system?",
        a: "Neutron",
        b: "Neuron",
        c: "Nephron",
        d: "Nucleon",
        correct: "b",
    },
    {
        question: "What is the unit of wavelength?",
        a: "Hertz",
        b: "Diopter",
        c: "Faraday",
        d: "Meter",
        correct: "d",
    },


];

const result=document.getElementById('result')
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
function f1(){
    // console.log(score);
    return score
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
           <button onclick="location.href='index2.html'">Next</button>
           `
           
       }
    }
})
