function add(number1,number2){
    return number1+number2;  
}
function subtract(number1,number2){
    return number1-number2;  
}
function multiply(number1,number2){
    return number1*number2;  
}
function divide(number1,number2){
    return number1/number2;  
}
let num1="";
let operator;
let num2="";
function operate(operator,number1,number2){
    if (operator==="+"){
        return add(number1,number2);
    }else if(operator==="-"){
        return subtract(number1,number2);
    }else if(operator==="*"){
        return multiply(number1,number2);
    }else if (operator==="/"){
        return divide(number1,number2);
    }
}
let n7= document.querySelector("#b7");
n7.addEventListener("click",()=>{
    if(operator===undefined){
    num1=num1+"7";
    display.textContent=`${num1}`;
    console.log(num1);}else{
        num2=num2+"7";
        display.textContent=`${num2}`;
        console.log(num2)
    }
});
let n8= document.querySelector("#b8");
n8.addEventListener("click",()=>{
    if(operator===undefined){
        num1=num1+"8";
        display.textContent=`${num1}`;
        console.log(num1);}else{
            num2=num2+"8";
            display.textContent=`${num2}`;
            console.log(num2)
        }
});
let n9= document.querySelector("#b9");
n9.addEventListener("click",()=>{
    if(operator===undefined){
        num1=num1+"9";
        display.textContent=`${num1}`;
        console.log(num1);}else{
            num2=num2+"9";
            display.textContent=`${num2}`;
            console.log(num2)
        }
});
let n4= document.querySelector("#b4");
n4.addEventListener("click",()=>{
    if(operator===undefined){
        num1=num1+"4";
        display.textContent=`${num1}`;
        console.log(num1);}else{
            num2=num2+"4";
            display.textContent=`${num2}`;
            console.log(num2)
        }
});
let n5= document.querySelector("#b5");
n5.addEventListener("click",()=>{
    if(operator===undefined){
        num1=num1+"5";
        display.textContent=`${num1}`;
        console.log(num1);}else{
            num2=num2+"5";
            display.textContent=`${num2}`;
            console.log(num2)
        }
});
let n6= document.querySelector("#b6");
n6.addEventListener("click",()=>{
    if(operator===undefined){
        num1=num1+"6";
        display.textContent=`${num1}`;
        console.log(num1);}else{
            num2=num2+"6";
            display.textContent=`${num2}`;
            console.log(num2)
        }
});
let n3= document.querySelector("#b3");
n3.addEventListener("click",()=>{
    if(operator===undefined){
        num1=num1+"3";
        display.textContent=`${num1}`;
        console.log(num1);}else{
            num2=num2+"3";
            display.textContent=`${num2}`;
            console.log(num2)
        }
});
let n2= document.querySelector("#b2");
n2.addEventListener("click",()=>{
    if(operator===undefined){
        num1=num1+"2";
        display.textContent=`${num1}`;
        console.log(num1);}else{
            num2=num2+"2";
            display.textContent=`${num2}`;
            console.log(num2)
        }
});
let n1= document.querySelector("#b1");
n1.addEventListener("click",()=>{
    if(operator===undefined){
        num1=num1+"1";
        display.textContent=`${num1}`;
        console.log(num1);}else{
            num2=num2+"1";
            display.textContent=`${num2}`;
            console.log(num2)
        }
});
let n0= document.querySelector("#b0");
n0.addEventListener("click",()=>{
    if(operator===undefined){
        if (num1==="" && [...num1].some((a)=>a===".")===false || num1[0]==="0" && [...num1].some((a)=>a===".")===false) {
            console.log(num1);
            return ;
        }else{
        num1=num1+"0";
        display.textContent=`${num1}`;
        console.log(num1);}
    }else{
        if (num2==="" && [...num2].some((a)=>a===".")===false) {
            display.textContent=`0`
            console.log(num2);
            return ;
        }else if(num2[0]==="0" && [...num2].some((a)=>a===".")===false){
            return ;
        }else{
        num2=num2+"0";
        display.textContent=`${num2}`;
        console.log(num2)
    }}
});
let ndot= document.querySelector("#bdot");
ndot.addEventListener("click",()=>{
    if(operator===undefined){
        if([...num1].some((a)=>a===".")===false){
            if(num1===""){
                num1="0";
                num1=num1+".";
                display.textContent=`${num1}`;
            }else{
        num1=num1+".";
        display.textContent=`${num1}`;
        console.log(num1);
    }}}else{
        if([...num2].some((a)=>a===".")===false){
            if(num2===""){
                num2="0";
                num2=num2+".";
                display.textContent=`${num2}`;
            }else{
            num2=num2+".";
            display.textContent=`${num2}`;
            console.log(num2);
            }}
}})
let ac = document.querySelector("#AC");
ac.addEventListener("click", ()=>{
    if(operator===undefined){
        num1=num1.slice(0, -1);
        if(num1===""){
            display.textContent=`0`;
        }else{
        display.textContent=`${num1}`;
    }
        console.log(num1);}else{
            num2=num2.slice(0, -1); 
            if(num2===""){
                display.textContent=`0`;
            }else{
            display.textContent=`${num2}`;
            }
            console.log(num2)
            
        }
})
let badd = document.querySelector("#badd");;
badd.addEventListener("click",()=>{operator="+";
    console.log(operator);
})
let bsubs = document.querySelector("#bsubstract");;
bsubs.addEventListener("click",()=>{operator="-";
    console.log(operator);
})
let bmul = document.querySelector("#bmultiply");;
bmul.addEventListener("click",()=>{operator="*";
    console.log(operator);
})
let bdivid = document.querySelector("#bdivide");;
bdivid.addEventListener("click",()=>{operator="/";
    console.log(operator);
})
let display = document.querySelector("#display-div");
display.textContent=`${num1}`;
let equal = document.querySelector("#bequal");
equal.addEventListener("click",()=>{
    if(num2!==''){
    num1=Number(num1);
    num2=Number(num2);
    num1=operate(operator,num1,num2).toString();
    num2="";
    operator=undefined;
    if (num1==="0"){
        num1="";
        display.textContent="0"
    }else{
    display.textContent=`${num1}`;}
    }
})
display.textContent=`0`;
