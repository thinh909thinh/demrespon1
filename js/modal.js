var thinh=document.querySelector('.close')
var deptrai=document.querySelector('.modal-all')
thinh.addEventListener("click",function(){
    deptrai.classList.add('no-close')
})
deptrai.addEventListener("click",function(e){
    if(e.target===e.currentTarget){
    deptrai.classList.add('no-close')
    }
})
// zola
var zolamodal=document.querySelector(".zola-modal")
var zalo=document.querySelector(".zalo")
var xzalo=document.querySelector(".x-zalo")

zalo.addEventListener("click",function(){
    zolamodal.classList.remove('no-close')
    zolamodal.classList.toggle('no-close1')
})

xzalo.addEventListener("click",function(){
    zolamodal.classList.add('no-close1')
})