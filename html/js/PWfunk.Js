
let Hw=1;
let point=0;
let Pws=1;

let x = document.getElementsByClassName("knapper")//[x] 
let z = document.getElementsByClassName("NextKnap")
let y = Document.getElementsByClassName("knap")

for (var i = 0; i < x.length; i++) {
    console.log("SadBex")
    x[i].addEventListener("click",function(){

    console.log(this.dataset.index)
        if(this.dataset.index=="true"){
            point+=1
            console.log(point)
         };
            document.getElementById("pws"+Pws).style.display="none";
             document.getElementById("HW"+Hw).style.display="block";
             Pws++;

    })

}
for (var l =0; l <z.length; l++) {
    console.log("HappyBex")
    z[l].addEventListener("click",function(){
            document.getElementById("pws"+Pws).style.display="Block";
            document.getElementById("HW"+Hw).style.display="none";
            Hw++;
        

    });

};
/*
for(var m =0; m <y.length; m++) {
    y[m].addEventListener("click", function(){ if(point > 8){}


        }); 

}





/*document.getElementById("pws"+Pw).style.display = "block";
document.getElementById("hw"+Hw).style.display = "block";
Hw++;
Pw++;

/*let X = document.getElementsByClass("NextKnap")
addEventListener("click")
document.getElementsByClassName("Pws"+Pws).style.display="none"
document.getElementsByClassName("HW"+Hw).style.display="block"






/* blå = var orange = string /*
x.forEach(element => {
    element.addEventListener("click",function(){
        console.log("hej")
    })
    });




/*for(let;0;(X.length.if ++)
addEventListener=("click"())
    

 
{console(this )}
if(this.DataTransferItem.vale==true) {point=+1};

Data.gettingbyid("Pws"+Pws).style.display="none"
document.getElementById("Hw"+Hw).style.display="block"} */