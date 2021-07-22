let aTerms=["Javascript","Operators","Variables","Functions","Methods","NaN","Escape"]
let terms={
1: "JavaScript is a programming language used to make web pages interactive.",
2:"Operators are special symbols that perform specific operations on one,two or three data values and return a result.",
3:"Variables are anything that can vary and change anytime",
4:"Are set of statements that perform a task or calculates a value. They allow you to define a block of code, give a name and execute it as many times as you want.ie send()",
5:"A method is a function that is a property of an object ie this.lastname.",
6:"It represents a value which is not a valid number.",
7:"Is a function that computes a new string and makes a string portable so it can be transmitted across any network to any computer that supports ASCII characters."
}
// let slides={
//     aTerms[i]:terms.(i+1)
// }
function flip (aTerms[i], terms.(i+1)){
    $(document).ready(function(){
        $(".btn").click(function(){
            for(let i=0; i<aTerms.length; i--){
                let defaultCard=aTerms[i];
                while($('div[class="intro"]').textContent==aTerms[i]){

                }
            }
        })
    })
}






// let learn = ()=>{

//     if (document.querySelector('button[value="previous"]').clicked ==true){
//         for(let i=0; i<terms.length; i--){
//             const ppoint = new powerPointCard(flashcardBody, 'aTerms[i]', 'terms.i+1');
//             while(i==0 && $('button[value="previous"]').clicked==true){
//                 $("btn").css("display", "hidden");
//                 continue;
//             }
//             while(i>=1 && i<aTerms.length && $('button[value="next"]').clicked==true){
//                 document.querySelector(".intro").textContent = aTerms[i];
    
//             }
//         }
//     }
//     if (document.querySelector('button[value="next"]').clicked==true){
//         for(let j=0; j<terms.length; j++){
//             while(i>=1 && i<aTerms.length && $('button[value="next"]').clicked==true){
//                 let nextSlide=aTerms[i];
//                 document.querySelector(".intro").textContent = nextSlide;
    
//             }
//         }
//     }
// }
// learn()