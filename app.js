window.onload = () => {
    h = 0;
    m = 0;
    s = 0;
    mls = 0;
    timeStarted = 0;
    time = document.getElementById('time');
    btnStart = document.getElementById('btn-start');
    btnStop = document.getElementById('btn-stop');
    btnReset = document.getElementById('btn-reset');
    bandera = document.getElementById('banderas');
    marca = document.getElementById('marca');
    tiempo = document.getElementById('tiempo')
    titulo = document.getElementById('titulo');
    inicioTime = document.getElementById('btn-inicio');
    inputHora = document.getElementById('input-hora')
    inputMin = document.getElementById('input-min')
    inputSeg = document.getElementById('input-seg')

    myfunctions();


};

function myfunctions() {
    btnStart.addEventListener('click', start);
    btnStop.addEventListener('click', stop);
    btnReset.addEventListener('click', reset);
};

function run() {
    let ht, mt, st, mlst;
    mls++;
    if (mls > 99) {
        s++;
        mls = 0
    }
    if (s > 59) {
        m++;
        s = 0
    }
    if (m > 59) {
        h++;
        m = 0
    }
    if (h > 24) {
        h = 0
    }

    mlst = ('0' + mls).slice(-2);
    st = ('0' + s).slice(-2);
    mt = ('0' + m).slice(-2);
    ht = ('0' + h).slice(-2);

    time.innerHTML = `${ht}:${mt}:${st}.${mlst}`
}

function start() {
    run();
    timeStarted = setInterval(run, 10);
    btnStart.removeEventListener('click', start);

}

function stop() {
    clearInterval(timeStarted);
    btnStart.addEventListener('click', start);
    // bandera.textContent=time.innerHTML;
    marca.textContent = "Ultima marca ";
    tiempo.textContent = time.innerHTML;

}

function reset() {
    clearInterval(timeStarted);
    time.innerHTML = '00:00:00.00';
    h = 0;
    m = 0;
    s = 0;
    mls = 0;
    btnStart.addEventListener('click', start);
    marca.textContent = "Ultima marca ";
    tiempo.textContent = time.innerHTML;
}

//TEMPORIZADOR

let horas = 10;
let min = 0;
let seg = 0;

// cargarSegundo();

function runCount() {
    console.log(inputHora.value)
    horas = inputHora.value;
    min = inputMin.value;
    seg = inputSeg.value;

    document.getElementById('temporizador').style.display="flex";
    cargarSegundo();
}

function reinicio() {
     horas = 10; min = 0; seg = 0;
    document.getElementById('temporizador').style.display="none";
}

//definimos y cargamos los segundos
function cargarSegundo() {
    let txtSeg;

    if (seg < 0) {
        seg = 59;
    }
    //mostrar segundos en pantalla
    if (seg < 10) {
        txtSeg = `0${seg}`
    } else {
        txtSeg = seg;
    }
    document.getElementById("segundos").innerHTML = txtSeg;
    seg--;
    cargarMinutos(seg)
}
//definimos y cargamos  los minutos
function cargarMinutos(seg) {
    let txtMin;
    if (seg == -1 && min != 0) {
        setTimeout(() => {
            min--;
        }, 500);
    } else if (seg == -1 && min == 0) {
        setTimeout(() => {
            min = 59;
        }, 500)
    }
    //mostramos los minutos en pantalla
    if (min < 10) {
        txtMin = `0${min}`
    } else {
        txtMin = min
    }
    document.getElementById("minutos").innerHTML = txtMin;
    cargarHora(seg, min)
}
//definimos y cargamos la hora
function cargarHora(seg, min) {
    let txtHora;
    if (seg == -1 && min == 0 && horas != 0) {
        setTimeout(() => {
            horas--;
        }, 500);
    } else if (seg == -1 && min == 0 && horas == 0) {
        setTimeout(() => {
            horas = inputHora.value;
        })
    }
    //mostramos las horas por pantalla
    if (horas < 10) {
        txtHora = `0${horas}`
    } else {
        txtHora = horas
    }
    document.getElementById("horas").innerHTML = txtHora
    // console.log(min)
    console.log(min);
    console.log(seg)
    if (horas == 0 && min == 0 && seg == -1) {
        alert("Fin del temporizador")
        document.getElementById('temporizador').style.display="none";
    }
    // console.log(horas);
}

//ejecutamos cada segundo
setInterval(cargarSegundo, 1000)