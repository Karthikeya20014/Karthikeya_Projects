// Palindrome Number Code.
const l2=document.getElementById("l2"); //Number Input
const s2=document.getElementById("s2"); //Submit Button
const p2=document.getElementById("p2"); ////Result Paragraph.


let rem;

function reverse(n){
    let rev=0;
    while(n > 0){
        rem=n%10;
        rev=rev*10+rem;
        n=Math.floor(n/10);
    }
    return rev;
}

let val;
let res;
s2.onclick=function(){
    val=l2.value;
    val=Number(val);

    res=reverse(val);

    if(val==res){
        p2.textContent=`The Number ${val} is a Palindrome Number`;
    }else{
        p2.textContent=`The Number ${val} is not a Palindrome Number`;

    }

}