'use strict';

// Cart-good
(function () {
  var cartGood = document.querySelectorAll('.cart-good__description');
  var basket = document.querySelector('.user-block__basket');
  var basketCount = basket.querySelector('.user-block__basket-count');
  var basketPrice = basket.querySelector('.user-block__basket-price--num');

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
  }
})();

// Slider
(function () {
  $(document).ready(function(){
    $(".best-sellers__slider").owlCarousel({
      items: 5,
      slideTransition: 'ease',
      smartSpeed: 200,
      margin: 25,
      autoplay: false,
      nav: true
    });
  });
})();
