const refs = {
  mainText: document.querySelector('.main-text'),
  afterMainSection: document.querySelector('.overlay'),
  logo: document.querySelector('.samsung-logo'),
  mainSection: document.querySelector('.main-section'),
  photoSection: document.querySelector('.photo-section'),
  count: document.querySelector('.count'),
  subText: document.querySelector('.sub-text'),
  img: document.querySelector('.photo-carusel'),
  nextBtn: document.querySelector('.swiper-button-next'),
  prevBtn: document.querySelector('.swiper-button-prev'),
  textSection: document.querySelector('.text-area'),
  shopNow: document.querySelector('.shop-now'),
};

refs.logo.addEventListener('animationend', () => {
  refs.mainText.classList.add('slide-in-from-left');
});

refs.mainText.addEventListener('animationend', () => {
  setTimeout(refs.photoSection.classList.add('scale-up-and-back'), 4000);
  setTimeout(refs.afterMainSection.classList.add('slide-in-from-left13'), 3000);
  setTimeout(refs.mainText.classList.add('mt23', 5000));
  setTimeout(refs.textSection.classList.add('opacity'), 5000);
});

const swiper = {
  1: {
    urls: {
      desc: './img/carusel-1.png 1x, ./img/carusel-1-2x@2x.png 2x',
      mob: './img/carusel-1-mob.png 1x, ./img/carusel-1-2x@2x-mob.png 2x',
    },
    text: '“The first time I used the Samsung Bespoke Jet™, I cried. I’m not being sensational; I really did. Of course, this vacuum worked great. But that’s not all.”',
  },
  2: {
    urls: {
      desc: './img/carusel-2.png 1x, ./img/carusel-2-2x@2x.png 2x',
      mob: './img/carusel-2-mob.png 1x, ./img/carusel-2-2x@2x-mob.png 2x',
    },
    text: '“If you’re an over-cleaner, like myself, you’ll nerd out on all of the functions. If you avoid this chore at all costs, you’ll appreciate how simple Samsung makes it.”',
  },
  3: {
    urls: {
      desc: './img/carusel-3.png 1x, ./img/carusel-3-2x@2x.png 2x',
      mob: './img/carusel-3-mob.png 1x, ./img/carusel-3-2x@2x-mob.png 2x',
    },
    text: '“Both the floor and pet hair attachments are cleverly designed to eliminate the dreaded hair wrap. (In other words, you’ll never have to tackle hair tangles with a pair of scissors again.)”',
  },
  4: {
    urls: {
      desc: './img/carusel-4.png 1x, ./img/carusel-4-2x@2x.png 2x',
      mob: './img/carusel-4-mob.png 1x, ./img/carusel-4-2x@2x-mob.png 2x',
    },
    text: '“When I learned the Samsung Bespoke Vac cleaned itself with amazing technology, that’s when I cried. No more scraping spider legs and hair out of the crevices with my hands. Its suction power is so strong, the canister is left perfectly clean after every use. It’s like a vacuum for your vacuum.”',
  },
  5: {
    urls: {
      desc: './img/carusel-5.png 1x, ./img/carusel-5-2x@2x.png 2x',
      mob: './img/carusel-5-mob.png 1x, ./img/carusel-5-2x@2x-mob.png 2x',
    },
    text: '“Because it’s so nice-looking, it can live right in the kitchen. No more hauling a vacuum up and down the basement stairs on the daily”',
  },
};

let count = 1;
let autoplay = true;

function autoplaySlides() {
  if (autoplay) {
    setTimeout(() => {
      slideTo(count);
      count = (count % Object.keys(swiper).length) + 1;
      autoplaySlides();
    }, 4000);
  }
}

function slideTo(count) {
  refs.subText.textContent = swiper[`${count}`].text;
  refs.count.textContent = count;
  refs.photoSection.innerHTML = `<picture>
            <source
              media="(max-width:767px)"
              srcset=${swiper[`${count}`].urls.mob}
            />
            <source
              media="(min-width:768px)"
              srcset=${swiper[`${count}`].urls.desc}
            />
            <img
              srcset=${swiper[`${count}`].urls.desc}
              class="photo-carusel"
            />
          </picture>`;
}

autoplaySlides();

refs.nextBtn.addEventListener('click', () => {
  autoplay = false;
  count = (count % Object.keys(swiper).length) + 1;
  slideTo(count);
  console.log('next clicked');
});

refs.prevBtn.addEventListener('click', () => {
  autoplay = false;
  count = ((count - 2) % Object.keys(swiper).length) + 1;
  slideTo(count);
  console.log('prev clicked');
});

refs.shopNow.addEventListener('mouseenter', () => {
  refs.shopNow.classList.add('animation-none');
});
