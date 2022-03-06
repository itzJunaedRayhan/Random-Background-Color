let changeBG = document.getElementById("changeBG");

//  Random Background color Change Function:
function backgroundChage () {
    let wrapper = document.querySelector(".wrapper");
    wrapper.style.backgroundColor = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;  
}

//  onclick event with addEventListener:
changeBG.addEventListener("click", backgroundChage)