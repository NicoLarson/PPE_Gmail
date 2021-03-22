document.addEventListener("DOMContentLoaded", () => {
    let menuList = document.querySelectorAll("header nav ul li a");

    if (document.location == 'http://localhost:8080/index.php?action=logIn') {
        menuList[1].classList.add('clickDark')
    } else if (document.location == 'http://localhost:8080/index.php?action=signIn#footer') {
        menuList[2].classList.add("clickDark")
    }

    for (let i = 0; i < menuList.length; i++) {
        menuList[i].addEventListener("click", () => {
            for (let i = 0; i < menuList.length; i++) {
                menuList[i].classList.remove("clickDark");
                menuList[i].classList.add("clickLight");
            }
            menuList[i].classList.remove("clickLight");
            menuList[i].classList.add("clickDark");
        });
    }

menuList[2].addEventListener('click',()=>{
    sessionStorage.clear();
})


});





