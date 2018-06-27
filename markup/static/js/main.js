'use strict';

// Cart-good
(function () {
  var cartGood = document.querySelectorAll('.cart-good__description');
  var basket = document.querySelector('.user-block__basket');
  var basketCount = basket.querySelector('.user-block__basket-count');
  var basketPrice = basket.querySelector('.user-block__basket-price--num');
  var orderTable = document.querySelector('.order__table');
  var basketTable = document.querySelector('.basket__table');
  var basketTotalPriceText = document.querySelector('.basket__total-price-number');
  var basketOrderTotalPriceText = document.querySelector('.basket__order-total-payment-num');

  for (var i = 0, len = cartGood.length; i < len; i++) {
    cartGood[i].addEventListener('click', function (evt) {
      var target = this;
      var price = evt.target.closest('.cart-good__description-label');
      var cartPrice = this.querySelector('.cart-good__description-price--text');
      var buy = evt.target.closest('.cart-good__description-button-buy');
      var buyBtn = this.querySelector('.cart-good__description-button-buy');
      var count = this.querySelector('.cart-good__description-button-count-wrap');
      var dec = evt.target.closest('.cart-good__description-button-count-icon--dec');
      var inc = evt.target.closest('.cart-good__description-button-count-icon--inc');
      var countContent = this.querySelector('.cart-good__description-button-count-text');
      
      if (price) {
        if(price.children[3].textContent === '0,8 кг') {
          cartPrice.textContent = 550;
          this.dataset.count = 1;
          countContent.textContent = this.dataset.count;
          this.dataset.basicPrice = 550;
          this.dataset.totalPrice = 550;
          cartPrice.textContent = this.dataset.totalPrice;
          buyBtn.classList.remove('hidden');
          count.classList.add('hidden');
        } else if (price.children[3].textContent === '1,2 кг') {
          cartPrice.textContent = 750;
          this.dataset.count = 1;
          countContent.textContent = this.dataset.count;
          this.dataset.basicPrice = 750;
          this.dataset.totalPrice = 750;
          cartPrice.textContent = this.dataset.totalPrice;
          buyBtn.classList.remove('hidden');
          count.classList.add('hidden');
        } else if (price.children[3].textContent === '1,4 кг') {
          cartPrice.textContent = 900;
          this.dataset.count = 1;
          countContent.textContent = this.dataset.count;
          this.dataset.basicPrice = 900;
          this.dataset.totalPrice = 900;
          cartPrice.textContent = this.dataset.totalPrice;
          buyBtn.classList.remove('hidden');
          count.classList.add('hidden');
        }
      };
      
      if (buy) {
        buy.classList.add('hidden');
        count.classList.remove('hidden');
        basket.dataset.count = parseInt(basket.dataset.count, 10) + 1;
        basket.dataset.totalPrice = parseInt(basket.dataset.totalPrice, 10) + parseInt(this.dataset.basicPrice, 10);
        basketCount.textContent = basket.dataset.count;
        basketPrice.textContent = basket.dataset.totalPrice;
      };
      
      if (dec) {
        if (parseInt(countContent.textContent, 10) > 1) {
          countContent.textContent = parseInt(countContent.textContent, 10) - 1;
          this.dataset.totalPrice = parseInt(this.dataset.totalPrice, 10) - parseInt(this.dataset.basicPrice, 10);
          this.dataset.count = parseInt(this.dataset.count, 10) - 1;
          cartPrice.textContent = this.dataset.totalPrice;
          basket.dataset.count = parseInt(basket.dataset.count, 10) - 1;
          basket.dataset.totalPrice = parseInt(basket.dataset.totalPrice, 10) - parseInt(this.dataset.basicPrice, 10);
          basketCount.textContent = basket.dataset.count;
          basketPrice.textContent = basket.dataset.totalPrice;
        }
      };
      
      if (inc) {
        countContent.textContent = parseInt(countContent.textContent, 10) + 1;
        this.dataset.totalPrice = parseInt(this.dataset.totalPrice, 10) + parseInt(this.dataset.basicPrice, 10);
        this.dataset.count = parseInt(this.dataset.count, 10) + 1;
        cartPrice.textContent = this.dataset.totalPrice;
        basket.dataset.count = parseInt(basket.dataset.count, 10) + 1;
        basket.dataset.totalPrice = parseInt(basket.dataset.totalPrice, 10) + parseInt(this.dataset.basicPrice, 10);
        basketCount.textContent = basket.dataset.count;
        basketPrice.textContent = basket.dataset.totalPrice;
      }
    });
  };
  
  if (orderTable !== null) {
    orderTable.addEventListener('click', function (evt) {
      var tdPrice = evt.target.closest('.order__table-td--price');
      var mobileTr = evt.target.closest('.order__table-prices-mobile');
      var mobilePrice = mobileTr.querySelector('.order__table-prices-currency').textContent;
      var mobileButton = evt.target.closest('.order__table-prices-buy');

      if (tdPrice) {
        basket.dataset.count = parseInt(basket.dataset.count, 10) + 1;
        basket.dataset.totalPrice = parseInt(basket.dataset.totalPrice, 10) + parseInt(tdPrice.textContent, 10);
        basketCount.textContent = basket.dataset.count;
        basketPrice.textContent = basket.dataset.totalPrice;
      };
      
      if (mobileButton) {
        basket.dataset.count = parseInt(basket.dataset.count, 10) + 1;
        basket.dataset.totalPrice = parseInt(basket.dataset.totalPrice, 10) + parseInt(mobilePrice, 10);
        basketCount.textContent = basket.dataset.count;
        basketPrice.textContent = basket.dataset.totalPrice;
      }
    });
  };
  
  if (basketTable !== null) {
    basketCount.textContent = basketTable.dataset.count;
    basketPrice.textContent = basketTable.dataset.totalPrice;
    
    basketTable.addEventListener('click', function (e) {
      var tr = e.target.closest('.basket__table-tr--price');
      var totalPriceTr = tr.querySelector('.basket__table-title-good-price--num');
      var dec = e.target.closest('.basket__table-count-button--dec');
      var inc = e.target.closest('.basket__table-count-button--inc');
      var priceText = tr.querySelector('.basket__table-count-text');
      var cancel = e.target.closest('.basket__table-cancel');

      if (dec) {
        if (parseInt(priceText.textContent, 10) > 1) {
          priceText.textContent = parseInt(priceText.textContent, 10) - 1;
          tr.dataset.totalPrice = parseInt(tr.dataset.totalPrice, 10) - parseInt(tr.dataset.basicPrice, 10);
          tr.dataset.count = parseInt(tr.dataset.count, 10) - 1;
          basketTable.dataset.count = parseInt(basketTable.dataset.count, 10) - 1;
          basketTable.dataset.totalPrice = parseInt(basketTable.dataset.totalPrice, 10) - parseInt(tr.dataset.basicPrice, 10);
          totalPriceTr.textContent = tr.dataset.totalPrice;
          basketCount.textContent = basketTable.dataset.count;
          basketPrice.textContent = basketTable.dataset.totalPrice;
          basketTotalPriceText.textContent = basketTable.dataset.totalPrice;
          basketOrderTotalPriceText.textContent = basketTable.dataset.totalPrice;
        }
      };

      if (inc) {
        priceText.textContent = parseInt(priceText.textContent, 10) + 1;
        tr.dataset.totalPrice = parseInt(tr.dataset.totalPrice, 10) + parseInt(tr.dataset.basicPrice, 10);
        tr.dataset.count = parseInt(tr.dataset.count, 10) + 1;
        basketTable.dataset.count = parseInt(basketTable.dataset.count, 10) + 1;
        basketTable.dataset.totalPrice = parseInt(basketTable.dataset.totalPrice, 10) + parseInt(tr.dataset.basicPrice, 10);
        totalPriceTr.textContent = tr.dataset.totalPrice;
        basketCount.textContent = basketTable.dataset.count;
        basketPrice.textContent = basketTable.dataset.totalPrice;
        basketTotalPriceText.textContent = basketTable.dataset.totalPrice;
        basketOrderTotalPriceText.textContent = basketTable.dataset.totalPrice;
      };
      
      if (cancel) {
        basketTable.dataset.totalPrice = parseInt(basketTable.dataset.totalPrice, 10) - parseInt(tr.dataset.totalPrice, 10);
        basketTable.dataset.count = parseInt(basketTable.dataset.count, 10) - parseInt(tr.dataset.count, 10)
        basketPrice.textContent = basketTable.dataset.totalPrice;
        basketCount.textContent = basketTable.dataset.count;
        basketTotalPriceText.textContent = basketTable.dataset.totalPrice;
        basketOrderTotalPriceText.textContent = basketTable.dataset.totalPrice;
        tr.remove();
      }
    });
  }
})();

// Slider
(function () {
  var slider = document.querySelector('.best-sellers__slider');
  
  if (slider !== null) {
    $(document).ready(function(){
      $(".best-sellers__slider").owlCarousel({
        slideTransition: 'ease',
        smartSpeed: 200,
        autoplay: false,
        nav: true,
        responsive: {
          1441: {
            items: 5,
            margin: 25
          },
          1300: {
            items: 5,
            margin: 10
          },
          1200: {
            items: 4,
            margin: 10
          },
          1000: {
            items: 3,
            margin: 10
          },
          500: {
            items: 2,
            margin: 10
          },
          320: {
            items: 1,
            margin: 0
          }
        }
      });
    });
  }
})();

// Sticky header
(function () {
  var header = document.querySelector('.page-header__content');
  var nav = header.querySelector('.main-nav');
  
  if (nav !== null) {
    document.addEventListener('scroll', function () {
      if (document.body.clientWidth > 1000) {
        var navPos = nav.getBoundingClientRect();
        var docPosition = document.documentElement.scrollTop || document.body.scrollTop;

        if (navPos.top <= 0) {
          header.classList.add('page-header__content--sticky');
        }

        if (docPosition < 306) {
          header.classList.remove('page-header__content--sticky');
        }
      }
    });
  } else {
    document.addEventListener('scroll', function () {
      if (document.body.clientWidth > 1000) {
        var headerPos = header.getBoundingClientRect();
        var docPosition = document.documentElement.scrollTop || document.body.scrollTop;

        if (headerPos.top <= 0) {
          header.classList.add('page-header__content--sticky');
        }

        if (docPosition < 120) {
          header.classList.remove('page-header__content--sticky');
        }
      }
    });
  };
})();

// select
(function () {
  var select = document.querySelector('.basket__order-description-select');
  
  if (select !== null) {
    var selectInput = select.querySelector('.basket__order-description-select-input');
    var selectContent = select.querySelector('.basket__order-description-select-content');
    
    select.addEventListener('click', function (evt) {
      var text = evt.target.closest('.basket__order-description-select-text');
      
      this.classList.add('basket__order-description-select--open');
      selectContent.classList.remove('hidden');
      
      if (text) {
        selectInput.value = text.textContent;
        this.classList.remove('basket__order-description-select--open');
        selectContent.classList.add('hidden');
      }
    });
  }
})();

// Page-header
(function () {
  var header = document.querySelector('.page-header');
  var button = header.querySelector('.logo__burger-icon');
  var closeButton = header.querySelector('.main-nav__close');
  var nav = header.querySelector('.main-nav');
  
  if (button !== null) {
    button.addEventListener('click', function () {
      nav.classList.add('main-nav--open');
      document.body.style.overflow = 'hidden';
    });

    closeButton.addEventListener('click', function () {
      nav.classList.remove('main-nav--open');
      document.body.style.overflow = 'auto';
    });
  }
})();
