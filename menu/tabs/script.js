let tabButton = document.getElementsByClassName("tab--select");
let tabContent = document.getElementsByClassName("tabcontent");

for (let i = 0; i < tabButton.length; i++) {
    tabButton[i].addEventListener("click", () => {
        if (tabContent[i].style.display === "block") {
            tabContent[i].style.display = "none";
        } else {
            tabContent[i].style.display = "block";
        }

        for (j = 0; j < tabContent.length; j++) {
            if (j !== i) {
                tabContent[j].style.display = "none";
            }
        }
    });
}
