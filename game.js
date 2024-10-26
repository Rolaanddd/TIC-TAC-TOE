let sizeScore2=["50px","100px","150px","200px","250px","300px","350px","400px","450px","500px","550px"];
let s1=1;
let score=[0,10,20,30,40,50,60,70,80,90,100]; 
let s2=1;
let score1= document.querySelector(".score1");
let score2= document.querySelector(".score2");


let lines= document.querySelectorAll(".line");

let boxes= document.querySelectorAll(".box");
let last="o";
for (const i of boxes) {
    i.addEventListener("click",()=>{

        if(last==="o"){
           i.innerText="X";
           last="x";
        }
           else {
               i.innerText="O";
           last="o";
           }


           let ib1=boxes[0].innerText;
           let ib2=boxes[1].innerText;
           let ib3=boxes[2].innerText;
           let ib4=boxes[3].innerText;
           let ib5=boxes[4].innerText;
           let ib6=boxes[5].innerText;
           let ib7=boxes[6].innerText;
           let ib8=boxes[7].innerText;
           let ib9=boxes[8].innerText;



           if((ib1===ib2&&ib1===ib3&&ib1==="X")||(ib1===ib2&&ib1===ib3&&ib1==="O")){
            lines[3].classList.add("seen");
            scorecard(ib1);
            setTimeout(nextround, 500);
           }
           if((ib4===ib5&&ib4===ib6&&ib4==="X")||(ib4===ib5&&ib4===ib6&&ib4==="O")){
            lines[4].classList.add("seen");
            scorecard(ib4);
            setTimeout(nextround, 500);
           }
           if((ib7===ib8&&ib8===ib9&&ib8==="X")||(ib7===ib8&&ib9===ib8&&ib9==="O")){
            lines[5].classList.add("seen");
            scorecard(ib7);
            setTimeout(nextround, 500);
           }


           if((ib1===ib4&&ib1===ib7&&ib7==="X")||(ib1===ib4&&ib1===ib7&&ib7==="O")){
            lines[2].classList.add("seen");
            scorecard(ib1);
            setTimeout(nextround, 500);
           }
           if((ib2===ib5&&ib5===ib8&&ib8==="X")||(ib2===ib5&&ib5===ib8&&ib8==="O")){
            lines[0].classList.add("seen");
            scorecard(ib2);
            setTimeout(nextround, 500);
           }
           if((ib3===ib6&&ib6===ib9&&ib9==="X")||(ib3===ib6&&ib6===ib9&&ib9==="O")){
            lines[1].classList.add("seen");
            scorecard(ib3);
            setTimeout(nextround, 500);
           }


           if((ib1===ib5&&ib5===ib9&&ib9==="X")||(ib1===ib5&&ib5===ib9&&ib9==="O")){
            lines[7].classList.add("seen");
            scorecard(ib1);
            setTimeout(nextround, 500);
           }
           if((ib3===ib5&&ib5===ib7&&ib7==="X")||(ib3===ib5&&ib5===ib7&&ib7==="O")){
            lines[6].classList.add("seen");
            scorecard(ib3);
            setTimeout(nextround, 500);
           }

    }) 
}



let reset=document.querySelector("#reset");
reset.addEventListener("click",()=>{
    nextround();
    resting();
}) 

function resting(){
    score2.style.height = sizeScore2[0];
    score2.innerText=null;
    s2=1;
    score1.style.height = sizeScore2[0];
    score1.innerText=null;
    s1=1;
    last="o";
}


let f;
function scorecard(f){
    if(f==="X"){
        score2.style.height = sizeScore2[s2];
        score2.innerText=score[s2];
        s2=s2+1;
        
    }
    else{
        score1.style.height = sizeScore2[s1];
        score1.innerText=score[s1];
        s1=s1+1;
    }
}
function nextround(){
    for (const ij of boxes) {
        ij.innerText=null;
    }
    for (const l of lines) {
        l.classList.remove("seen");
    }
    if(s1===6||s2===6){
        setTimeout(resting,700);
        if(s1===6){
            alert ("O wins")
        }
        else{
            alert("X wins")
        }
    }
}


