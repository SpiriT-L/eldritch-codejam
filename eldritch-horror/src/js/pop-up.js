'use strict';

const btnLogin = document.querySelector('.login__btn');
const popup = document.querySelector('.pop-up');
const form = document.getElementById('login');
const create = document.getElementById('create');
const userEmail = document.getElementById('userEmail');
const submitBtn = document.querySelector('.pop-up__btn-submit');
const registr = document.querySelector('.pop-up__registr-block');
const login = document.querySelector('.pop-up__login-block');
const wrapperLogin = document.querySelector('.pop-up__wrapper-login');
const wrapperCreate = document.querySelector('.pop-up__wrapper-create');

const btnLoginClick = (event) => {
  popup.classList.toggle('hiden');
};

const closePopup = (event) => {
  if (event.target.classList.contains('pop-up')) {
    popup.classList.toggle('hiden');
  }
};

const sabmitAlert = (event) => {
  event.preventDefault();

  let emailInput = document.getElementById('userEmail').value;
  let passInput = document.getElementById('userPass').value;
  console.log(emailInput);
  alert('Email: ' + `${emailInput}` + '\n' + 'Password: ' + `${passInput}`);
};

const registrPopup = (event) => {
  if (wrapperCreate.classList.contains('hide')) {
    wrapperCreate.classList.remove('hide');
    wrapperLogin.classList.add('hide');
  }
};
const loginPopup = (event) => {
  if (wrapperLogin.classList.contains('hide')) {
    wrapperLogin.classList.remove('hide');
    wrapperCreate.classList.add('hide');
  }
};

btnLogin.addEventListener('click', btnLoginClick);
// btnLoginMob.addEventListener('click', btnLoginClick);
popup.addEventListener('click', closePopup);
form.addEventListener('submit', sabmitAlert);
create.addEventListener('submit', sabmitAlert);
registr.addEventListener('click', registrPopup);
login.addEventListener('click', loginPopup);
