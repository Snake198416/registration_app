document.querySelector('#logout').onclick = function () {
    let c = document.cookie;
    console.log(c);
    let d = new Date();
    d.setTime(d.getTime() - (10 * 60 * 1000)); //Здесь мы написали время жизни куков 10 умножить на 60 секунд (получим 10 минут) умножить на 1000 милисекунд (1 секунда) (получим те же 10 минут)
    let expires = d.toUTCString();
    document.cookie = `${c}; expires=${expires}; path=/`;
    location.reload();
};