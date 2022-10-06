const quizData = [
    {
        question: "Which among the following is the capital city of India?",
        a: "Chennai",
        b: "Mumbai",
        c: "Noida",
        d: "New Delhi",
        correct: "d",
    },
    {
        question: "Which country does A B DeVillers belongs to?",
        a: "India",
        b: "South Africa",
        c: "Pakistan",
        d: "England",
        correct: "b",
    },
    {
        question: "Name the National Language of India?",
        a: "Telugu",
        b: "Hindi",
        c: "Tamil",
        d: "None of the above",
        correct: "d",
    },
    {
        question: "Elon Musk is the CEO of which company?",
        a: "SpaceX",
        b: "Tesla",
        c: "Solar City",
        d: "All of the Above",
        correct: "d",
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
           `
       }
    }
})