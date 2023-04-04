let _hello =document.getElementById('hello');
let content = "안녕하세요!"
let i = 0;
let _myinfo = document.getElementById('myinfo');
function typing(){
    if(i<content.length){
        let txt = content.charAt(i);
        _hello.innerHTML += txt;
        i++
    }    
    // }else{
    //     i  = 0;
    //     _hello.innerHTML = ""
    //     txt = ''
    // }
    
}

setInterval(typing,400);

// 헤더버튼 클릭시 해당 위치로 이동 링크 걸어주기

let _resume = document.getElementById('Resume')
_resume.addEventListener('click',function(e){
    e.preventDefault();
    window.location.href = '#firstanchor';
})
let _projects = document.getElementById('Projects')
_projects.addEventListener('click',function(e){
    e.preventDefault();
    window.location.href = '#resumediv2';
})
let _contact = document.getElementById('Contact')
_contact.addEventListener('click',function(e){
    e.preventDefault();
    window.location.href = '#footeranchor';
})



// 동그라미 버튼 클릭시 해당 위치로 이동

let _circle1 = document.getElementById('circle1')
_circle1.addEventListener('click',function(e){
    e.preventDefault();
    window.location.href = '#firstanchor';
})
let _circle2 = document.getElementById('circle2')
_circle2.addEventListener('click',function(e){
    e.preventDefault();
    window.location.href = '#resumediv2';
})
let _circle3 = document.getElementById('circle3')
_circle3.addEventListener('click',function(e){
    e.preventDefault();
    window.location.href = '#footeranchor';
})

// 깃 아이콘 블로그 아이콘 링크 이동
let _giticon = document.getElementById('giticon');
let _blogicon = document.getElementById('blogicon');

_giticon.addEventListener('click',function(e){
    e.preventDefault();
    window.location.href = "https://github.com/Edie-MinwooPark"
})
_blogicon.addEventListener('click',function(e){
    e.preventDefault();
    window.location.href = "https://velog.io/@alsdn8055"
})

//헤더 고정효과 넣어주기

let posY = document.querySelector('.main-mypic').getBoundingClientRect().bottom + window.pageYOffset;
let posYtop = document.querySelector('.main-mypic').getBoundingClientRect().top + window.pageYOffset;
let _education = document.querySelector('#work01').getBoundingClientRect().top + window.pageYOffset;
let _skills = document.querySelector('#work02').getBoundingClientRect().top + window.pageYOffset;
let __projects = document.querySelector('#work03').getBoundingClientRect().top + window.pageYOffset;
// 스크롤시 진행되는 함수
window.onscroll = function(){
    if(posY<scrollY){
        document.querySelector('.header').classList.add('is-active');
    }else if(posY>scrollY){
        document.querySelector('.header').classList.remove('is-active');
    }
    if(scrollY>=posYtop){
        document.querySelector('#firstp').style.animation = 'slide 3s'
    }else if(scrollY<posYtop){
        document.querySelector('#firstp').style.animation = 'slidereverse 3s'
    }
    if(scrollY>=_education-30){
        document.querySelector('#secondp').style.animation = 'slide 3s'
    }else if(scrollY<_education-30){
        document.querySelector('#secondp').style.animation = 'slidereverse 3s'
    }
    if(scrollY>=_skills-30){
        document.querySelector('#icons').style.animation = 'slide 3s'
    }else if(scrollY<_skills-30){
        document.querySelector('#icons').style.animation = 'slidereverse 3s'
    }
    if(scrollY>=__projects-30){
        document.querySelector('#pjinfo').style.animation = 'slide 3s'
    }else if(scrollY<__projects-30){
        document.querySelector('#pjinfo').style.animation = 'slidereverse 3s'
    }
}

// 내이름 클릭시 사이트 초기화

let _headerstartname = document.querySelector('.header-start-name');
_headerstartname.addEventListener('click',function(){
    window.location.href = "./index.html"
})


