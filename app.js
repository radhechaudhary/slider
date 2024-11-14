let next=document.getElementsByClassName('next')[0];
let prev=document.getElementsByClassName('prev')[0];

next.addEventListener('click',function(){
    
    let items=document.querySelectorAll('.item');
    document.querySelector('.slider').appendChild(items[0]);
});

prev.addEventListener('click', function(){
    let items=document.querySelectorAll('.item');
    document.querySelector('.slider').prepend(items[items.length-1]);
    })
