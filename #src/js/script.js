$(document).ready(function () {
    $('.slick').slick({
        dots: true,
    });
    $('.bestsellers__columns').slick({
        slidesToShow: 4,
        dots: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 1621,
                settings: 'unslick',
            },
        ],
    });
    $('.bakery-team__slider').slick({
        dots: true,
    });
    $('.cake-info__big-slider').slick({
        arrows: false,
        asNavFor: '.cake-info__small-slider',
    });
    $('.cake-info__small-slider').slick({
        slidesToShow: 3,
        asNavFor: '.cake-info__big-slider',
        focusOnSelect: true,
        arrows: true,
        dots: true,
    });
    $('.cake-info__content-slider').slick({
        slidesToShow: 3,
        infinite: false,
        responsive: [
            {
                breakpoint: 1250,
                settings: 'unslick',
            },
        ],
    });
    $('.address__tab').on('click', function () {
        var $this = $(this);
        if (!$this.is('._active')) {
            $('.address__tab').removeClass('_active');
            $this.addClass('_active');
            $('.address__bakery').removeClass('_active');
            $('.address__bakery[data-id=' + $this.data('id') + ']').addClass(
                '_active'
            );
            $('.address__tabs-content').removeClass('_active');
            $(
                '.address__tabs-content[data-id=' + $this.data('id') + ']'
            ).addClass('_active');
        }
        return false;
    });
});

let navList = document.querySelector('.header__nav-list');
let navIcon = document.querySelector('.header__nav-icon');
navIcon.addEventListener('click', function () {
    navList.classList.toggle('_active');
    this.classList.toggle('_active');
    body.classList.toggle('lock');
});

let tabsItem = document.querySelectorAll('.cake-collection__tabs-item');
let cakeCollection = document.querySelectorAll('.cake-collection__columns');
for (let elem of tabsItem) {
    elem.addEventListener('click', function () {
        for (let elem of tabsItem) {
            elem.classList.remove('_active');
        }
        this.classList.add('_active');
        for (let elem of cakeCollection) {
            elem.classList.remove('_active');
            if (this.dataset.id == elem.dataset.id) {
                elem.classList.add('_active');
            }
        }
    });
}

let cakeGalleryNavItem = document.querySelectorAll('.cake-gallery__nav-link');
for (elem of cakeGalleryNavItem) {
    elem.addEventListener('click', function () {
        if (window.innerWidth <= 920) {
            event.preventDefault();
            let cakeGalleryNav2 = this.parentElement.querySelector(
                '.cake-gallery__nav2'
            );
            if (cakeGalleryNav2) {
                cakeGalleryNav2.classList.toggle('_active');
                this.parentElement
                    .querySelector('.cake-gallery__nav-btn')
                    .classList.toggle('_active');
            }
        }
    });
}

let headerBasket = document.querySelector('.header__basket .icon-1');
let headerBasketSmall = document.querySelector('.header__basket-small');
headerBasket.onmouseover = function () {
    if (window.innerWidth >= 540) {
        headerBasketSmall.classList.add('_active');
    }
};
headerBasketSmall.onmouseleave = function () {
    if (window.innerWidth >= 540) {
        headerBasketSmall.classList.remove('_active');
    }
};

let cakeGalleryBlock = document.querySelector('.cake-gallery__block');
let cakeGalleryColumns = document.querySelector('.cake-gallery__columns');
if (window.innerWidth <= 920 && cakeGalleryBlock) {
    cakeGalleryBlock.remove();
    cakeGalleryColumns.prepend(cakeGalleryBlock);
}

let cakeInfoContentBack = document.querySelector('.cake-info__content-back');
let cakeInfoInner = document.querySelector('.cake-info__inner');
if (window.innerWidth <= 950 && cakeInfoContentBack) {
    cakeInfoContentBack.remove();
    cakeInfoInner.prepend(cakeInfoContentBack);
}

let orderDataBack = document.querySelector('.order__data-back');
let order = document.querySelector('.order');
if (window.innerWidth <= 1120 && orderDataBack) {
    orderDataBack.remove();
    order.prepend(orderDataBack);
}
