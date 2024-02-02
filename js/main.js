const buttons = document.getElementsByClassName('accordion-button');

var i;

for (i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        const text = this.nextElementSibling;
        const plusIcon = this.querySelector('.icon-plus')
        const minusIcon = this.querySelector('.icon-minus')
        
        if (text.style.maxHeight) {
            plusIcon.style.display = 'block';
            minusIcon.style.display = 'none';
            text.style.maxHeight = null;
        }
        else {
            plusIcon.style.display = 'none';
            minusIcon.style.display = 'block';
            text.style.maxHeight = text.scrollHeight + 'px';
        }
    })
}