setTimeout(function () {
    window.open('index4.html', '_self');
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
        image: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/30455c9384889.57ee562a4fba0.jpg",
        question: "Which company logo is this?",
        a: "vodafone",
        b: "Telenor",
        c: "BSNL",
        d: "Airtel",
        correct: "d",
    },
    {
        image: "https://play-lh.googleusercontent.com/b1-MIBjlMD9kvl0Okeglm9BL9ejRpOXMio303W0tiLb8Ul5WuVzBDoDKgGRcALOsCdw",
        question: "Which company logo is this?",
        a: "Google drive",
        b: "Dropbox",
        c: "Amazon cloud drive",
        d: "Onedrive",
        correct: "b",
    },
    {
        image: "https://www.proprofs.com/quiz-school/upload/yuiupload/934142179.jpg",
        question: "Which company logo is this?",
        a: "Unilever",
        b: "United News of India",
        c: "UNIX",
        d: "Uni Klinger Limited",
        correct: "a",
    },
    {
        image: "https://www.proprofs.com/quiz-school/upload/yuiupload/708889429.jpg",
        question: "Which company logo is this?",
        a: "B.M.W.",
        b: "Volkswagen",
        c: "Ford",
        d: "Renault",
        correct: "b",
    },
    {
        image: "https://www.proprofs.com/quiz-school/upload/yuiupload/1374181081.jpg",
        question: "Which company logo is this?",
        a: "FOX Broadcasting Company",
        b: "Fire Fox",
        c: "Fox Movies",
        d: "Fox News",
        correct: "b",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const imageEl = document.getElementsByTagName('img')[0]
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    imageEl.setAttribute("src",currentQuizData.image)
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
           <button onclick="location.href='index.html'">final submit</button>`
       }
    }
})
function f3(){
     return score
}