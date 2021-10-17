var counter = 0;

document.addEventListener("DOMContentLoaded",function() {
    // 여기 있는 내용을 실행하는 것 

    var sb= document.querySelector(".joker") //쌍따옴표 따옴표 동일함
    //querySelector는 선택하는 의미, .joker 를 선택함
    //변수 이름은 최대한 의미를 알 수 있도록 자세히
    sb.addEventListener("click",function(){
        counter += 1;
        if(counter >= 1){
            alert("사랑해♡");
        }
    })

});