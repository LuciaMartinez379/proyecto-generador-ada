////Declaracion de constantes

//DOM
const body = document.getElementById('cuerpo');
const memeImg = document.getElementById('meme-img'); //div
const colorValue = document.getElementById('color-value'); //span img
const textTop = document.getElementById('top-text'); //p
const textBottom = document.getElementById('bottom-text'); //p
const colorFont = document.getElementById('color-font-value'); //span texto
const colorBgFont =document.getElementById('color-bg-value'); //span texto 2
const panel = document.getElementById('options-panel'); //aside

//Botones
const imgBtn = document.getElementById('img-btn');
const textBtn = document.getElementById('text-btn');
const modeBtn = document.getElementById('mode-btn');
const darkBtn = document.getElementById('dark-btn');
const closeBtn = document.getElementById('close-btn');
const descargar = document.getElementById('download-btn');

//Panel de imagen
const imgPanel = document.getElementById('img-panel');
const imgUrl = document.getElementById('img-url');
const bgColor = document.getElementById('fondo-color');
const blendMode = document.getElementById('blend-mode');
const filtroBrillo = document.getElementById('brillo');
const filtroOpacidad = document.getElementById('opacidad');
const filtroContraste = document.getElementById('contraste');
const filtroDesenfoque = document.getElementById('desenfoque');
const filtroGrayscale = document.getElementById('escala-de-grises');
const filtroSepia = document.getElementById('sepia');
const filtroHue = document.getElementById('hue');
const filtroSat = document.getElementById('saturado');
const filtroNeg = document.getElementById('negativo');
const filterReset = document.getElementById('reset-btn');

//Panel de texto
const textPanel = document.getElementById('text-panel');
const topText = document.getElementById('area-text');
const noTopText = document.getElementById('no-top-text');
const bottomText = document.getElementById('area-text-bottom');
const noBottomText = document.getElementById('no-sub-text');
const fontFamily = document.getElementById('font');
const fontSize = document.getElementById('font-size');
const textAlignLeft = document.getElementById('align-left');
const textAlignCenter = document.getElementById('align-center');
const textAlignRight = document.getElementById('align-right');
const fontColor = document.getElementById('font-color');
const fontBg = document.getElementById('font-bg-color');
const transText = document.getElementById('trans-text');
const contNone = document.getElementById('cont-none');
const contClaro = document.getElementById('cont-claro');
const contOscuro = document.getElementById('cont-oscuro');
const espaciado = document.getElementById('font-sp');
const interlineado = document.getElementById('font-int');

////Funciones

//Botones

const paneles = () => {
    imgBtn.addEventListener('click', () => {
        panel.style.display = 'block';
        imgPanel.style.display = 'block';
        textPanel.style.display = 'none';
        panelResponsive();
    });
        
    textBtn.addEventListener('click', () => {
        panel.style.display = 'block';
        textPanel.style.display = 'block';
        imgPanel.style.display = 'none';
        panelResponsive();
    });
}

modeBtn.addEventListener('click', () => {
    darkBtn.style.display = 'inline';
    modeBtn.style.display= 'none';
    body.classList.toggle('dark-mode');
});

darkBtn.addEventListener('click', () => {
    modeBtn.style.display = 'inline';
    darkBtn.style.display = 'none';
    body.classList.toggle('dark-mode');
});

closeBtn.addEventListener('click', () => {
    panel.style.display = 'none';
});

descargar.addEventListener('click', (e) => {
    domtoimage.toBlob(document.getElementById('meme-img'))
    .then(function (blob) {
        window.saveAs(blob, 'mi-meme.png');
    });
})


//Panel de imagen

imgUrl.addEventListener('keyup', (e) => {
    memeImg.style.backgroundImage = `url(${e.target.value})`;
});

bgColor.addEventListener('input', (e) => {
    memeImg.style.backgroundColor = `${e.target.value}`;
    colorValue.innerText = `${e.target.value}`;
});

blendMode.addEventListener('change', (e) => {
    const valor = e.target.value;
    if (valor === 'aclarar') {
        memeImg.style.backgroundBlendMode = 'lighten';
    } else if (valor === 'oscurecer') {
        memeImg.style.backgroundBlendMode = 'darken';
    } else if (valor === 'diferencia') {
        memeImg.style.backgroundBlendMode = 'difference';
    } else if (valor === 'luminosidad') {
        memeImg.style.backgroundBlendMode = 'luminosity';
    } else if (valor === 'multiplicar') {
        memeImg.style.backgroundBlendMode = 'multiply';
    } else {
        memeImg.style.backgroundBlendMode = 'normal';
    }
});

const filter = () => {
    memeImg.style.filter = `brightness(${filtroBrillo.value}) opacity(${filtroOpacidad.value}) contrast(${filtroContraste.value}%) blur(${filtroDesenfoque.value}px) grayscale(${filtroGrayscale.value}%) sepia(${filtroSepia.value}%) hue-rotate(${filtroHue.value}deg) saturate(${filtroSat.value}%) invert(${filtroNeg.value})`;
};

filtroBrillo.addEventListener('change', filter);

filtroOpacidad.addEventListener('change', filter);

filtroContraste.addEventListener('change', filter);

filtroDesenfoque.addEventListener('change', filter);

filtroGrayscale.addEventListener('change', filter);

filtroSepia.addEventListener('change', filter);

filtroHue.addEventListener('change', filter);

filtroSat.addEventListener('change', filter);

filtroNeg.addEventListener('change', filter);

filterReset.addEventListener('click', (e) => {
    e.preventDefault();
    filtroBrillo.value = 1;
    filtroOpacidad.value = 1;
    filtroContraste.value = 100;
    filtroDesenfoque.value = 0;
    filtroGrayscale.value = 0;
    filtroSepia.value = 0;
    filtroHue.value = 0;
    filtroSat.value = 100;
    filtroNeg.value = 0;
    filter();
});


//Panel de texto

topText.addEventListener('keyup', (e) => {
    textTop.innerText = e.target.value;
});

noTopText.addEventListener('change', () => {
    if (noTopText.checked === true) {
        textTop.style.display = 'none';
    } else {
        textTop.style.display = 'block';
    }
});

bottomText.addEventListener('keyup', (e) => {
    textBottom.innerText = e.target.value;
});

noBottomText.addEventListener('change', () => {
    if (noBottomText.checked === true) {
        textBottom.style.display = 'none';
    } else {
        textBottom.style.display = 'block';
    }
});

fontFamily.addEventListener('change', (e) => {
    const valorFuente = e.target.value;
    if (valorFuente === 'arial') {
        textTop.style.fontFamily = `Arial`;
        textBottom.style.fontFamily = `Arial`;
    } else if (valorFuente === 'arial-black') {
        textTop.style.fontFamily = `Arial Black`;
        textBottom.style.fontFamily = `Arial Black`;
    } else if (valorFuente === 'american-type') {
        textTop.style.fontFamily = `American Typewriter`;
        textBottom.style.fontFamily = `American Typewriter`;
    } else if (valorFuente === 'andale-mono') {
        textTop.style.fontFamily = `Andale Mono`;
        textBottom.style.fontFamily = `Andale Mono`;
    } else if (valorFuente === 'comic-sans') {
        textTop.style.fontFamily = `Comic Sans MS`;
        textBottom.style.fontFamily = `Comic Sans MS`;
    } else if (valorFuente === 'helvetica') {
        textTop.style.fontFamily = `Helvetica`;
        textBottom.style.fontFamily = `Helvetica`;
    } else if (valorFuente === 'impact') {
        textTop.style.fontFamily = `Impact`;
        textBottom.style.fontFamily = `Impact`;
    } else if (valorFuente === 'verdana') {
        textTop.style.fontFamily = `Verdana`;
        textBottom.style.fontFamily = `Verdana`;
    } else {
        textTop.style.fontFamily = `Times New Roman`;
        textBottom.style.fontFamily = `Times New Roman`;
    }
});

fontSize.addEventListener('change', (e) => {
    textTop.style.fontSize = `${e.target.value}px`;
    textBottom.style.fontSize = `${e.target.value}px`;
});

textAlignLeft.addEventListener('click', () => {
    textTop.style.textAlign = 'left';
    textBottom.style.textAlign = 'left';
});

textAlignCenter.addEventListener('click', () => {
    textTop.style.textAlign = 'center';
    textBottom.style.textAlign = 'center';
});

textAlignRight.addEventListener('click', () => {
    textTop.style.textAlign = 'right';
    textBottom.style.textAlign = 'right';
});

fontColor.addEventListener('input', (e) => {
    textTop.style.color = e.target.value;
    textBottom.style.color = e.target.value;
    colorFont.innerText = `${e.target.value}`;
});

fontBg.addEventListener('input', (e) => {
    textTop.style.backgroundColor = e.target.value;
    textBottom.style.backgroundColor = e.target.value;
    colorBgFont.innerText = `${e.target.value}`;
});

transText.addEventListener('change', () => {
    if (transText.checked) {
        textTop.style.backgroundColor = 'transparent';
        textTop.style.zIndex = '2';
        textBottom.style.backgroundColor = 'transparent';
        textBottom.style.zIndex = '2';
        textBottom.style.marginTop = '72%';
        memeImg.style.height = '100%';
        memeImg.style.position = 'absolute';
        memeImg.style.zIndex = '1';
    } else {
        textTop.style.backgroundColor = 'white';
        textBottom.style.backgroundColor = 'white';
    }
});

contNone.addEventListener('click', (e) => {
    e.preventDefault();
    textTop.classList.remove('contorno-claro');
    textTop.classList.remove('contorno-oscuro');
    textBottom.classList.remove('contorno-claro');
    textBottom.classList.remove('contorno-oscuro');
});

contClaro.addEventListener('click', (e) => {
    e.preventDefault();
    textTop.classList.add('contorno-claro');
    textBottom.classList.add('contorno-claro');
});

contOscuro.addEventListener('click', (e) => {
    e.preventDefault();
    textTop.classList.add('contorno-oscuro');
    textBottom.classList.add('contorno-oscuro');
});

espaciado.addEventListener('change', (e) => {
    textTop.style.padding = `${e.target.value}px 15px`;
    textBottom.style.padding = `${e.target.value}px 15px`;
    textBottom.style.marginTop = '0';
});

interlineado.addEventListener('change', (e) => {
    textTop.style.lineHeight = `${e.target.value}`;
    textBottom.style.lineHeight = `${e.target.value}`;
    textBottom.style.marginTop = '0';
});


//Responsive

const panelResponsive = () => {
    if (window.screen.width <= 700) {
        panel.classList.add('panel-responsive');
    } else {
        panel.classList.remove('panel-responsive');
    }
};