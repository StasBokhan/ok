const btn = document.querySelector(".btn-to-top");
const form = document.querySelector('.feedback-form');
const secForm = document.querySelector('.form-feed');
const closeForm = document.querySelector('.close-form');
const feedbackname = document.querySelector('.feedback-name');
const feedbackEmail = document.querySelector('.feedback-email');
const feedbackComment = document.querySelector('.feedback-comment');
const submit = document.querySelector('.submit');
const nameLabel = document.querySelector('.name');
const emailLabel = document.querySelector('.email');
const commentLabel = document.querySelector('.comment');


// Открытие и закрытие формы комментария

const feedbackBtn = document
.querySelector(".btn.fifth-section")
.addEventListener("click", () => {
     if(form.style.display = 'none') {
       form.style.display = 'flex';
     } else {
     }
  });
closeForm.addEventListener('click', ()=> {
    form.style.display = 'none';
})

const arr = [];


// Проверка инпутов на пустоту

const checkInputs = () => {
  if(feedbackname.value != '') {
    nameLabel.style.display = 'none';
  } else {
    nameLabel.style.display = 'inline';
  }
  if(feedbackEmail.value != '') {
    emailLabel.style.display = 'none';
  } else {
    emailLabel.style.display = 'inline';
  }

  if(feedbackComment.value != '') {
    commentLabel.style.display = 'none';
  } else {
    commentLabel.style.display = 'inline';
  }
}

setInterval(checkInputs,100);



// проверка перед отправкой формы, заполнение LocalStorage

submit.addEventListener('click', () => {
  if(feedbackname != '' && feedbackEmail != '' && feedbackComment != '') {
    const obj = {
      'feedbackName' : feedbackname.value,
      'feedbackEmail' : feedbackEmail.value,
      'feedbackComment' : feedbackComment.value,
    }
    feedbackname.value = '';
    feedbackEmail.value = '';
    feedbackComment.value = '';
    arr.push(obj);
    localStorage.setItem('arrWithComments', arr);
  }
})





// кнопка вверх
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 650
  ) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
}

btn.addEventListener("click", () => {
  window.scrollTo({
    top: 0 + "px",
    behavior: "smooth",
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


// подписка на новости, отпрака имэйла в Local Storage

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

// валидация emailа

function emailTest(input) {
  const re =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return re.test(input.value);
}

// отправка данных либо вывод об ошибке

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
