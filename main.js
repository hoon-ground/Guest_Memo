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

