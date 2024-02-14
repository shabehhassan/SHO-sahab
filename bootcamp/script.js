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

const notificationIcon = document.querySelector('.notification');
const notBox = document.querySelector('.notbox');
const cross = document.querySelector('.right-head');

const openNotification = notificationIcon.addEventListener('click', function () {
    notBox.classList.remove('hidden');
})

const closeNotification = cross.addEventListener('click', function(){
    notBox.classList.add('hidden');
})



const exit = document.querySelector('.exit');
exit.addEventListener('click', function(){
    alert(`Are you sure you want to logout?` )
})
