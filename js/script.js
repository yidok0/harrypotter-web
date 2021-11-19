//모바일 gnb메뉴 등장/사라짐
const Mbtn = document.querySelector('.m-btn')
const gnbX = document.querySelector(".close")
const Mgnb = document.querySelector('#m-gnb')

Mbtn.addEventListener("click",()=>{
    Mgnb.style.left='0%';
})
gnbX.addEventListener("click",()=>{
    Mgnb.style.left='-100%';
})

// 서브메뉴
const gnbList = document.querySelectorAll(".gnb > li")
const depth2 = document.querySelectorAll(".depth2")

for (let a = 0; a < gnbList.length; a++) {
    gnbList[a].addEventListener("mouseover",()=>{
        depth2[a].style.display="block"
    });
    gnbList[a].addEventListener("mouseout",()=>{
        depth2[a].style.display="none"
    });
}

//슬라이드
const view = document.querySelector(".view");
const leftBtn = document.querySelector(".leftBtn");
const rightBtn = document.querySelector(".rightBtn");
const circle = document.querySelectorAll(".circle li")

const circleLength = circle.length;

let listNumber = 0;

leftBtn.addEventListener("click",()=>{
    if (listNumber == 0) {
        listNumber = circleLength - 1;
    }
    else {
        listNumber--;
    }
    for (let a = 0; a < circleLength; a++) {
        circle[a].classList.remove("on");
    }
    circle[listNumber].classList.add("on");

    view.style.marginLeft = -100 * listNumber +"%";
});
rightBtn.addEventListener("click",()=>{
    if (listNumber == circleLength - 1) {
        listNumber = 0;
    }
    else {
        listNumber++;
    }
    for(let a = 0; a < circleLength; a++) {
        circle[a].classList.remove("on");
    }
    circle[listNumber].classList.add("on");

    view.style.marginLeft = -100 * listNumber +"%"
});
for (let a = 0 ; a < circleLength; a++) {
    circle[a].addEventListener("click",(e)=>{
        for (let b = 0; b < circleLength; b++) {
            circle[b].classList.remove("on");
        }
        e.preventDefault();
        e.currentTarget.classList.add("on");
        listNumber = e.currentTarget.getAttribute("data-index");
        view.style.marginLeft = -100 * listNumber +"%";
    });
}
    //자동실행
const stopBtn = document.querySelector(".stopBtn");
const playBtn = document.querySelector(".playBtn");

let autoSlide = setInterval(()=>{
    if(listNumber == circleLength-1) {
        listNumber = 0;
    }
    else {
        listNumber++;
    }

    for (let a = 0; a <circleLength; a++) {
        circle[a].classList.remove("on");
    }
    circle[listNumber].classList.add("on");
    view.style.marginLeft=-100 * listNumber +"%";
},5000);

stopBtn.addEventListener("click",()=>{
    stopBtn.style.display="none";
    playBtn.style.display="block";

    clearInterval(autoSlide);
});
playBtn.addEventListener("click",()=>{
    playBtn.style.display="none";
    stopBtn.style.display="block";

    autoSlide = setInterval(()=>{
        if(listNumber == circleLength-1) {
            listNumber = 0;
        }
        else {
            listNumber++;
        }
    
        for (let a = 0; a <circleLength; a++) {
            circle[a].classList.remove("on");
        }
        circle[listNumber].classList.add("on");
        view.style.marginLeft=-100 * listNumber +"%";
    },4000);
});

//탭메뉴
const btn4 = document.querySelectorAll(".btn4 li");
const contentList = document.querySelectorAll(".contentList > div");

for (let i = 0; i < btn4.length; i++){
    btn4[i].addEventListener("mouseover",(e)=>{
        for (let j=0; j < btn4.length; j++) {
            btn4[j].classList.remove("btnOn");
            contentList[j].style.display="none"
        }
        e.currentTarget.classList.add("btnOn");
        contentList[i].style.display="flex"
    });
    btn4[i].addEventListener("mouseout",(e)=>{
        for (let j=0; j < btn4.length; j++) {
            btn4[j].classList.remove("btnOn");
            contentList[j].style.display="none"
        }
        e.currentTarget.classList.add("btnOn");
        contentList[i].style.display="flex"
    });
};


// 상단으로 이동 버튼
const scroll_ani = document.querySelector(".scroll_ani");
const header = document.querySelector("header");
const logoImg = document.querySelector(".logo img")

window.addEventListener("scroll",()=>{
    let scTop = window.scrollY

    if (scTop > 0) {
        header.classList.add("on");
        logoImg.setAttribute("src","img/f-logo.png");
    }
    else {
        header.classList.remove("on");
        logoImg.setAttribute("src","img/logo.png");
    }

    if (scTop >= 500) {
        scroll_ani.style.display="block";
    }
    else {
        scroll_ani.style.display="none";
    }
});

scroll_ani.addEventListener("click",()=>{
    scroll({
        top:0, left:0, behavior:"smooth"
    });
});


// 모바일 서브메뉴 기능 구현
const MgnbList= document.querySelectorAll(".m-gnb > li");
const Mgnbdepth2 = document.querySelectorAll(".m-gnb .depth2");
const MgnbListRight = document.querySelectorAll(".m-gnb > li .icon .fa-angle-right")
const MgnbListDown = document.querySelectorAll(".m-gnb > li .icon .fa-angle-down")

for (let a = 0; a < MgnbList.length; a++) {
    MgnbList[a].addEventListener("click",()=>{
        if (MgnbList[a].classList.contains("on")) {
            MgnbList[a].classList.remove("on");
            MgnbList[a].style.height
            = MgnbList[a].offsetHeight
            - Mgnbdepth2[a].offsetHeight + "px";

            MgnbListRight[a].style.display="block";
            MgnbListDown[a].style.display="none";
        }
        else {
            const openLIst = document.querySelectorAll(".m-gnb > li.on");

            for (let b = 0; b < openLIst.length; b++) {
                openLIst[b].classList.remove("on");
                openLIst[b].style.height
                = MgnbList[a].offsetHeight + "px";
            }

            for (let b=0;b<MgnbList.length;b++) {
                MgnbListRight[b].style.display="block";
                MgnbListDown[b].style.display="none";
            }


            MgnbList[a].classList.add("on");    
            MgnbList[a].style.height
            = MgnbList[a].offsetHeight
            + Mgnbdepth2[a].offsetHeight + "px";
            MgnbListRight[a].style.display="none";
            MgnbListDown[a].style.display="block";
        }
        
    });
}

