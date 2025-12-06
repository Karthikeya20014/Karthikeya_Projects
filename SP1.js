const l=document.getElementById("l"); //String Input Box.
const s=document.getElementById("s1"); //Submit Button for String.
const p1=document.getElementById("p1"); //Result Paragraph.

let store="";

function reverse(name){
    let rev="";
    for(let i=name.length-1; i>=0;i--){
        rev=rev+name.charAt(i);
    }
    return rev;
}

let op="";

s.onclick=function(){
    store=l.value;
    store=store.toLowerCase();
    op=reverse(store);

    if(store===op){
        p1.textContent=`The Given String ${store} is a Palindrome`;
    }else{
        p1.textContent=`The Given String ${store} is a not Palindrome`;
    }

}
