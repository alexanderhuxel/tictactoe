let fields = [];

let currentshape = "cross";

function fillshape(id){
fields[id] = currentshape;
console.log(fields); 
draw();

if (currentshape == "cross"){
    currentshape = "circle";}else{
        currentshape ="cross";
    }
}

function draw(){
    for (let i = 0; i< fields.length; i++){
     if (fields[i] == "circle"){
         document.getElementById("cross-" + i).classList.remove("d-none");
     }
     if (fields[i] == "cross"){
        document.getElementById("circle-" + i).classList.remove("d-none");

    
}}}