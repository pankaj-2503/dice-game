//generate number from 1 to 6
const num1=Math.floor(Math.random()*6)+1;
const num2=Math.floor(Math.random()*6)+1;

//dice.png from 1 to 6
const firstDiceImage='dice'+num1+'.png';
const secondDiceImage='dice'+num2+'.png';

//query selector
document.querySelectorAll('img')[0].setAttribute('src',firstDiceImage); //choosing first image from html
document.querySelectorAll('img')[1].setAttribute('src',secondDiceImage);

if(num1>num2){
    document.querySelector('h1').innerHTML="The Winner is User 1";
}else if(num1==num2){
    document.querySelector('h1').innerHTML="It's a Draw!";
}
else{
    document.querySelector('h1').innerHTML="The Winner is User 2";
}

