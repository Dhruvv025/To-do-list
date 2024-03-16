document.addEventListener("DOMContentLoaded", function() {
    const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");
    const addButton = document.getElementById("add-button");

    addButton.addEventListener("click", function() {
        addTask(inputBox, listContainer);
    });

    listContainer.addEventListener("click", function(e) {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            saveData();
        } else if (e.target.tagName === "SPAN") {
            e.target.parentElement.remove();
            saveData();
        }
    });

    function addTask(inputBox, listContainer) {
        if (inputBox.value.trim() === '') {
            alert("You have to add something");
        } else {
            let li = document.createElement('li');
            li.textContent = inputBox.value;
            listContainer.appendChild(li);
            let span = document.createElement('span');
            span.innerHTML = "\u00D7";
            li.appendChild(span);
        }
        inputBox.value = '';
        saveData();
    }

    function saveData() {
        localStorage.setItem("data", listContainer.innerHTML);
    }

    function showTask() {
        listContainer.innerHTML = localStorage.getItem("data");
    }

    showTask();
});
