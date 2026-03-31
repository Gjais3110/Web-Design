var ply1 = Math.floor(Math.random()*6)+1;
var ply2 = Math.floor(Math.random()*6)+1;

document.querySelector(".img1").setAttribute("src","./dice"+ply1+".png");
document.querySelector(".img2").setAttribute("src","./dice"+ply2+".png");

if(ply1>ply2)
    document.querySelector("h1").textContent = "Player 1 Wins";
else if(ply2>ply1)
    document.querySelector("h1").textContent = "Player 2 Wins";
else
    document.querySelector("h1").textContent = "Match Draw !";