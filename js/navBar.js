document.addEventListener("DOMContentLoaded", () => {
    const menuList = document.querySelectorAll("header nav ul li a");

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
});
