let count = 0;

const plusBtn = document.getElementById('plus-btn');
plusBtn.addEventListener('click', function(){
    count = count+ 1;
   const counter=  document.getElementById('count');
   counter.innerText = count;
});

const minusBtn = document.getElementById('minus-btn');
minusBtn.addEventListener('click', function(){
    count = count - 1;
    const counter = document.getElementById('count');
    counter.innerText = count;
    
})


