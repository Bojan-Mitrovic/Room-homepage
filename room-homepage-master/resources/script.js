// mobile navbar elements
let active = document.getElementById('active');
let show = document.getElementById('show');
let close = document.getElementById('close');
let index = 0;


// functions

// change theme
function changeTheme(i) {
    index += i;
    let texts = document.getElementsByClassName("title");
    let par = document.getElementsByClassName("parText");
    let img = document.getElementsByClassName("imgMain");
    for (i = 0; i < 3; i++) {
        img[i].style.display = 'none';
        par[i].style.display = 'none';
        texts[i].style.display = 'none';
    }
    if (index > 2) {
        index = 0;
    }
    if (index < 0) {
        index = 2;
    }
    img[index].style.display = 'block';
    par[index].style.display = 'block';
    texts[index].style.display = 'block';
}



// mobile navbar
function showBar() {
    active.style.display = 'flex';
    close.style.display = 'flex';
    show.style.display = 'none';
}

function hideBar() {
    close.style.display = 'none';
    active.style.display = 'none';
    show.style.display = 'flex';
}

//listeners
show.addEventListener('click', showBar);
close.addEventListener('click', hideBar);