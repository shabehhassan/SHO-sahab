const inputBox = document.getElementById('inp-box')
const list = document.getElementById('list')

function addTask(){
    if(inputBox.value === ''){
        alert("you must write something!")
    }
    else{
        let li= document.createElement("li");
        li.innerHTML = inputBox.value;
        list.appendChild(li);
    }
    inputBox.value = "";
};



var icon = document.getElementById("light")
icon.onclick = function(){
    document.body.classList.toggle("light-theme");
    if(document.body.classList.contains("light-theme")){
        icon.src="light.png";
    }
    else{
        icon.src="dark.png";
    }
}