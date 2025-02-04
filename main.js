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

//header 영역 동적 스타일 적용
const headerE1 = document.querySelector("header");
window.addEventListener('scroll', function(){
    this.requestAnimationFrame(scrollCheck);
});

function scrollCheck(){
    let browseScrollY = window.scrollY ? window.scrollY : window.pageYOffset;
    if(browseScrollY > 0){ //if문을 이용해 active클래스를 추가하거나 삭제.
        headerE1.classList.add("active");
    }else{
        headerE1.classList.remove("active");
    }
}

//부드러운 이동 animation 구현
const animationMove = function(selector){
    const targetE1 = document.querySelector(selector);
    const browserScrollY = window.pageYOffset;
    const targetScrollY = targetE1.getBoundingClientRect().top + browserScrollY;
    window.scrollTo({ top:targetScrollY, behavior:'smooth'});
};

//스크롤 이벤트 연결
const scrollMoveE1 = document.querySelectorAll("[data-animation-scroll='true']");
for(let i = 0; i <scrollMoveE1.length; i++){
    scrollMoveE1[i].addEventListener('click', function(e){
        const target = this.dataset.target;
        animationMove(target);
    });
}

//Create
function setItem(){
    const itemInput = document.getElementById("create");
    const content = itemInput.value.trim();

    if (content === ""){
        alert("Please enter your message.")
        return;
    }
    const newPost = document.createElement("li");
    newPost.classList.add("post-item"); //post-item 클래스를 추가.

    const textarea = document.createElement("textarea");
    textarea.value = content;
    textarea.readOnly = true;
    
    //Update
    const updateButton = document.createElement("button");
    updateButton.innerText = "Edit";
    updateButton.onclick = function(){
        if(textarea.readOnly){
            textarea.readOnly = false;
            updateButton.innerText = "Save";
        } else{
            textarea.readOnly = true;
            updateButton.innerText = "Edit";
        }
    };

    //Delete
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.onclick = function(){
        newPost.remove();
    }

    const buttonbox = document.createElement("div");
    buttonbox.classList.add("buttonboxes");
    buttonbox.appendChild(updateButton);
    buttonbox.appendChild(deleteButton);

    newPost.appendChild(textarea);
    newPost.appendChild(buttonbox);
    //위 두 요소들은 형제요소가 된다.

    document.getElementById("my-post").appendChild(newPost);

    itemInput.value = "";

    newPost.scrollIntoView({behavior: "smooth", block: "end"});
}

