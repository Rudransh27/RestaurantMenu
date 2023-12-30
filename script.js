const accordians=document.querySelectorAll('.accordian');

accordians.forEach(accordian=>{
   const answer=accordian.querySelector('.answer');
   const question=accordian.querySelector('.question')
   accordian.addEventListener('click', ()=>{
     if(answer.classList.contains('active')){
        answer.classList.remove('active');
        question.classList.remove('marginClass')
        answer.style.maxHeight=null;
     }else{
      answer.classList.add('active');
      question.classList.add('marginClass');
      answer.style.maxHeight=answer.scrollHeight+'px';
     }
   })
})