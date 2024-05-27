let title = document.getElementById("title");

title.onmouseover = function () 
{
    title.style.color = "#ff7f71"
    title.innerHTML = "Software Developer"
};

title.onmouseout = function () 
{
    title.style.color = "#fee100"
    title.innerHTML = "Game Programmer";
};