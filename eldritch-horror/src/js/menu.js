'use strict';

const menuIcon = document.querySelector('.menu__icon');
const myMenu = document.querySelector('.menu');
const menuList = document.querySelector('.menu__list');
const myBody = document.querySelector('.body');
const closeMenu = document.querySelector('.menu__close');
const overlayMenu = document.querySelector('.menu__overlay');
const menuItem = document.querySelector('.menu__item');
const menuItemAccount = document.querySelector('.menu__item-account');

const addLinckMenu = () => {
  if (!menuList.classList.contains('menu__item-account')) {
    const account = document.createElement('li');
    const socialMedia = document.createElement('li');
    const accountLinck = document.createElement('a');
    const socialMediaLinck = document.createElement('a');

    account.classList.add('menu__item', 'menu__item-account', 'login__btn');
    socialMedia.classList.add('menu__item', 'menu__item-account', '_social');
    accountLinck.classList.add('menu__link');
    socialMediaLinck.classList.add('menu__link');
    document.querySelector('ul').appendChild(account);
    document.querySelector('ul').appendChild(socialMedia);
    account.append(accountLinck);
    socialMedia.append(socialMediaLinck);
    accountLinck.href = '#';
    socialMediaLinck.href = '#';
    accountLinck.appendChild(document.createTextNode('Account'));
    socialMediaLinck.appendChild(document.createTextNode('Social Media'));
  } else {
    menuItemAccount.parentNode.removeChild(menuItemAccount);
    menuItemAccount.remove(menuItemAccount);
  }
  console.log(menuList.classList);
};

const menuActive = (event) => {
  if (myMenu.classList.contains('menu__active')) {
  
    myMenu.classList.remove('menu-active');
    menuList.classList.remove('menu__list-active');
    menuItemAccount.parentNode.removeChild(menuItemAccount);
    menuItemAccount.remove();
  } else {
    myMenu.classList.toggle('menu-active');
    menuList.classList.toggle('menu__list-active');
  }
};

const addLincksMenu = (event) => {
  if (!menuItem.classList.contains('menu__item-account')) {
    addLinckMenu();
  }
};

menuIcon.addEventListener('click', menuActive);
menuIcon.addEventListener('click', addLincksMenu);
closeMenu.addEventListener('click', menuActive);
overlayMenu.addEventListener('click', menuActive);
