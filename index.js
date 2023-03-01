let op = 0;
let op_znak;
let aha;
let kolor = "dark";
function kolory() {
    if(kolor == "dark") {
        kolor = "light";
        document.body.style.setProperty("--bg-kolor", "#fdf0f0");
        document.body.style.setProperty("--border-kolor", "black");
        document.getElementById("theme").style.setProperty("box-shadow", "0px 0px 10px white");
        document.getElementById("ekran").style.setProperty("color", "rgb(13, 11, 29)");
        document.getElementById("light").style.setProperty("opacity", 1);
        document.getElementById("dark").style.setProperty("opacity", 0);
        document.getElementById("theme").style.setProperty("background-color", "black");
        let przy = document.querySelectorAll("button");
        przy.forEach(element => {
            element.style.setProperty("color", "rgb(13, 11, 29)");
        });
    } else {
        kolor = "dark";
        document.body.style.setProperty("--bg-kolor", "rgb(13, 11, 29)");
        document.body.style.setProperty("--border-kolor", "rgb(0, 61, 192)");
        document.getElementById("theme").style.setProperty("box-shadow", "0px 0px 10px black");
        document.getElementById("ekran").style.setProperty("color", "rgb(128, 175, 216)");
        document.getElementById("light").style.setProperty("opacity", 0);
        document.getElementById("dark").style.setProperty("opacity", 1);
        document.getElementById("theme").style.setProperty("background-color", "white");
        let przy = document.querySelectorAll("button");
        przy.forEach(element => {
            element.style.setProperty("color", "rgb(128, 175, 216)");
        });
    }
}
function cos(znak) {
    let zaw = document.getElementById("ekran");
    //if((zaw.innerHTML).length < 24 || znak == '⇐' || znak == 'C' || znak == 'CE') {
    if(aha == 1) {
        aha=0;
        zaw.innerHTML = '';
    }
    if(znak == '⇐') {
        let wart = zaw.innerHTML;
        zaw.innerHTML = wart.slice(0, -1);
    } else if(znak == 'C' || znak == 'CE') {
       zaw.innerHTML = ''; 
       op_znak = 0;
       op = 0;
    } else if(znak == '+/-') {
        let wart = zaw.innerHTML;
        zaw.innerHTML = -wart.substr(0, wart.length);
    } else if(znak == '/' || znak == '*' || znak == '+' || znak == '-') {
        let wart = zaw.innerHTML;
        if(wart.length != 0) {
            if(op == 0 && znak != '=') {
                op++;
                op_znak = znak;
                zaw.innerHTML = zaw.innerHTML + znak;
            } else {
                let gowno = (zaw.innerHTML).charAt((zaw.innerHTML).length - 1);
                if(gowno != '*' && gowno != '/' && gowno != '+' && gowno != '-') {
                    let przed = parseFloat(wart.substr(0,wart.lastIndexOf(op_znak)));
                    let po = parseFloat(wart.substr(wart.lastIndexOf(op_znak)+1,wart.length));
                    let wyn;
                    switch(op_znak) {
                        case '+':
                            wyn = przed + po;
                            zaw.innerHTML = wyn + znak;
                            break;
                        case '-':
                            wyn = przed - po;
                            zaw.innerHTML = wyn + znak;
                            break;
                        case '*':
                            wyn = przed * po;
                            zaw.innerHTML = wyn + znak;
                            break;
                        case '/':
                            if(po == 0) {
                                aha = 1;
                            zaw.innerHTML = "Nie można dzielić przez Zero";
                            } else {
                                wyn = przed / po;
                                zaw.innerHTML = wyn;
                            }
                            break;
                    }
                }
            }
        }
    } else if(znak == '=') {
        let wart = zaw.innerHTML;
        let przed = parseFloat(wart.substr(0,wart.lastIndexOf(op_znak)));
        let po = parseFloat(wart.substr(wart.lastIndexOf(op_znak)+1,wart.length));
        let wyn;
        let gowno = (zaw.innerHTML).charAt((zaw.innerHTML).length - 1);
        if(wart.length != 0) {
            if(gowno != '*' && gowno != '/' && gowno != '+' && gowno != '-') {
                switch(op_znak) {
                    case '+':
                        wyn = przed + po;
                        zaw.innerHTML = wyn;
                        break;
                    case '-':
                        wyn = przed - po;
                        zaw.innerHTML = wyn;
                        break;
                    case '*':
                        wyn = przed * po;
                        zaw.innerHTML = wyn;
                        break;
                    case '/':
                        if(po == 0) {
                            aha = 1;
                            zaw.innerHTML = "Nie można dzielić przez Zero";
                        } else {
                            wyn = przed / po;
                            zaw.innerHTML = wyn;
                        }
                        break;
                }
                op = 0;
                op_znak = 0;
            } 
        } 
    } else {
        zaw.innerHTML = zaw.innerHTML + znak;
    }
    //}
}