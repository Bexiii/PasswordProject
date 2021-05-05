
let Hw=1;
let point=0;
let Pws=1;

let x = document.getElementsByClassName("knapper")//[x] 
console.log(x)

for (var i = 0; i < x.length; i++) {
    console.log("et eller andet")
    x[i].addEventListener("click",function(){

    console.log(this.dataset.index)
        if(this.dataset.index=="true"){
            point+=1
            console.log(point)
         };
         document.getElementById("pws"+Pws).style.display="none"
         document.getElementById("HW"+Hw).style.display="block"


    })


}


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