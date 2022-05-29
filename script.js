const logo=document.getElementsByTagName('h1')[0]
const span=document.getElementsByTagName('span')
var randomColor = Math.floor(Math.random()*16777215).toString(16);

logo.addEventListener('click',function(){
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.getElementsByTagName('h1')[0].style.color='#'+randomColor
})

const changeColor=(item)=>{
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    item.style.color='#'+randomColor
}
for (i=0;i<span.length;i++){
    span[i].addEventListener('click',function(element){
        var randomColor = Math.floor(Math.random()*16777215).toString(16);
        element.target.style.color='#'+randomColor 
    })
}


