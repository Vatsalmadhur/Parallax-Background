const leftg = document.getElementById("left-gate-img");
const rightg = document.getElementById("right-gate-img");  
const leftT =document.getElementById("left-tree-img");
const rightT =document.getElementById("right-tree-img");
const ground = document.getElementById("ground-img") ;
const grass = document.getElementById("grass-img") ;
const text = document.getElementById("text") ;





window.addEventListener("scroll", function () {
    var valueY = this.window.scrollY;
    leftg.style.left =valueY * 0.6 +"px";
    rightg.style.right =valueY * 0.6 +"px";
    leftT.style.left = -valueY*0.9 +"px"
    rightT.style.right = -valueY*0.9 +"px"
    text.style.marginTop = valueY*1.5 +"px"
})

   
