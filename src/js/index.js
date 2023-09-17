const bookBtn = document.querySelectorAll('.book-btn')
const mainSite = document.querySelector('.main-site')
const bookingPage = document.querySelector('.booking')
const thanksPage = document.querySelector('.thanks')

bookBtn.forEach(button => {
    button.addEventListener('click', function () {
        mainSite.classList.remove('selecionado')
        bookingPage.classList.add("selecionado")
    })
});

const input = [
    'family',
    'events',
    'social',
]

const descriptions = {
    family: ['<h2>Family Gathering</h2> <p>We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.</p>`'],
    events: ['<h2>Special Events</h2> <p>Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.</p>`'],
    social: ['<h2>Social Gathering</h2> <p>Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.</p>`'],
}

const label = document.querySelectorAll('.label')

const inputsId = document.querySelectorAll('.input')
const inputsPage = input.map((option) =>
    document.querySelector(`#${option}-input`)
);

const description = document.querySelector('.description')

const inputsImages = input.map((option) =>
    document.querySelector(`.${option}-img`)
);

function toggleDescriptions(index) {
    description.innerHTML = descriptions[input[index]];
}

function toggleSelection(index) {
    inputsImages.forEach((page, i) => {
        page.classList.toggle('selecionada', i === index)
    });
}

function toggleLabelColors (index) {
    for (let i = 0; i < inputsId.length; i++) {
        if (inputsId[i].checked) {
            label[i].style.color = 'var(--clr-mirage)';
        } else {
            label[i].style.color = 'var(--clr-grey)';
        }
    }
}

inputsPage.forEach((input, index) => {
    input.addEventListener('click', function () {
        if (input.checked) {
            toggleSelection(index)
            toggleDescriptions(index)
            toggleLabelColors(index)
        }
    })
});

const minusBtn = document.querySelector('.minus')
const plusBtn = document.querySelector('.plus')
let peoples = document.querySelector('.people')
peoples.value = 4

minusBtn.addEventListener('click', function () {
    event.preventDefault()
    peoples.value--;
    if (peoples.value < 1) {
        return
    }
    peoples.innerHTML = peoples.value
})

plusBtn.addEventListener('click', function () {
    event.preventDefault()
    peoples.value++;
    peoples.innerHTML = peoples.value
})

const inputSubmit = document.querySelector('.submit')
const inputName = document.querySelector('#name')
const inputEmail = document.querySelector('#email')
const error = document.querySelectorAll('.error')

inputSubmit.addEventListener('click', function () {
    event.preventDefault()
    if (inputName.value === '') {
        error[0].innerHTML = 'Please, insert a name.'
    } else {
        error[0].innerHTML = ''
    }

    if (inputEmail.validity.valid === false || inputEmail.value === '') {
        error[1].innerHTML = "Invalid email format."
    } else {
        error[1].innerHTML = ''
    }

})

const date = new Date();
const currentYear = date.getFullYear();
const today = date.getDate();
const currentMonth = date.getMonth() + 1;
const months = [31,28,31,30,31,30,31,31,30,31,30,31];
const dayInput = document.querySelector('#day')
const monthInput = document.querySelector('#mon')
const yearInput = document.querySelector('#year')


inputSubmit.addEventListener('click', function () {
    event.preventDefault()
    if ((monthInput.value >= 13 | monthInput.value === '') || (dayInput.value >= 32 ) || ((monthInput.value == 2 | monthInput.value == 4 | monthInput.value == 6 | monthInput.value == 9 | monthInput.value == 11) && dayInput.value > 30) || ((monthInput.value < currentMonth || monthInput.value > currentMonth) && yearInput.value < currentYear) || (monthInput.value < currentMonth && currentYear >= yearInput.value) || (today > dayInput.value && currentMonth >= monthInput.value && yearInput.value <= currentYear) || dayInput.value === '' || yearInput.value === '') {
        error[2].innerHTML = 'Must be a valid date'
    } else {
        error[2].innerHTML = ''
    }

})

const inputSelect = document.querySelector('.ampm')
const inputPm = document.querySelector('.pm')
const inputAm = document.querySelector('.am')
const inputHour = document.querySelector('.hour')
const inputMin = document.querySelector('#minute')

inputSelect.addEventListener('click', function () {
    if (inputAm.selected) {
        inputHour.innerHTML = ' <input id="hour" type="number" name="hour" placeholder="Hour" min="10" max="13">'
    } else if (inputPm.selected) {
        inputHour.innerHTML = ' <input id="hour" type="number" name="hour" placeholder="Hour" min="1" max="11">'
    }
})

inputSubmit.addEventListener('click', function() {
    event.preventDefault()
    if (inputHour.value === '' || inputMin.value === '') {
        error[3].innerHTML = 'Must be a valid time'
    } else {
        error[3].innerHTML = ''
    }
})

inputSubmit.addEventListener('click', function () {
    event.preventDefault()
    if ((inputName.value === '') || (inputEmail.validity.valid === false || inputEmail.value === '') || ((monthInput.value >= 13 | monthInput.value === '') || (dayInput.value >= 32 ) || ((monthInput.value == 2 | monthInput.value == 4 | monthInput.value == 6 | monthInput.value == 9 | monthInput.value == 11) && dayInput.value > 30) || ((monthInput.value < currentMonth || monthInput.value > currentMonth) && yearInput.value < currentYear) || (monthInput.value < currentMonth && currentYear >= yearInput.value) || (today > dayInput.value && currentMonth >= monthInput.value && yearInput.value <= currentYear) || dayInput.value === '' || yearInput.value === '') || (inputHour.value === '' || inputMin.value === '')) {
        thanksPage.classList.remove('selecionado')
    } else {
        bookingPage.classList.remove('selecionado')
        thanksPage.classList.add('selecionado')
    }
})
