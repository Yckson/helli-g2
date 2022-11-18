function hide(id){
    let element = document.getElementById(id);
    if (element.classList.contains('hide') == false){
        element.classList.add('hide');
    }
    else{
        element.classList.remove('hide');
    }
}

function openMenu(){
    hide('menu-bar-background');
    hide('menu-bar');
    document.body.style.overflow = 'hidden';

}

function closeMenu(){
    hide('menu-bar-background');
    hide('menu-bar');
    document.body.style.overflow = 'auto';

}

function openVideo(){
    hide('video-background');
    hide('video');
    document.body.style.overflow = 'hidden';
}

function closeVideo(){
    hide('video-background');
    hide('video');
    document.body.style.overflow = 'auto';
}