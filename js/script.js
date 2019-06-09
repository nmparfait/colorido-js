// #E4DFDA, #D4B483, #C1666B, #4E878C, #00241B, #B5CA8D, #FCD581

let colors = ['#E4DFDA', '#D4B483', '#C1666B', '#4E878C', '#00241B', '#B5CA8D', '#FCD581'];

let btn = document.getElementById('btn');
btn.addEventListener('click', function(){
    let random = Math.floor(Math.random()* colors.length);
    let bckG = document.body;
    bckG.style.backgroundColor =colors[random];
})

