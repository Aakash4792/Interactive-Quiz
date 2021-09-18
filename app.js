const form = document.querySelector('.quiz-form');
const result = document.querySelector('.result');
const scoreHTML = document.querySelector('.score');
const answers = ['B','B','B','B','B'];
form.addEventListener('submit',e=>{
    e.preventDefault();
    const userAnswers = [form.q1.value,form.q2.value,form.q3.value,form.q4.value];
    let score = 0;
    userAnswers.forEach((answer,index)=>{
        if(answer===answers[index]){
            score += 25;
        }
    });

    scrollTo(0,0);
    console.log(score);
    result.style.display = 'block';
    

    let output = 0;

    const timer = setInterval(()=>{
        scoreHTML.textContent = output + "%";
        if(output===score){
            clearInterval(timer);
        }else{
            output++;
        }
    },30);
})