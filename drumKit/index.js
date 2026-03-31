var path,file,audio;
var btns = document.getElementsByTagName("button");
for(var i = 0;i<btns.length;i++)
{
    btns[i].addEventListener("click",function(){
        file = this.innerHTML;
        handleClick();
    });
}

function handleClick()
{
    path = "tile-"+file+ ".mp3";
    audio = new Audio(path);
    audio.play();
    var tile = document.getElementsByClassName(file);
    tile[0].classList.add("pressed");
    setTimeout(function(){
        tile[0].classList.remove("pressed")
    },200);
}

document.addEventListener("keypress",function(event){
    file = event.key;
    handleClick();
});
