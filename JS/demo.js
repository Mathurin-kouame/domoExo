// var writ = document.getElementById("textInput");
// var aff = document.getElementById("displayDiv");
// const select = document.querySelector("#color-select");
// const div =document.querySelector("#colored-div")

// writ.addEventListener("textInput",function(e){
//     if(e.target.value =="blue"){
//         aff.style.backgroundColor= 'blue';
//     }
//     else if(e.target.value =="rouge"){
//         aff.style.backgroundColor= 'red'; 
//     }
//     else if(e.target.value =="vert"){
//         aff.style.backgroundColor = 'green'; 
//     }
//     else if(e.target.value =="noir"){
//         aff.style.backgroundColor = 'black'; 
//     }
//     else if(e.target.value =="jaune"){
//         aff.style.backgroundColor = 'yellow'; 
//     }
//     else if(e.target.value == "gris"){
//         aff.style.backgroundColor = 'grey'; 
//     }
// })

// select.addEventListener("change",function() {
//     div.style.backgroundColor = this.value;
// });

var tab =['red','green','yellow','orange','black'];
var changeDiv = document.getElementById("taille");
var maRange = document.getElementById("range");

// setInterval(function(){
//     {
//         var monInterval = Math.floor((Math.random()*200)+100);
//         var maColor = Math.floor((Math.random()*tab.length));
//         console.log(tab[maColor]);
//         changeDiv.style.width = monInterval + "px";
//         changeDiv.style.backgroundColor = tab[maColor];
//         changeDiv.style.height = monInterval + "px";
       

//     }
   
// },500);
// let Inter = null;
// maRange.addEventListener("change", function(e){
//         clearInterval(Inter);
//         Inter = setInterval(function(){
//         var monInterval = Math.floor((Math.random()*200)+100);
//         var maColor = Math.floor((Math.random()*tab.length));
//         console.log(tab[maColor]);
//         changeDiv.style.width = monInterval + "px";
//         changeDiv.style.backgroundColor = tab[maColor];
//         changeDiv.style.height = monInterval + "px";
       
    
//     },parseInt(e.target.value)*100);
// })

