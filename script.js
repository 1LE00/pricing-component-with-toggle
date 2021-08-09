const checkbox = document.getElementById("check");

checkbox.addEventListener("click", function () {
    const basic = document.getElementsByClassName("basic")[0];

    const professional = document.getElementsByClassName("professional")[0];

    const master = document.getElementsByClassName("master")[0];

    checkbox.classList.toggle("size");

    if(checkbox.className == "size"){
        
    basic.innerHTML ="<h1><span>&dollar;</span>19.99</h1>";

    professional.innerHTML ="<h1><span>&dollar;</span>24.99</h1>";

    master.innerHTML ="<h1><span>&dollar;</span>39.99</h1>";
    }
    else{
    basic.innerHTML ="<h1><span>&dollar;</span>199.99</h1>";

    professional.innerHTML ="<h1><span>&dollar;</span>249.99</h1>";

    master.innerHTML ="<h1><span>&dollar;</span>399.99</h1>";
    }
});
