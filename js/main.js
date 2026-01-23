var items = document.querySelectorAll('#content .col-content .sub-content .title .background');

function mobileBackgroundItem() {
    for(let i = 0; i < items.length; i++){
        if(i % 2 === 0) {
            items[i].classList.add('background-2n-1');
        }else {
            items[i].classList.add('background-2n');
        }
    }
}

mobileBackgroundItem();