let jsonFile =

[
    {"monday":{
        "day": "mon",
        "amount": "17.45px",
        "price": "$17.45"
    }},
    {"tuesday":{
        "day": "tue",
        "amount": "34.91px",
        "price": "$34.91"
    }},
    {"wednesday":{
        "day": "wed",
        "amount": "52.36px",
        "price": "$52.36"
    }},
    {"thursday":{
        "day": "thu",
        "amount": "31.07px",
        "price": "$31.07"
    }},
    {"friday":{
        "day": "fri",
        "amount": "23.39px",
        "price": "$23.39"
    }},
    {"saturday":{
        "day": "sat",
        "amount": "43.28px",
        "price": "$43.28"
    }},
    {"sunday":{
        "day": "sun",
        "amount": "25.48px",
        "price": "$25.48"
    }}
]

const monBox = document.querySelector('.mon-box')
const tueBox = document.querySelector('.tue-box')
const wedBox = document.querySelector('.wed-box')
const thuBox = document.querySelector('.thu-box')
const friBox = document.querySelector('.fri-box')
const satBox = document.querySelector('.sat-box')
const sunBox = document.querySelector('.sun-box')

const monPrice = document.querySelector('.mon-price')
const tuePrice = document.querySelector('.tue-price')
const wedPrice = document.querySelector('.wed-price')
const thuPrice = document.querySelector('.thu-price')
const friPrice = document.querySelector('.fri-price')
const satPrice = document.querySelector('.sat-price')
const sunPrice = document.querySelector('.sun-price')


monBox.style.height = jsonFile[0].monday.amount
tueBox.style.height = jsonFile[1].tuesday.amount
wedBox.style.height = jsonFile[2].wednesday.amount
thuBox.style.height = jsonFile[3].thursday.amount
friBox.style.height = jsonFile[4].friday.amount
satBox.style.height = jsonFile[5].saturday.amount
sunBox.style.height = jsonFile[6].sunday.amount

monPrice.innerHTML = jsonFile[0].monday.price
tuePrice.innerHTML = jsonFile[1].tuesday.price
wedPrice.innerHTML = jsonFile[2].wednesday.price
thuPrice.innerHTML = jsonFile[3].thursday.price
friPrice.innerHTML = jsonFile[4].friday.price
satPrice.innerHTML = jsonFile[5].saturday.price
sunPrice.innerHTML = jsonFile[6].sunday.price

monBox.addEventListener("mouseover", () => {
    monPrice.classList.remove('hidden')
})
monBox.addEventListener("mouseout", () => {
    monPrice.classList.add('hidden')
})

tueBox.addEventListener("mouseover", () => {
    tuePrice.classList.remove('hidden')
})
tueBox.addEventListener("mouseout", () => {
    tuePrice.classList.add('hidden')
})

wedBox.addEventListener("mouseover", () => {
    wedPrice.classList.remove('hidden')
})
wedBox.addEventListener("mouseout", () => {
    wedPrice.classList.add('hidden')
})

thuBox.addEventListener("mouseover", () => {
    thuPrice.classList.remove('hidden')
})
thuBox.addEventListener("mouseout", () => {
    thuPrice.classList.add('hidden')
})

friBox.addEventListener("mouseover", () => {
    friPrice.classList.remove('hidden')
})
friBox.addEventListener("mouseout", () => {
    friPrice.classList.add('hidden')
})

satBox.addEventListener("mouseover", () => {
    satPrice.classList.remove('hidden')
})
satBox.addEventListener("mouseout", () => {
    satPrice.classList.add('hidden')
})

sunBox.addEventListener("mouseover", () => {
    sunPrice.classList.remove('hidden')
})
sunBox.addEventListener("mouseout", () => {
    sunPrice.classList.add('hidden')
})

