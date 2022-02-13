// DOM Elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus'),
    button_bg = document.getElementById('button_bg');


// Options
const showAmPm = false;

// Show Time
function showTime() {
    //let today = new Date (2020, 06, 10, 19, 00, 00);
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds(),
        day = new Date().toLocaleString('ru', {
            weekday: 'long'
        }),
        date = today.getDate(),
        month = new Date().toLocaleString('ru', {
            month: 'short'
        });

    // Set AM or PM
    const amPm = hour >= 12 ? 'PM' : 'AM';

    // 12hr Format
    if (showAmPm) {
        hour = hour % 12 || 12
    };

    if (min === 0 && sec === 0) {
        setBgGreet()
    };

    // Output Time
    currentDay.innerHTML = `${day}<span>, </span>${date}<span> </span>${month}`;
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;

    setTimeout(showTime, 1000);
}

// Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Random Int value Math.floor(Math.random() * (max - min + 1)) + min
function randomInt(min, max) {
    let val = Math.floor(Math.random() * (max - min + 1)) + min;
    while (val === localStorage.getItem('preValue')) {
        val = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return val;
}


// Set Background and Greeting
function setBgGreet() {
    //let today = new Date (2020, 06, 10, 19, 00, 00);
    let today = new Date(),
        hour = today.getHours();
    if (hour < 6) {
        //Night
        greeting.textContent = 'Good Night, ';
//        document.body.style.color = 'white';
//        document.body.style.textShadow = '0.2rem 0.2rem 0 rgba(0, 0, 0, 0.9)';
        document.body.style.backgroundImage = "url('assets/images/night/" + randomInt(1, 20) + ".jpg')";

    } else if (hour < 12) {
        //Morning
        greeting.textContent = 'Good Morning, ';
        document.body.style.backgroundImage = "url('assets/images/morning/" + randomInt(1, 20) + ".jpg')";
    } else if (hour < 18) {
        //Afternoon
        greeting.textContent = 'Good Afternoon, ';
        document.body.style.backgroundImage = "url('assets/images/day/" + randomInt(1, 20) + ".jpg')";
    } else {
        //Evening
        greeting.textContent = 'Good Evening, ';
//        document.body.style.color = 'white';
//        document.body.style.textShadow = '0.25rem 0.25rem 0 rgba(0, 0, 0, 0.9)';
        document.body.style.backgroundImage = "url('assets/images/evening/" + randomInt(1, 20) + ".jpg')";
    }
}

// Clear Input
function clearInput(e) {
    e.target.innerText = '';
}

// Get Name
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }

}

// Set Name
function setName(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            if (e.target.innerText === '') {
                if (localStorage.getItem('name') === null) {
                    e.target.innerText = '[Enter Name]';
                } else {
                    e.target.innerText = localStorage.getItem('name');
                }
            }
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        if (e.target.innerText === '') {
            if (localStorage.getItem('name') === null) {
                e.target.innerText = '[Enter Name]';
            } else {
                e.target.innerText = localStorage.getItem('name');
            }
        }
        localStorage.setItem('name', e.target.innerText);
    }
}

// Get Focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
}

// Set Focus
function setFocus(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            if (e.target.innerText === '') {
                if (localStorage.getItem('focus') === null) {
                    e.target.innerText = '[Enter Name]';
                } else {
                    e.target.innerText = localStorage.getItem('focus');
                }
            }
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        if (e.target.innerText === '') {
            if (localStorage.getItem('focus') === null) {
                e.target.innerText = '[Enter Name]';
            } else {
                e.target.innerText = localStorage.getItem('focus');
            }
        }
        localStorage.setItem('focus', e.target.innerText);
    }
}

// Event Listeners
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
name.addEventListener('click', clearInput);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
focus.addEventListener('click', clearInput);
button_bg.addEventListener('click', setBgGreet);
button_bg.addEventListener('keypress', setBgGreet);

// Run
showTime();
setBgGreet();
getName();
getFocus();
