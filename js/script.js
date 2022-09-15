const body = document.querySelector('.body');

// PERCENT RANGE
const percentRange = document.getElementById('percent-range');
const bombsRange = document.getElementById('bombs-range')

noUiSlider.create(percentRange, {
    start: [56],
    step: 1,
    connect: [true, false],
    tooltips: true,
    range: {
        'min': [0],
        'max': [100]
    },
    pips: {
        mode: 'positions',
        values: [0, 100],
        density: 100,
        format: wNumb({
            decimals: 0,
            suffix: '%'
        })
    },
    format: wNumb({
        decimals: 0,
        suffix: '%'
    }),

});

noUiSlider.create(bombsRange, {
    start: [14],
    step: 1,
    connect: [true, false],
    tooltips: true,
    range: {
        'min': [0],
        'max': [25]
    },
    pips: {

        mode: 'steps',
        values: [2, 24],
        density: 5,
        format: wNumb({
            decimals: 0,
        })
    },
    format: wNumb({
        decimals: 0,
    }),

});


function insertRangeMask() {
    let percentSliderBodies = document.querySelectorAll('#percent-range .noUi-base, #bombs-range .noUi-base');
    percentSliderBodies.forEach(item => {
        let rangeBg = document.createElement('div');
        let windowWidth = window.innerWidth;
        rangeBg.className = 'range-mask';
        rangeBg.innerHTML = '<svg class="range-mask--big" width="1336" height="73" viewBox="0 0 1336 73" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M1332.18 0.5L0 3V38L6.68 33.5L1334.09 17L1332.18 0.5Z" fill="#0C1224"/>\n' +
            '<path d="M1335.05 54.5L6.68 54L0 52V72.5H1335.05V54.5Z" fill="#0C1224"/>\n' +
            '<path d="M6.33399 34.4148L1329.53 16.5873C1330.69 16.5716 1331.47 16.5623 1332.07 16.6035C1332.65 16.6434 1332.93 16.725 1333.11 16.8161C1333.59 17.0534 1333.98 17.4368 1334.22 17.9103C1334.32 18.0922 1334.4 18.3693 1334.45 18.9509C1334.5 19.5498 1334.5 20.3281 1334.5 21.4868V48.6C1334.5 49.7449 1334.5 50.5133 1334.45 51.105C1334.4 51.6793 1334.32 51.9539 1334.23 52.135C1333.99 52.6054 1333.61 52.9878 1333.14 53.2275C1332.95 53.3198 1332.68 53.4036 1332.11 53.4505C1331.51 53.4988 1330.74 53.5 1329.6 53.5H6.40001C5.25515 53.5 4.48672 53.4988 3.89496 53.4505C3.32071 53.4036 3.04614 53.3198 2.86502 53.2275C2.39462 52.9878 2.01217 52.6054 1.77248 52.135C1.6802 51.9539 1.59643 51.6793 1.54952 51.105C1.50117 50.5133 1.5 49.7449 1.5 48.6V39.3144C1.5 38.1832 1.50115 37.4245 1.54866 36.8399C1.59472 36.2729 1.67695 36.0008 1.76791 35.8205C2.00362 35.3532 2.38002 34.9717 2.84407 34.7298C3.02315 34.6364 3.29407 34.5505 3.86038 34.4968C4.44436 34.4414 5.20296 34.43 6.33399 34.4148Z" stroke="#007AFE" stroke-width="3"/>\n' +
            '</svg>\n' +
            '<svg class="range-mask--small" width="700" height="73" viewBox="0 0 700 73" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
            '<path d="M698 0.5L0 3V38L3.5 33.5L699 17L698 0.5Z" fill="#0C1224"/>\n' +
            '<path d="M699.5 54.5L3.5 54L0 52V72.5H699.5V54.5Z" fill="#0C1224"/>\n' +
            '<path d="M1.5 39.2375C1.5 38.1188 1.50114 37.3688 1.54788 36.7905C1.59318 36.2301 1.67404 35.9603 1.7638 35.7807C1.99592 35.3163 2.36686 34.9357 2.82512 34.6917C3.00233 34.5974 3.26995 34.5096 3.82906 34.4499C4.40596 34.3883 5.15562 34.3679 6.27404 34.3392L693.474 16.6683C694.645 16.6382 695.432 16.6191 696.039 16.6535C696.628 16.687 696.91 16.7665 697.095 16.8566C697.577 17.0916 697.971 17.4757 698.219 17.952C698.314 18.1346 698.4 18.414 698.449 19.0024C698.499 19.6079 698.5 20.3952 698.5 21.5667V48.6C698.5 49.7449 698.499 50.5133 698.451 51.105C698.404 51.6793 698.32 51.9539 698.228 52.135C697.988 52.6054 697.605 52.9878 697.135 53.2275C696.954 53.3198 696.679 53.4036 696.105 53.4505C695.513 53.4988 694.745 53.5 693.6 53.5H6.40001C5.25515 53.5 4.48672 53.4988 3.89496 53.4505C3.32071 53.4036 3.04614 53.3198 2.86502 53.2275C2.39462 52.9878 2.01217 52.6054 1.77248 52.135C1.6802 51.9539 1.59643 51.6793 1.54952 51.105C1.50117 50.5133 1.5 49.7449 1.5 48.6V39.2375Z" stroke="#007AFE" stroke-width="3"/>\n' +
            '</svg>\n';
        item.append(rangeBg);
    })
}

// function insertRangeMask() {
//     let percentSliderBodies = document.querySelectorAll('#percent-range .noUi-base, #bombs-range .noUi-base');
//     percentSliderBodies.forEach(item => {
//         let rangeBg = document.createElement('div');
//         let windowWidth = window.innerWidth;
//         rangeBg.className = 'range-mask';
//         rangeBg.innerHTML = '<svg class="range-mask--big" width="1336" height="73" viewBox="0 0 1336 73" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
//             '<path d="M1332.18 0.5L0 3V38L6.68 33.5L1334.09 17L1332.18 0.5Z" fill="#0C1224"/>\n' +
//             '<path d="M1335.05 54.5L6.68 54L0 52V72.5H1335.05V54.5Z" fill="#0C1224"/>\n' +
//             '<path d="M6.33399 34.4148L1329.53 16.5873C1330.69 16.5716 1331.47 16.5623 1332.07 16.6035C1332.65 16.6434 1332.93 16.725 1333.11 16.8161C1333.59 17.0534 1333.98 17.4368 1334.22 17.9103C1334.32 18.0922 1334.4 18.3693 1334.45 18.9509C1334.5 19.5498 1334.5 20.3281 1334.5 21.4868V48.6C1334.5 49.7449 1334.5 50.5133 1334.45 51.105C1334.4 51.6793 1334.32 51.9539 1334.23 52.135C1333.99 52.6054 1333.61 52.9878 1333.14 53.2275C1332.95 53.3198 1332.68 53.4036 1332.11 53.4505C1331.51 53.4988 1330.74 53.5 1329.6 53.5H6.40001C5.25515 53.5 4.48672 53.4988 3.89496 53.4505C3.32071 53.4036 3.04614 53.3198 2.86502 53.2275C2.39462 52.9878 2.01217 52.6054 1.77248 52.135C1.6802 51.9539 1.59643 51.6793 1.54952 51.105C1.50117 50.5133 1.5 49.7449 1.5 48.6V39.3144C1.5 38.1832 1.50115 37.4245 1.54866 36.8399C1.59472 36.2729 1.67695 36.0008 1.76791 35.8205C2.00362 35.3532 2.38002 34.9717 2.84407 34.7298C3.02315 34.6364 3.29407 34.5505 3.86038 34.4968C4.44436 34.4414 5.20296 34.43 6.33399 34.4148Z" stroke="#007AFE" stroke-width="3"/>\n' +
//             '</svg>\n' +
//             '<svg class="range-mask--small" width="702" height="55" viewBox="0 0 702 55" fill="none" xmlns="http://www.w3.org/2000/svg">\n\n' +
//             '<path d="M699.994 0L0 2.5V37.5L3.51 33L700.997 16.5L699.994 0Z" fill="#0C1224"/>\n' +
//             '<path d="M6.2744 33.8396L695.474 16.1678C696.645 16.1378 697.432 16.1188 698.039 16.1532C698.628 16.1867 698.91 16.2663 699.095 16.3564C699.577 16.5914 699.971 16.9755 700.219 17.4518C700.313 17.6344 700.4 17.9137 700.449 18.5021C700.499 19.1075 700.5 19.8948 700.5 21.0662V48.1C700.5 49.2449 700.499 50.0133 700.45 50.605C700.404 51.1793 700.32 51.4539 700.227 51.635C699.988 52.1054 699.605 52.4878 699.135 52.7275C698.954 52.8198 698.679 52.9036 698.105 52.9505C697.513 52.9988 696.745 53 695.6 53H6.40001C5.25515 53 4.48672 52.9988 3.89496 52.9505C3.32071 52.9036 3.04614 52.8198 2.86502 52.7275C2.39462 52.4878 2.01217 52.1054 1.77248 51.635C1.6802 51.4539 1.59643 51.1793 1.54952 50.605C1.50117 50.0133 1.5 49.2449 1.5 48.1V38.738C1.5 37.6191 1.50114 36.8691 1.54789 36.2908C1.59319 35.7303 1.67405 35.4605 1.76382 35.2809C1.99596 34.8165 2.36694 34.4359 2.82524 34.192C3.00246 34.0976 3.27009 34.0099 3.82924 33.9502C4.40619 33.8887 5.15591 33.8683 6.2744 33.8396Z" stroke="#007AFE" stroke-width="3"/>\n' +
//             '</svg>\n';
//         item.append(rangeBg);
//     })
// }

insertRangeMask();


//FIXED HEADER
const header = document.querySelector('.header');
const wrapper = document.querySelector('.wrapper');


document.addEventListener('scroll', () => {

    let headerHeight = header.clientHeight;
    if (window.innerWidth < 992 && window.window.pageYOffset > headerHeight) {
        header.classList.add('fixed');
        wrapper.style.paddingTop = `${headerHeight}px`;
    } else {
        header.classList.remove('fixed');
        wrapper.style.paddingTop = `0px`;
    }
})

//TABS

const tabButtons = document.querySelectorAll('.header__btn, .mobile-menu__tab');
const tabs = document.querySelectorAll('.tab');
let dataTarget;

tabButtons.forEach(button => {
    button.addEventListener('click', selectBtn);
})

function selectBtn() {
    tabButtons.forEach(button => {
        button.classList.remove('active');
    })
    this.classList.add('active');
    dataTarget = this.getAttribute('data-target');
    selectTabContent(dataTarget);
    if (dataTarget === 'mines') {
        minesAdaptationToScreen();
    }
}

function selectTabContent(dataTarget) {
    tabs.forEach(tab => {
        tab.getAttribute('data-target') === dataTarget ? tab.classList.add('active') : tab.classList.remove('active');
    })
}

//MENU

const menuBtns = document.querySelectorAll('.menu-toggle');
const headerMenu = document.querySelector('.header-menu');
const mobileChatBtns = document.querySelectorAll('.mobile-chat');
const chat = document.querySelector('.section-chat');
const headerLinks = document.querySelectorAll('.header-menu__link');

menuBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        headerMenu.classList.toggle('active');
    })
})

mobileChatBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        chat.classList.toggle('active');
        if (window.innerWidth < 768) {
            body.classList.toggle('no-scroll');
        }

    })
})

headerLinks.forEach(link => {
    link.addEventListener('click', () => {
        headerMenu.classList.remove('active');
    })
})

const mobileMenuHidden = document.querySelector('.mobile-menu-row--toggle');
const mobileMenuBtn = document.querySelector('.mobile-menu__toggle');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenuHidden.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
})


//
// chat.onmousedown = function(e) {
//
//     var coords = getCoords(chat);
//     var shiftX = e.pageX - coords.left;
//     var shiftY = e.pageY - coords.top;
//
//     chat.style.position = 'absolute';
//     document.body.appendChild(chat);
//     moveAt(e);
//
//     chat.style.zIndex = 1000; // над другими элементами
//
//     function moveAt(e) {
//         chat.style.left = e.pageX - shiftX + 'px';
//         chat.style.top = e.pageY - shiftY + 'px';
//     }
//
//     document.onmousemove = function(e) {
//         moveAt(e);
//     };
//
//     chat.onmouseup = function() {
//         document.onmousemove = null;
//         chat.onmouseup = null;
//     };
//
// }
//
// chat.ondragstart = function() {
//     return false;
// };

// function getCoords(elem) {   // кроме IE8-
//     var box = elem.getBoundingClientRect();
//     return {
//         top: box.top + pageYOffset,
//         left: box.left + pageXOffset
//     };
// }

//POPUPS

const popupBtns = document.querySelectorAll('.popup-open');
const popupsContainer = document.querySelector('.modal-container');
const modalOverlay = document.querySelector('.modal-overlay');
const modals = document.querySelectorAll('.modal');

popupBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        let targetModal = btn.getAttribute('data-target');
        popupsContainer.style.display = 'flex';
        document.querySelector(`[data-modal=${targetModal}]`).classList.add('show');
        body.classList.add('no-scroll');
    })
})
modalOverlay.addEventListener('click', () => {
    popupsContainer.style.display = 'none';
    modals.forEach(modal => {
        if (modal.classList.contains('show')) {
            modal.classList.remove('show');
        }
    })
    body.classList.remove('no-scroll');
})

const bombsPips = bombsRange.querySelectorAll('.noUi-value');

for (let i = 0; i < bombsPips.length; i++) {
    if (i % 2 !== 0) {
        bombsPips[i].style.display = 'none';
    }
}

//RESIZE FUNCS
const mines = document.querySelector('.mines');
const tab3 = document.querySelector('.tab-3');
const sectionBet = document.querySelector('.section-bet--mines');


window.addEventListener("resize", () => {
    minesAdaptationToScreen();
    // checkSizeForRangeMask();
})

function minesAdaptationToScreen() {
    let tabWidth = tab3.clientWidth;
    let sectionBetWidth = sectionBet.clientWidth;
    let windowWidth = window.innerWidth;
    // console.log(tabWidth + " " + sectionBetWidth);
    if (windowWidth > 2560) {
        mines.style.gridTemplateColumns = `repeat(5, 200px)`;
        mines.style.gridTemplateRows = `repeat(5, 200px)`;
    } else if (windowWidth > 1920 && windowWidth < 2560) {
        mines.style.gridTemplateColumns = `repeat(5, ${(tabWidth - sectionBetWidth - 90) / 5}px)`;
        mines.style.gridTemplateRows = `repeat(5, ${(tabWidth - sectionBetWidth - 90) / 5}px)`;
    } else if (windowWidth >= 1800) {
        mines.style.gridTemplateColumns = `repeat(5, ${(tabWidth - sectionBetWidth - 85) / 5}px)`;
        mines.style.gridTemplateRows = `repeat(5, ${(tabWidth - sectionBetWidth - 85) / 5}px)`;
    } else if (windowWidth > 991 && windowWidth < 1800) {
        mines.style.gridTemplateColumns = `repeat(5, ${(tabWidth - sectionBetWidth - 90) / 5}px)`;
        mines.style.gridTemplateRows = `repeat(5, ${(tabWidth - sectionBetWidth - 90) / 5}px)`;
    } else if (windowWidth > 756) {
        mines.style.gridTemplateColumns = `repeat(5, ${(756 - 90) / 5}px)`;
        mines.style.gridTemplateRows = `repeat(5, ${(756 - 90) / 5}px)`;
    } else if (windowWidth < 756) {
        mines.style.gridTemplateColumns = `repeat(5, ${(windowWidth - 90) / 5}px)`;
        mines.style.gridTemplateRows = `repeat(5, ${(windowWidth - 90) / 5}px)`;
    }
}


//INPUTS & BTN DISABLE

const betInputs = document.querySelectorAll('.bet-block__input');
const betBtns = document.querySelectorAll('.bet__btn');

betInputs.forEach(input => {
    input.oninput = function () {
        betBtns.forEach(btn => {
            betBtnToggle(btn, input.value)
        })

        btnInputsSetEqual(input.value);
    };
})

function betBtnToggle(btn, value) {
    if (value === '' || value === '0') {
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }
}


function btnInputsSetEqual(value) {
    betInputs.forEach(input => {
        input.value = value;
    })
}


//MODAL BTNS

const modalBtns = document.querySelectorAll('.modal-payment-tiles__tile');

modalBtns.forEach(btn => {
    btn.onclick = function () {
        modalBtnUnFocus();
        modalBtnFocus(this);

    }
})


function modalBtnUnFocus() {
    modalBtns.forEach(btn => {
        btn.classList.remove('active');
    })

}

function modalBtnFocus(btn) {
    btn.classList.add('active');
}

