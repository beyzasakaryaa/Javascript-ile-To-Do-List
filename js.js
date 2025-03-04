function newElement() {
    let inputValue = document.getElementById("task").value.trim();
    let list = document.getElementById("list");
    
    if (inputValue === "") {
        showToast("error");
        return;
    }
    
    let li = document.createElement("li");
    li.textContent = inputValue;
    li.onclick = function () {
        this.classList.toggle("checked");
    };
    
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7"; 
    closeButton.className = "close";
    closeButton.onclick = function (event) {
        event.stopPropagation(); 
        li.remove();
    };
    
    li.appendChild(closeButton);
    list.appendChild(li);
    document.getElementById("task").value = "";
    showToast("success");
}

function showToast(type) {
    let toast = document.querySelector(".toast." + type);
    $(toast).toast("show");
}

document.querySelectorAll("#list li").forEach(li => {
    let closeButton = document.createElement("span");
    closeButton.textContent = "\u00D7";
    closeButton.className = "close";
    closeButton.onclick = function (event) {
        event.stopPropagation();
        li.remove();
    };
    li.appendChild(closeButton);
    
    li.onclick = function () {
        this.classList.toggle("checked");
    };
});
