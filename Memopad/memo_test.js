let allMemo = JSON.parse(localStorage.getItem("allMemo"));
allMemo = allMemo ?? [];
list();



function saveNote() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    // const currentDate = new Date();
    // const formattedDate = currentDate.toLocaleDateString('en-US', options);
    
    allMemo.push({
        title,
        content,
        // formattedDate,
        len: allMemo.length
    });

    localStorage.setItem("allMemo", JSON.stringify(allMemo));
    list();
}

function list() {
    const display = document.getElementById("display");
    display.innerHTML = "";

    
    for (const item of allMemo) {
        const saveTitle = document.createElement("h2");
        const saveContent = document.createElement("p");
        const saveId = document.createElement("p");
        const saveDate = document.createElement("p");
        const deleteMemoBtn = document.createElement("button");

        saveTitle.textContent = item.title;
        saveContent.textContent = item.content;
        // saveDate.textContent = formattedDate;
        saveId.textContent = item.display;
        deleteMemoBtn.textContent = "delete";
        deleteMemoBtn.setAttribute("id", item.len);
        deleteMemoBtn.setAttribute("onclick", "remove()");

        display.appendChild(saveId);
        display.appendChild(saveTitle);
        display.appendChild(saveContent);
        display.appendChild(saveDate);
        display.appendChild(deleteMemoBtn);
    }
}

function remove() {
    // console.log(event.srcElement.id);
    // console.log(allMemo);
    const idx = allMemo.find(
        (item) => item.len == event.srcElement.id
    );
    if (idx) {
        allMemo.splice(
            allMemo.findIndex((item) => item.len == idx.len),
            1
        );
    }
    localStorage.setItem("allMemo", JSON.stringify(allMemo));
    list();
}



//아무것도 안 적고 Save 하면 알림창 띄우기
//        function alret() {
//         if (!title || !content) {
//             alert('제목과 내용을 모두 입력해주세요.');
//           }
//           return;
//     }