const mySearch = document.getElementById("mySearch");

let input, filter, menuList, itemsList, linkList;

mySearch.addEventListener("keyup", () => {
    filter = mySearch.value.toUpperCase();

    menuList = document.getElementById("myMenu");
    itemsList = menuList.getElementsByTagName("li");

    for (let i = 0; i < itemsList.length; i++) {
        linkList = itemsList[i].getElementsByTagName("a")[0];

        console.log(linkList);

        if (linkList.innerHTML.toUpperCase().indexOf(filter) > -1) {
            itemsList[i].style.display = "";
        } else {
            itemsList[i].style.display = "none";
        }
    }
});
