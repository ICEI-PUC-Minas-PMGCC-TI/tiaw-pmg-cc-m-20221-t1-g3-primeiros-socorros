let estado = document.getElementById("estado");
let sp = document.getElementById("SP");
let rj = document.getElementById("RJ");
let mg = document.getElementById("MG");
let es = document.getElementById("ES");

function select(){ 
    if(estado.value == 'SP'){
        let div = rj;
        div.style.display = "none";
        div = mg ;
        div.style.display = "none";
        div = es;
        div.style.display = "none";
        div = sp;
        div.style.display = "flex";
    } else if(estado.value == "RJ"){
        let div = rj;
        div.style.display = "flex";
        div = mg ;
        div.style.display = "none";
        div = es;
        div.style.display = "none";
        div = sp;
        div.style.display = "none";
    } else if(estado.value == "MG"){
        let div = rj;
        div.style.display = "none";
        div = mg ;
        div.style.display = "flex";
        div = es;
        div.style.display = "none";
        div = sp;
        div.style.display = "none";
    } else if(estado.value == "ES"){
        let div = rj;
        div.style.display = "none";
        div = mg ;
        div.style.display = "none";
        div = es;
        div.style.display = "flex";
        div = sp;
        div.style.display = "none";
    } else{
        let div = rj;
        div.style.display = "none";
        div = mg ;
        div.style.display = "none";
        div = es;
        div.style.display = "none";
        div = sp;
        div.style.display = "none";
    };
};