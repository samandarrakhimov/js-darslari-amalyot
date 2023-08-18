// callback && promise =========================

// const getTodos = (resurse) => {
//     const request = new XMLHttpRequest()
//     return new Promise((resolve, reject) => {
//      document.addEventListener('readystatechange', () => {
    
//         if (request.readyState === 4 && request.status === 200) {
//             const data = JSON.parse(request.responseText)
//             resolve(data)
//          }
//          else if (request.readyState === 4){
//             reject('malunotni olomadm');
//          }
//         })
//         request.open('Get',resurse)
//        request.send()
//     })
// }
// getTodos('samandar.json')
// .then((data) => {
//     console.log(data);
//     return getTodos('/ahror.json')
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((err) => {
//     console.log(err);
// })
// getTodos('ahror.json',(err,data) => {
//     console.log(data);
//     getTodos('samandar.json',(err,data) => {
//         console.log(data);
//     })
// })


// const values = [
//     '0',
//     '1',
//     '2',
//     '3',
//     '4',
//     '5',
//     '6',
//     '7',
//     '8',
//     '9',
//     'a',
//     'b',
//     'c',
//     'd',
//     'e',
//     'f',
// ]
// const body = document.querySelector('body');
// const container = document.querySelector('.container');
// const colorText = document.querySelector('.color-text')


// function getGradient() {
//     let color = '#'
//     for (let i = 0; i < 6; i++) {
//         const RandomNumber = Math.trunc(Math.random() * values.length )
//       color +=  values[RandomNumber]
        
//     }
//     return color
// }


// function setGradinet() {
//     const color1 = getGradient()
//     const color2 = getGradient()
//     const randomDeg = Math.trunc(Math.random() * 360)
//     const bgColor =`linear-gradient(
//       ${randomDeg}deg,
//       ${color1},
//       ${color2}
//     )`
//     body.style.background = bgColor
//     colorText.textContent = bgColor
// }
// setGradinet()
// container.addEventListener('click',setGradinet)








// keyboard event ===========================================================
// document.addEventListener('keydown', (e) => {
//     console.log(e.key);
// })

//regux====================================================================================
// const signupform = document.getElementById('signupform');
// const username = document.getElementById('username')
// const err = document.getElementById('error')

// signupform.addEventListener('submit', (e) => {
//     e.preventDefault()
//   let val = signupform.username.value
//   console.log(val);
//   const regux = /[a-zA-Z0-9]{6,13}/

//   if (regux.test(val)) {
//     err.innerHTML = 'parol togri kirtildi '
//     err.classList.add('succes')
//     err.classList.remove('error')
//   }
//   else{
//     err.innerHTML = 'parol 6 va 13 orasida bolshi kerak iltimos togri kiring'
//     err.classList.add('error')
//    setTimeout(() => {
//    err.innerHTML = ''
//    },3000)
//   }
// })








// modal ================================================================================
// const showBtn = document.getElementById('show-btn');
// const closeBtn = document.getElementById('close-btn');
// const modal = document.getElementById('modal');
// const overlay = document.getElementById('overlay');

// showBtn.addEventListener('click',() => {
//     showBtn.classList.add('hiden')
//     modal.classList.remove('hiden')
//     overlay.classList.remove('hiden')
// })
// closeBtn.addEventListener('click',() => {
//    showBtn.classList.remove('hiden')
//    modal.classList.add('hiden')
//    overlay.classList.add('hiden')

// })