import Cursor from './cursor';
import Revealer from './revealer';
import { preloadImages } from './utils';

// Preload images
preloadImages('.layers__item-img').then(() => {
    document.body.classList.remove('loading');

    const revealer = new Revealer();
    document.querySelector('.menu__item--current').addEventListener('click', () => {
        revealer.reveal();
    });
});

const cursor = new Cursor(document.querySelector('.cursor'));

[...document.querySelectorAll('a')].forEach(el => {
    el.addEventListener('mouseenter', () => cursor.emit('enter'));
    el.addEventListener('mouseleave', () => cursor.emit('leave'));
});