// находим кнопочки

const allBtns = document.querySelectorAll(".inp");
const output = document.querySelector(".count");

allBtns.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.classList.add("active");
  });
  item.addEventListener("click", () => {
    output.value = item.dataset.value + '$';
  });
});
allBtns.forEach((item) => {
  item.addEventListener("mouseleave", () => {
    item.classList.remove("active");
  });
});

 // бургер меню

const burgerMenu = document.querySelector(".burger-menu"),
  headerMenu = document.querySelector(".header__menu"),
  containerHeaderInner = document.querySelector(".container.header__inner"),
  headerMenuColumnHeaderMenuColumnFirst = document.querySelector(
    ".header__menu-column.header__menu-column--first"
  ),
  headerMenuList = document.querySelector(".header__menu-list"),
  headerLink = document.querySelectorAll(".header__menu-link"),
  column = document.querySelector(
    ".header__menu-column.header__menu-column--first"
  );

burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  headerMenu.classList.toggle("active");
  containerHeaderInner.classList.toggle("active");
  headerMenuColumnHeaderMenuColumnFirst.classList.toggle("active");
  column.classList.toggle("active");
  headerMenuList.classList.toggle("active");
  headerLink.forEach((item) => {
    item.classList.toggle("active");
  });
});


 // проверяем чекбоксы
 
const checkMonthly = document.querySelector('.chech.month');
const checkOnce = document.querySelector('.chech.once');

let choice = '';

console.log(checkOnce, checkMonthly);

checkMonthly.addEventListener('click', () => {

  if(checkOnce.style.backgroundColor == 'green') {
     checkOnce.style.background = 'rgba(255, 255, 255, 0.52)';
  }




  if(checkMonthly.style.backgroundColor != 'green') {
    checkMonthly.style.backgroundColor = 'green';
  } else {
    checkMonthly.style.background = 'rgba(255, 255, 255, 0.52)';
  }

  choice = 'M';
})

checkOnce.addEventListener('click', () => {
  
  if(checkMonthly.style.backgroundColor == 'green') {
    checkMonthly.style.background = 'rgba(255, 255, 255, 0.52)';
 }

  if(checkOnce.style.backgroundColor != 'green') {
    checkOnce.style.backgroundColor = 'green';
  } else {
    checkOnce.style.background = 'rgba(255, 255, 255, 0.52)';
  }

  choice = 'O';
})





// валидация доната 




const subscribeInput = document.querySelector('.fot-input');
const emailSubmit = document.querySelector('.email .btn');
// console.log(submitEmail);

const chechSubscribeInput = () => {
  if (emailTest(subscribeInput)) {
    subscribeInput.style.color = 'green';
  } else if (!emailTest(subscribeInput)) {
    subscribeInput.style.color = 'red'
  }
  if (subscribeInput.value == '') {
    subscribeInput.style.color = 'orange';
  }
} 
function emailTest(input) {
  const re =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return re.test(input.value);
}

const submitEmail = () => {
  if(!subscribeInput.value) {
  alert('Вы не ввели данные');
  return;
  }
  if(subscribeInput.style.color === 'green') {
    subscribeInput.value = '';
    alert('Данные успешно отправлены');
  }
  else {
    alert('Неверно введённые данные');
  }
}
emailSubmit.addEventListener('click', submitEmail);
setInterval(chechSubscribeInput,100);


// проверка отправления доната

const feedBtn = document.querySelector('.feed-a-friend-btn');
const donateInput = document.querySelector('.count');

const checkDonateInput = () => {
  if(isNaN(donateInput.value)) {
    console.log('1');
    donateInput.style.color = 'red';
    donateInput.style.borderColor = 'red';
  } else {
    donateInput.style.color = 'green';
    donateInput.style.borderColor = 'green';
  }
}
window.addEventListener('click', () => {
  if(donateInput.value === '') {
    donateInput.style.color = '#141414;'
    donateInput.style.borderColor =  '#929699';
  }
})
donateInput.addEventListener('input', checkDonateInput);



feedBtn.addEventListener('click', () => {

  if(donateInput.style.color != 'green') {
    alert('Вы ввели неверный формат');
    return;
  }


  if(choice == '') {
    alert('Вы не выбрали план оплаты');
    return;
  }
    if(choice == 'M') {
      alert('Вы успешно оплатили месячную подписку');
    } else {
      alert('Вы успешно произвели одиночную оплату');
    }
})







