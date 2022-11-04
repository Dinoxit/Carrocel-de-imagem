var cont=3

function avanca(){
  cont=cont+1
  if(cont>8){
    cont=8;
  }
  document.getElementById("m3").src="m"+cont+".png"
}
  
  
function volta(){
  cont=cont-1
  if(cont<3){
    cont=3;
  }
  document.getElementById("m3").src="m"+cont+".png"

}

function inicio(){
  cont=3
document.getElementById("m3").src="m3.png"
  }