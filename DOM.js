//alert("Java script connected");
//document.body.style.background='white'


//Five dom manupulation method:-


//document.getElementById("id")
//document.getElementsByClassName("class")
//document.getElementsByTagName("tag")
//document.querySelectorAll("")
//document.querySelector("")



function add ()
{
let value1=parseInt(document.getElementById("v1").value)

let value2= parseInt(document.getElementById("v2").value)

let result= value1+value2
document.getElementById("output").innerHTML= result
}




function subtract ()
{
let value1=parseInt(document.getElementById("v1").value)

let value2= parseInt(document.getElementById("v2").value)

let result= value1-value2
document.getElementById("output").innerHTML= result
}



function multiply ()
{
let value1=parseInt(document.getElementById("v1").value)

let value2= parseInt(document.getElementById("v2").value)

let result= value1*value2
document.getElementById("output").innerHTML= result
}








function divide ()
{
let value1=parseInt(document.getElementById("v1").value)

let value2= parseInt(document.getElementById("v2").value)

let result= value1/value2
document.getElementById("output").innerHTML= result
}
