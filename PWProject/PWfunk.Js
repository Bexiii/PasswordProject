
let Hw=1;
let point=0;
let Pws=1;

let x = document.getElementsByClassName("knapper")//[x] 
let z = document.getElementsByClassName("NextKnap")

for (var i = 0; i < x.length; i++) {
    console.log("et eller andet")
    x[i].addEventListener("click",function(){

    console.log(this.dataset.index)
        if(this.dataset.index=="true"){
            point+=1
            console.log(point)
         };
            document.getElementById("pws"+Pws).style.display="None"
             document.getElementById("HW"+Hw).style.display="Block"
             Pws++;

    })

}
for (var l =0; l <z.length; l++) {
    console.log("glad")
    z[l].addEventListener("click",function(){
        document.getElementById("pws"+Pws).style.display="block"
        document.getElementById("HW"+Hw).style.display="none"
        hw++;
        

    })



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