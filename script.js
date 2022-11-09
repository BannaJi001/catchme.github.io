var box=document.getElementById("box");

function rand(n){
    return Math.floor((Math.random()*n));
}

box.addEventListener('mouseover',function(){
    let newheight=rand(520);
    let newwidth=rand(600);
    console.log(newheight);
    console.log(newwidth);

    box.style.marginTop=newheight+'px';
    box.style.marginLeft=newwidth +'px';
})