const inputBox = document.getElementById("input");
const addBtn = document.getElementById("button");
const addList = document.getElementById("newList");

addBtn.addEventListener("click", function() {
    const list = document.createElement("li");

    list.innerText = inputBox.value;
    addList.appendChild(list);

    inputBox.value = "";

    list.addEventListener("click", function() {
        list.style.textDecoration = "line-through";
    })

    list.addEventListener("dblclick", function() {
        addList.removeChild(list);
    })
})
