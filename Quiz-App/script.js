/*create an array of objects 'quizData' with question, options and correct option as properties*/
const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

/*select the element with DOM selectors and assign the values to the variables*/
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

/*initialize the variables to 0*/
let currentQuiz = 0
let score = 0

/*calls loadQuiz() function*/
loadQuiz()

/*defines loadQuiz() function*/
function loadQuiz() {
    /*calls deselectAnswers() function*/
    deselectAnswers()

    /*each object is accessed using the 'quizData' array and 'currentQuiz' as its index*/
    const currentQuizData = quizData[currentQuiz]

    /*value for each object property is written using 'innerText' DOM element property*/
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

/*defines deselectAnswers() function*/
function deselectAnswers() {
    /*forEach() method is called for each element in an array, this checks if an option is selected, if selected it unselects it*/
    answerEls.forEach(answerEl => answerEl.checked = false)
}

/*defines getSelected() function*/
function getSelected() {
    let answer

    /*forEach() method is called for each element in an array, */
    answerEls.forEach(answerEl => {
        /*checks if any option is selected or checked*/
        if(answerEl.checked) {
            /*id property sets or returns the value of an element's id attribute*/
            answer = answerEl.id
        }
    })

    /*returns the value of 'answer' variable*/
    return answer
}

/*if the submit button is clicked, the following code is executed*/
submitBtn.addEventListener('click', () => {
    /*value returned by the getSelected() function is assigned to 'answer' variable*/
    const answer = getSelected()
    
    /*if answer is 'true'*/
    if(answer) {
        /*if the value of answer is equal to the value of the 'correct' property of the current object, then value of score is incremented*/
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        /*the value of the index for the object array is incremented*/
        currentQuiz++

        /*if index of the object is less than the number of objects in the array, call the loadQuiz() function*/
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            /*if no error, print the score using the javascript string literal and innerHTML property, in the format of 'score / total questions'*/
            quiz.innerHTML = `
                <h2>You answered ${score}/${quizData.length} questions correctly</h2>
                
                <button onclick="location.reload()">Reload</button>
            `
            /*location.reload() method reloads the current document of the quiz, on clicking the 'Reload' button*/
        }
    }
})
