let op = 0;
let op_znak;
function cos(znak) {
    let zaw = document.getElementById("ekran");
    if((zaw.innerHTML).length < 24 || znak == '⇐' || znak == 'C' || znak == 'CE') {
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
        if(op == 0 && znak != '=') {
            op++;
            op_znak = znak;
            zaw.innerHTML = zaw.innerHTML + znak;
        } else {
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
                    wyn = przed / po;
                    zaw.innerHTML = wyn + znak;
                    break;
            }
        }
    } else if(znak == '=') {
        let wart = zaw.innerHTML;
        let przed = parseFloat(wart.substr(0,wart.lastIndexOf(op_znak)));
        let po = parseFloat(wart.substr(wart.lastIndexOf(op_znak)+1,wart.length));
        let wyn;
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
                wyn = przed / po;
                zaw.innerHTML = wyn;
                break;
        }
        op = 0;
        op_znak = 0;
    } else {
        zaw.innerHTML = zaw.innerHTML + znak;
    }
    }
}