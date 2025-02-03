let target = document.querySelector("#dynamic");

//커서 깜빡임 효과
function blink(){
    target.classList.toggle("active");
}
setInterval(blink, 500);

//문자열 나열
function randomString(){
    let stringArr = ["Do! and then regret.", "Positive power can change my life.", "Better tomorrow than yesterday."];
    let selectString = stringArr[Math.floor(Math.random() * stringArr.length)];
    let selectStringArr = selectString.split("");

    return selectStringArr;
}

function resetTyping(){
    target.textContent = "";
    dynamic(randomString());
}

//텍스트 출력함수
function dynamic(randomArr){
    if(randomArr.length > 0){
        target.textContent += randomArr.shift();
        setTimeout(function(){
            dynamic(randomArr);
        }, 80);
    }else{
        setTimeout(resetTyping, 1000);
    }
}

dynamic(randomString());

//target section으로 이동
function scrollToSection(){
    document.getElementById("target").scrollIntoView({ behavior: "smooth"});
}

//create 기능
function addItem(){
    const itemInput = document.getElementById("create");
    const content = itemInput.value.trim();

    if (content === ""){
        alert("Please enter your message.")
    }
    const newPost = document.createElement("li");
    newPost.classList.add("post-item");

    const textarea = document.createElement("textarea");
    textarea.value = content;
    textarea.readOnly = true;
    
    const editButton = document.createElement("button");
    editButton.innerText = "Edit";
    editButton.onclick = function(){
        if(textarea.readOnly){
            textarea.readOnly = false;
            editButton.innerText = "Save";
        } else{
            textarea.readOnly = true;
            editButton.innerText = "Edit";
        }
    };

    newPost.appendChild(textarea);
    newPost.appendChild(editButton);

    document.getElementById("my-post").appendChild(newPost);

    itemInput.value = "";
}

