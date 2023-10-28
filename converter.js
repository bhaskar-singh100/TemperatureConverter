console.log("Script Working");
let ctof = document.getElementById('ctof');
let ftoc = document.getElementById('ftoc');
let ktof = document.getElementById('ktof');
let ftok = document.getElementById('ftok');
let ktoc = document.getElementById('ktoc');
let ctok = document.getElementById('ctok');
function ctoF(temp){
    return ((temp * 9/5) + 32);
}
function ftoC(temp){
    return (temp - 32) * (5/9);
}
function ktoF(temp){
    return ((temp - 273.15) * (9/5) + 32);
}
function ftoK(temp){
    return ((temp - 32) * (5/9)) + 273.15;
}
function ktoC(temp){
    return (temp - 273.15);
}
function ctoK(temp){
    return (temp + 273.15);
}
var mybutton = document.getElementById('convert');
mybutton.onclick=function(){
    let val = document.getElementById('value').value;
    let ans;
    novalue.innerHTML="";
    nounit.innerHTML="";

    if(val==''){
        novalue.innerHTML = "*must provide a value";
    }
    val = Number(val);

    if(ctof.checked){
        ans = ctoF(val).toLocaleString(undefined,{style: 'unit',unit: 'fahrenheit',minimumFractionDigits:2,maximumFractionDigits:2})
    }
    else if(ftoc.checked){
        ans = ftoC(val).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2})+ '&#8451';
    }
    else if(ktof.checked){
        ans = ktoF(val).toLocaleString(undefined,{style: 'unit',unit: 'fahrenheit',minimumFractionDigits:2,maximumFractionDigits:2});
    }
    else if(ftok.checked){
        ans = ftoK(val).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2})+ ' K';
    }
    else if(ktoc.checked){
        ans = ktoC(val).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2}) + '&#8451';
    }
    else if(ctok.checked){
        ans = ctoK(val).toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2})+' K';
    }
    else{
        nounit.innerHTML = "*must select a unit for conversion";
    }
    if(ans == undefined){
        result.innerHTML = "";
    }
    else{
        result.innerHTML = ans;
    }
}
