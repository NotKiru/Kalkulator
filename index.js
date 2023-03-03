let op = 0;
let op_znak = 0;
let aha;
let kolor = "dark";
let coss = 0;
function kolory() {
    let e_body =  document.body;
    let e_light = document.getElementById("light");
    let e_dark = document.getElementById("dark");
    if(kolor == "dark") {
        kolor = "light";
        e_body.style.setProperty("--kolor1", "rgb(150, 180, 243)");
        e_body.style.setProperty("--kolor2", "rgb(13, 11, 29)");
        e_body.style.setProperty("--kolor3", "rgb(21, 18, 48)");
        e_body.style.setProperty("--t-bg", "black");
        e_body.style.setProperty("--t-sh", "white");
        e_light.style.setProperty("opacity", 1);
        e_dark.style.setProperty("opacity", 0);
    } else {
        kolor = "dark";
        e_body.style.setProperty("--kolor1", "rgb(13, 11, 29)");
        e_body.style.setProperty("--kolor2", "rgb(0, 73, 230)");
        e_body.style.setProperty("--kolor3", "rgb(128, 175, 216)");
        e_body.style.setProperty("--t-bg", "white");
        e_body.style.setProperty("--t-sh", "black");
        e_light.style.setProperty("opacity", 0);
        e_dark.style.setProperty("opacity", 1);
    }
}
function cos(znak) {
    let e_ekran = document.getElementById("ekran");
    let wart = e_ekran.innerHTML;
    let dlugosc = wart.length;
    let przed = parseFloat(wart.substr(0,wart.lastIndexOf(op_znak)));
    let po = parseFloat(wart.substr(wart.lastIndexOf(op_znak)+1,dlugosc));
    if(coss == 1) {
        po = parseFloat(wart.substr(wart.indexOf("(")+1,wart.indexOf(")")));
        coss = 0;
    }
    
    if(aha == 1) {
        aha=0;
        e_ekran.innerHTML = '';
        op = 0;
        op_znak = 0;
    }
    if(znak == '⇐') {
        if(isZnak(lastChar(wart))) {
            op = 0;
            op_znak = 0;
        }
        e_ekran.innerHTML = wart.slice(0, -1);
    } else if(znak == 'C' || znak == 'CE') {
        e_ekran.innerHTML = ''; 
       op_znak = 0;
       op = 0;
    } else if(znak == '+/-') {
        if(op_znak == 0) {
            przed = parseFloat(wart.substr(0,dlugosc));
            przed = -przed;
            e_ekran.innerHTML = przed;
        } else {
            if(!isNaN(po)) {
                if(op_znak == "+") op_znak = "-";
                else if(op_znak == "-") op_znak = "+";
                else if(op_znak == "*") po = -po;
                else if(op_znak == "/") po = -po;
                if((op_znak == "/" || op_znak == "*") && po < 0) {
                    coss = 1;
                    e_ekran.innerHTML = przed + op_znak + "(" + po + ")";
                }
                else e_ekran.innerHTML = przed + op_znak + po;
            }
        }
        e_ekran = przed + op_znak + po;
    } else if(isZnak(znak)) {
            if(op == 0 && znak != '=' && dlugosc != 0) {
                op=1;
                op_znak = znak;
                e_ekran.innerHTML = wart + znak;
            } else {
                if(isNZnak(lastChar(wart))) {
                    switch(op_znak) {
                        case '+':
                            e_ekran.innerHTML = przed + po + znak;
                            break;
                        case '-':
                            e_ekran.innerHTML = przed - po + znak;
                            break;
                        case '*':
                            e_ekran.innerHTML = przed * po + znak;
                            break;
                        case '/':
                            if(po == 0) {
                                aha = 1;
                                e_ekran.innerHTML = "Nie można dzielić przez Zero";
                            } else {
                                e_ekran.innerHTML = przed / po + znak;
                            }
                            break;
                    }
                }
        }
    } else if(znak == '=') {
        if(isNZnak(lastChar(wart)) && dlugosc != 0) {
            switch(op_znak) {
                case '+':
                    e_ekran.innerHTML = przed + po;
                    break;
                case '-':
                    e_ekran.innerHTML = przed - po;
                    break;
                case '*':
                    e_ekran.innerHTML = przed * po;
                    break;
                case '/':
                    if(po == 0) {
                        aha = 1;
                        e_ekran.innerHTML = "Nie można dzielić przez Zero";
                    } else {
                        e_ekran.innerHTML = przed / po;
                    }
                    break;
            }
            op = 0;
            op_znak = 0;
        } 
    } else {
        e_ekran.innerHTML = wart + znak;
    }
}

function isZnak(value) {
    if(value == '+' || value == '-' || value == '*' || value == '/') return true;
    else return false;
}

function isNZnak(value) {
    if(value != '+' && value != '-' && value != '*' && value != '/') return true;
    else return false;
}

function lastChar(value) {
    return value.charAt((value).length - 1);
}
