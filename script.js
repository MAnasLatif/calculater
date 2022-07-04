/* ----------- Auto B/W theme Selection ----------- */

const theme = sessionStorage.getItem("theme");
if (theme == "dark") {
    document.body.classList.add("dark");
} else if (theme == "light") {
    document.body.classList.add("light");
} else {
    const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
    if (prefersDarkScheme.matches) {
        document.body.classList.add("dark");
    } else {
        document.body.classList.add("light");
    }
}

/* ----------- Manual B/W theme Selection ----------- */

function chengtoggle() {
    if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
        sessionStorage.setItem("theme", "light");
    } else {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        sessionStorage.setItem("theme", "dark");
    }
}

/* ----------- Menu Button Selection ----------- */

function menu() {
    if (document.body.classList.contains("menuopne")) {
        document.body.classList.remove("menuopne");
    } else {
        document.body.classList.add("menuopne");
    }
}

/* ----------- calculater Selection ----------- */

let screen = document.getElementById('screen');
let normal = true;


function AdvBtn(s) {
    if (normal) {
        screen.value = s + '(' + screen.value + ')';
        normal = false;
    } else {
        let value = screen.value.toString();
        let v = value.slice(4, -1);
        screen.value = s + '(' + v + ')';
    }
}

function clears() {
    screen.value = '';
    normal = true;
}

function btn(b) {
    if (normal)
        screen.value += b;
    else {
        let value = screen.value.toString();
        let s = value.slice(0, 3);
        let v = value.slice(4, -1);
        screen.value = s + '(' + v + b + ')';
    }
}

function back() {
    if (normal)
        screen.value = screen.value.toString().slice(0, -1);
    else {
        let value = screen.value.toString();
        let s = value.slice(0, 3);
        let v = value.slice(4, -2);
        screen.value = s + '(' + v + ')';
    }
}

function equal(e) {
    if (normal)
        screen.value = eval(e);
    else {
        let value = e.toString();
        let s = value.slice(0, 3);
        let v = value.slice(4, -1);
        switch (s) {
            case 'sin':
                screen.value = Math.sin(eval(v))
                break;
            case 'cos':
                screen.value = Math.cos(eval(v))
                break;
            case 'tan':
                screen.value = Math.tan(eval(v))
                break;
            case 'log':
                screen.value = Math.log(eval(v))
                break;
        }
        normal = true;
    }
}