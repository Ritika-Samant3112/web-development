const quizData=[
   { Question:"earliest computer language?",
    a:"java",
    b:"Python",
    c:"javascript",
    d:"c",
    correct:"d",


},
{
    Question:"full form of css?",
    a:"java",
    b:"js",
    c:"python",
    d:"cascading stylesheet",
    correct:"d",
},
{
     Question:"your name?",
    a:"java",
    b:"js",
    c:"python",
    d:"sheela",
    correct:"b",
},
{
    Question:"fav language?",
    a:"java",
    b:"js",
    c:"python",
    d:"sheela",
    correct:"a",
},
]


let index=0;
let correct=0;
let incorrect=0;
let total=quizData.length;
let questionBox=document.getElementById("qs");
let labels=document.querySelectorAll("label");
let allInputs=document.querySelectorAll("input");
const loadQs=()=>{
    if(index===total){
        return endQuiz();
    }
    const data=quizData[index]
    questionBox.innerHTML=data.Question;
    labels[0].innerHTML=data.a;
    labels[1].innerHTML=data.b;
    labels[2].innerHTML=data.c;
    labels[3].innerHTML=data.d;
    }
    const submitQuiz=()=>{
        const data=quizData[index]
        const ans=getAnswer();
        if(ans==data.correct){
           correct++;
        }else{
            incorrect++;
        }
        index++;
        loadQs()
    }
    const getAnswer=()=>{
        let answer;
        allInputs.forEach((input)=>{
            if(input.checked){
                answer=input.value;
                input.checked=null;
            }
        }
        );return answer;
    }
    const endQuiz=()=>{
        document.querySelector(".cont").innerHTML=`<h3>ThankYou for playing the Quiz</h3>
        <h2>${correct}/${total} are correct</h2>`  
    }
    loadQs();