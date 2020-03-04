document.addEventListener('DOMContentLoaded', function() {
    let elems = document.querySelectorAll('.datepicker');
    let instances = M.Datepicker.init(elems, {
        'format' : 'yyyy-mm-dd'
    });
});

document.querySelectorAll('.modal-show').forEach((el) => {
    el.onclick = showModal;
});

document.querySelectorAll('.modal-project-close').forEach((el) => {
    //закрываем окно на кнопке Х
    el.onclick = closeModal;
});

document.querySelectorAll('.modal-wrap').forEach((el) => {
    //закрываем окно по клику вне окна
    el.onclick = closeModal;
});

function showModal() {
    let modalId = this.dataset.modal;
    document.querySelector(modalId).parentElement.classList.remove('hide');
    document.querySelector(modalId).classList.remove('hide');
    document.onkeydown = function (event) {
        if (event.keyCode === 27) {
            document.querySelectorAll('.modal-wrap').forEach(function (element) {
                element.classList.add('hide');
                element.children[0].classList.add('hide');
                document.onkeydown = null;
            });
        }
    }
}

function closeModal() {
    document.querySelectorAll('.modal-wrap').forEach((el) => {
        el.classList.add('hide');
    });
    document.onkeydown = null;
}

document.querySelector('#log-in .modal-project').onclick = function (e) {
    e.stopPropagation()
};

document.querySelector('#sign-up .modal-project').onclick = function (e) {
    e.stopPropagation()
};

document.querySelector('.read-rules').onclick = function () {
    document.querySelector('.form-slider').style.marginLeft = '-345px'
};

document.querySelectorAll('.read-rules-back').forEach((el) => {
    el.onclick = () => {
        document.querySelector('.form-slider').style.marginLeft = '0px'
    }
});

document.querySelector('#agree-rules').onchange = function () {
    if (this.checked) {
        document.querySelector('#signup-submit').classList.remove('disabled');
    } else {
        document.querySelector('#signup-submit').classList.add('disabled');
    }
};































