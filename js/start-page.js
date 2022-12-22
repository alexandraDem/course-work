function level() {

    login();
    // startGame();
}

function login(){
    event.preventDefault();
    window.location.href='login-page.html'; 
   
    console.log(123);
    var username = document.getElementById().value;
    console.log(username);
    localStorage.setItem('test', 'te');
}

