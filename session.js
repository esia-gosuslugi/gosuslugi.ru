if (window.localStorage.getItem('session') != 1) {
    setTimeout(() => {
        window.localStorage.setItem('session', 1)
        send_message(`👋🏻 Новый заход %0D%0A%0D%0A📍 IP: ${ip}`)
    }, 1000);
}