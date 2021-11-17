
  require('es6-promise').polyfill();
  import 'nodelist-foreach-polyfill';

  import tabs from './modules/tabs';
  import timer from './modules/timer';
  import modal from './modules/modal';
  import forms from './modules/forms';
  import cards from './modules/cards';
  import slider from './modules/slider';
  import calc from './modules/calc';
  import {openModal} from './modules/modal';
  

window.addEventListener('DOMContentLoaded', () => {
    
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 100000); 
    

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    timer('.timer', '2022-01-12');
    modal('[data-modal]', '.modal', modalTimerId);
    forms('form', modalTimerId);
    cards();
    slider({
        container : '.offer__slider',
        slide : '.offer__slide',
        nextArrow: '.offer__slider-next',
        prewArrow : '.offer__slider-prev',
        totalCounter : '#total',
        currentCounter : '#current',
        wrapper : '.offer__slider-wrapper',
        field : '.offer__slider-inner'
    });
    calc();





});