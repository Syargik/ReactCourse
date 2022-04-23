import './App.css';

function App() {
  return (
    <div className="App">
      <svg display="none">
        <symbol id="logo" viewBox="0 0 60 60">
          <path
            d="M27.1809 59.9409C27.1622 59.9106 26.8094 59.8779 26.3971 59.8683C25.9847 59.8584 25.2547 59.785 24.7749 59.7051C20.5702 59.0045 16.3204 57.4796 13.4889 55.6556C12.9657 55.3185 12.8461 55.1884 12.9321 55.0493C12.9947 54.9482 13.2026 54.9996 14.4143 55.4155C14.9941 55.6145 15.8939 55.8695 16.4137 55.9822C17.2932 56.1727 17.4726 56.1869 18.9948 56.187C21.2785 56.187 22.0607 56.0577 24.5484 55.269C29.2868 53.7666 30.4723 53.76 35.1793 55.2091C37.8827 56.0415 38.946 56.2254 41.0505 56.2247C42.5817 56.2243 44.0207 55.9545 45.7505 55.3432C46.2103 55.1808 46.6727 55.0317 46.7779 55.012C46.9836 54.9735 47.0835 55.0604 47.0209 55.2232C46.9254 55.472 44.5079 56.8218 43.0241 57.4548C40.1304 58.6891 35.643 59.8322 33.5718 59.8625C33.1513 59.8687 32.7889 59.9033 32.7665 59.9397C32.717 60.0193 27.2301 60.0205 27.1809 59.9409ZM16.3409 54.0733C12.5739 53.5173 9.30804 51.8135 6.5237 48.9516C5.00699 47.3927 3.88666 45.7769 2.75711 43.5188C1.27915 40.5645 0.226076 36.7539 0.0455478 33.7061C-0.0161067 32.666 -0.014798 26.8854 0.04722 25.897C0.173655 23.8829 0.910019 20.9255 1.92325 18.3621C2.312 17.3785 3.34297 15.2343 3.83642 14.3832C3.98692 14.1235 4.14775 13.8457 4.19385 13.7658C5.18751 12.0402 7.09669 9.62045 8.78347 7.94873C10.3124 6.43349 11.7774 5.24993 13.5417 4.1048C14.0815 3.75444 14.605 3.41201 14.705 3.3438C15.0745 3.09173 17.3128 1.95851 18.1307 1.60932C19.9436 0.835313 22.0153 0.156835 22.6325 0.135042C22.8342 0.12785 23.0161 0.0945802 23.0369 0.0610195C23.0576 0.0274588 23.2457 0 23.4548 0C23.7763 0 23.8365 0.0212842 23.8453 0.138238C23.8538 0.251124 23.7395 0.312434 23.2246 0.471666C21.068 1.1383 18.592 2.31692 16.2042 3.81372C14.4102 4.93822 12.3072 6.69711 10.5681 8.52755C6.11284 13.217 3.52037 18.857 2.73151 25.5772C2.57774 26.8873 2.55746 30.3642 2.69654 31.5993C3.54967 39.1805 6.82746 45.1894 11.6878 48.0823C13.5021 49.1622 15.4951 49.7334 17.7223 49.8119C19.5274 49.8753 20.6818 49.6384 23.9467 48.5345C27.0168 47.4966 27.8481 47.2771 29.1928 47.1498C30.0903 47.0648 31.1528 47.1418 32.1942 47.3672C32.8148 47.5016 35.4005 48.3078 36.8075 48.8057C38.9725 49.5719 40.5767 49.8698 42.2241 49.8119C44.9235 49.7169 47.286 48.8951 49.4339 47.304C53.6459 44.1837 56.49 38.4675 57.2477 31.5995C57.3711 30.4813 57.3722 27.0844 57.2495 25.9334C56.7085 20.8555 55.2103 16.5486 52.6128 12.6036C50.0636 8.73196 46.4511 5.32707 42.4422 3.01741C40.7999 2.07132 38.3112 0.964181 36.7166 0.470577C36.2121 0.314396 36.0805 0.245386 36.0805 0.136858C36.0805 0.0214295 36.1364 0.000145285 36.4396 0.000145285C36.6372 0.000145285 36.8155 0.0271682 36.836 0.0602204C36.8564 0.0932 37.0589 0.127778 37.2859 0.136931C38.3045 0.178119 41.5517 1.38529 43.763 2.54488C50.8293 6.25043 55.9943 12.3048 58.5982 19.9349C59.2764 21.9221 59.8357 24.4856 59.8595 25.7154C59.8669 26.0964 59.9096 26.4525 59.9549 26.5103C60.0191 26.5922 60.0156 26.6022 59.9388 26.556C59.8592 26.5082 59.8563 26.5263 59.9234 26.6514C60.0243 26.8397 59.9855 32.1766 59.8703 33.9603C59.784 35.2981 59.5495 36.635 59.0933 38.3914C57.5673 44.2664 54.404 48.9458 50.1126 51.6766C48.5839 52.6494 46.3338 53.5596 44.581 53.9143C43.8475 54.0627 43.5433 54.0822 41.9696 54.0822C39.5962 54.0822 38.4446 53.8865 35.2079 52.9326C31.8053 51.9298 31.3616 51.837 29.9731 51.837C28.5844 51.837 28.1397 51.9301 24.7383 52.9327C21.6163 53.8529 20.5238 54.0466 18.2675 54.0802C17.3278 54.0941 16.4608 54.0911 16.3409 54.0733ZM16.5954 47.3661C15.1403 47.2073 13.9619 46.8565 12.5602 46.1651C10.6644 45.2298 9.06746 43.7643 7.69143 41.6967C7.04071 40.7189 6.4691 39.6746 6.51687 39.5504C6.59539 39.3459 6.8716 39.4466 7.28733 39.8311C8.196 40.6715 10.2789 42.2052 10.5118 42.2052C10.5525 42.2052 10.6374 42.2517 10.7005 42.3082C10.8557 42.4474 12.0699 42.9759 12.742 43.1967C14.0902 43.6397 15.8305 43.8436 17.2861 43.729C18.9945 43.5947 20.2113 43.3071 22.121 42.5865C25.1308 41.4509 26.7375 41.0548 28.9783 40.8961C30.6464 40.7779 32.603 40.9664 34.3719 41.4159C35.227 41.6332 36.1761 41.944 37.6074 42.4754C39.1577 43.0512 40.0205 43.3104 41.0322 43.5046C44.4239 44.1555 47.5417 43.5563 50.3309 41.7174C51.176 41.1602 52.3921 40.2012 52.8358 39.7422C53.1323 39.4354 53.4259 39.3517 53.503 39.5522C53.5778 39.7469 52.4918 41.5776 51.649 42.6773C51.1851 43.2828 50.1748 44.3224 49.5674 44.8193C48.0995 46.0202 46.212 46.8889 44.2599 47.2618C43.3573 47.4343 41.1923 47.4359 40.1884 47.2648C39.0751 47.0752 37.9092 46.7437 36.5895 46.2419C33.6604 45.1281 32.1823 44.8049 30.0096 44.8028C29.075 44.802 28.5555 44.8394 27.8793 44.9559C26.2664 45.2341 25.629 45.4238 22.8706 46.4478C21.8655 46.8209 20.8728 47.0866 19.8661 47.2518C19.0321 47.3889 17.3435 47.4479 16.5954 47.3661Z" />
          <path
            d="M24.9209 35.5078L17.4323 17.6227C16.9007 16.3915 16.3691 15.5382 15.8375 15.063C15.3059 14.5878 14.6934 14.307 14 14.2206V13.5726C14.0925 13.5726 14.3236 13.5618 14.6934 13.5402C15.0401 13.5186 15.2943 13.5078 15.4561 13.5078C16.2651 13.5078 17.0971 13.5942 17.9523 13.767C18.8075 13.9182 19.6165 14.2854 20.3792 14.8686C21.1419 15.4518 21.7891 16.3699 22.3207 17.6227L27.0011 28.8009L30.1213 20.5063L28.9079 17.6227C28.3763 16.3915 27.7985 15.5382 27.1744 15.063C26.5735 14.5878 25.9263 14.307 25.2329 14.2206V13.5726C25.3254 13.5726 25.5334 13.5618 25.857 13.5402C26.1806 13.5186 26.4233 13.5078 26.585 13.5078C27.394 13.5078 28.2261 13.5942 29.0813 13.767C29.9364 13.9398 30.7454 14.3178 31.5081 14.901C32.2709 15.4626 32.918 16.3699 33.4496 17.6227L38.4074 29.4165L44.3359 13.8318H46L37.7833 35.5078H36.3965L31.0574 22.8068L26.3077 35.5078H24.9209Z" />
        </symbol>
        <symbol id="right" viewBox="0 0 28 14">
          <path d="M28 0H14C6.26801 0 0 6.26801 0 14H14C21.732 14 28 7.73199 28 0Z" />
        </symbol>
        <symbol id="left" viewBox="0 0 28 14">
          <path d="M0 0H14C21.732 0 28 6.26801 28 14H14C6.26801 14 0 7.73199 0 0Z" />
        </symbol>
      </svg>

      <div className="wrapper">
        <header className="header">
          <div className="header__container _container">
            <div className="header__body">
              <a href="#" className="header__logo">
                <svg className="logo">
                  <use xlinkHref="#logo"></use>
                </svg>
              </a>
              <nav className="header__menu">
                <ul className="menu__list">
                  <li className="menu__item">
                    <a href="#" className="menu__link">Главная</a>
                  </li>
                  <li className="menu__item">
                    <a href="#" className="menu__link">Сеансы</a>
                  </li>
                  <li className="menu__item">
                    <a href="#" className="menu__link">Отзывы</a>
                  </li>
                  <li className="menu__item">
                    <a href="#" className="menu__link">Контакты</a>
                  </li>
                  <li className="menu__item">
                    <a href="#" className="menu__link">Новости</a>
                  </li>
                  <li className="menu__item">
                    <a href="#" className="menu__link">Обо мне</a>
                  </li>
                  <li className="menu__item">
                    <a href="#" className="menu__link">Блог</a>
                  </li>
                </ul>
              </nav>
              <button className="button">
                Записаться на сеанс
              </button>
              <div className="header__burger">
                <span></span>
              </div>
            </div>
          </div>
        </header>
        <div className="main">
          <div className="main__container _container">
            <div className="main__img">
              <div className="main__text">
                <div className="text__decoration">
                  <svg className="left">
                    <use xlinkHref="#left"></use>
                  </svg>
                  <h1>Укрепление здоровья</h1>
                  <svg className="right">
                    <use xlinkHref="#right"></use>
                  </svg>
                </div>
                <h2>Акватерапия
                  RitmStyle</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="types">
          <div className="types__container _container">
            <div className="text__decoration">
              <svg className="left">
                <use xlinkHref="#left"></use>
              </svg>
              <h1>Сеансы RitmStyle</h1>
              <svg className="right">
                <use xlinkHref="#right"></use>
              </svg>
            </div>
            <div className="types__block">
              <div className="item__container">
                <div className="item__high">
                  <img src={require(`./img/type_img.jpg`)} alt="" />
                  <h1>Стандартный RitmStyle</h1>
                </div>
                <div className="item__wide1">
                  <img src={require(`./img/type_img.jpg`)} alt="" />
                  <h1>RitmStyle для пар</h1>
                </div>
                <div className="item__wide2">
                  <img src={require(`./img/type_img.jpg`)} alt="" />
                  <h1>RitmStyle для беременных</h1>
                </div>
                <div className="item__wide3">
                  <img src={require(`./img/type_img.jpg`)} alt="" />
                  <h1>RitmStyle с полным погружением под воду</h1>
                </div>
                <div className="item__wide4">
                  <img src={require(`./img/type_img.jpg`)} alt="" />
                  <h1>RitmStyle + красочная подводная фотосессия</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="reviews">
          <div className="reviews__container _container">
            <div className="text__decoration">
              <svg className="left">
                <use xlinkHref="#left"></use>
              </svg>
              <h1>Отзывы</h1>
              <svg className="right">
                <use xlinkHref="#right"></use>
              </svg>
            </div>
            <div className="slider">
              <div className="slider__container">
                <div className="slider__wrapper">
                  <div className="slider__items">
                    <div className="slider__item">
                      <div className="review">
                        <h1 className="review__name">Кира Иванова</h1>
                        <h2 className="review__text">Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Netus diam risus
                          morbi nulla dictum. Urna mi orci gravida placerat amet, eu, aliquet
                          facilisis aliquet. Dolor praesent nam ornare fringilla enim nibh donec sit
                          imperdiet. Amet, diam duis eu sit et. Volutpat vestibulum a lectus sed
                          blandit.
                          Venenatis urna mattis eu enim molestie iaculis et aliquet. Velit in
                          pellentesque vestibulum phasellus orci. Fermentum sed phasellus aliquam
                          nulla non aenean. Quisque id nunc, mauris potenti a massa. Fermentum at
                          elit, convallis leo dolor aliquet id elementum. Ullamcorper sociis et cum
                          bibendum in egestas. Diam, urna, sed tempus mollis aliquam elit. Facilisi
                          nam nulla pulvinar mauris vel lacinia venenatis. </h2>
                      </div>
                    </div>
                    <div className="slider__item">
                      <div className="review">
                        <h1 className="review__name">Александра Дмитриева</h1>
                        <h2 className="review__text">Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Netus diam risus
                          morbi nulla dictum. Urna mi orci gravida placerat amet, eu, aliquet
                          facilisis aliquet. Dolor praesent nam ornare fringilla enim nibh donec sit
                          imperdiet. Amet, diam duis eu sit et. Volutpat vestibulum a lectus sed
                          blandit.
                          Venenatis urna mattis eu enim molestie iaculis et aliquet. Velit in
                          pellentesque vestibulum phasellus orci. Fermentum sed phasellus aliquam
                          nulla non aenean. Quisque id nunc, mauris potenti a massa. Fermentum at
                          elit, convallis leo dolor aliquet id elementum. Ullamcorper sociis et cum
                          bibendum in egestas. Diam, urna, sed tempus mollis aliquam elit. Facilisi
                          nam nulla pulvinar mauris vel lacinia venenatis. </h2>
                      </div>
                    </div>
                    <div className="slider__item">
                      <div className="review">
                        <h1 className="review__name">Яна Жернова</h1>
                        <h2 className="review__text">Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Netus diam risus
                          morbi nulla dictum. Urna mi orci gravida placerat amet, eu, aliquet
                          facilisis aliquet. Dolor praesent nam ornare fringilla enim nibh donec sit
                          imperdiet. Amet, diam duis eu sit et. Volutpat vestibulum a lectus sed
                          blandit.
                          Venenatis urna mattis eu enim molestie iaculis et aliquet. Velit in
                          pellentesque vestibulum phasellus orci. Fermentum sed phasellus aliquam
                          nulla non aenean. Quisque id nunc, mauris potenti a massa. Fermentum at
                          elit, convallis leo dolor aliquet id elementum. Ullamcorper sociis et cum
                          bibendum in egestas. Diam, urna, sed tempus mollis aliquam elit. Facilisi
                          nam nulla pulvinar mauris vel lacinia venenatis. </h2>
                      </div>
                    </div>
                    <div className="slider__item">
                      <div className="review">
                        <h1 className="review__name">Владислав Коропец</h1>
                        <h2 className="review__text">Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Netus diam risus
                          morbi nulla dictum. Urna mi orci gravida placerat amet, eu, aliquet
                          facilisis aliquet. Dolor praesent nam ornare fringilla enim nibh donec
                          sit
                          imperdiet. Amet, diam duis eu sit et. Volutpat vestibulum a lectus sed
                          blandit.
                          Venenatis urna mattis eu enim molestie iaculis et aliquet. Velit in
                          pellentesque vestibulum phasellus orci. Fermentum sed phasellus aliquam
                          nulla non aenean. Quisque id nunc, mauris potenti a massa. Fermentum at
                          elit, convallis leo dolor aliquet id elementum. Ullamcorper sociis et
                          cum
                          bibendum in egestas. Diam, urna, sed tempus mollis aliquam elit.
                          Facilisi
                          nam nulla pulvinar mauris vel lacinia venenatis. </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ol className="slider__indicators">
                <li data-slide-to="0"></li>
                <li data-slide-to="1"></li>
                <li data-slide-to="2"></li>
                <li data-slide-to="3"></li>
              </ol>
            </div>
          </div>
        </div>
        <div className="about">
          <div className="about__container _container">
            <div className="text__decoration">
              <svg className="left">
                <use xlinkHref="#left"></use>
              </svg>
              <h1>Об RitmStyle</h1>
              <svg className="right">
                <use xlinkHref="#right"></use>
              </svg>
            </div>
            <div className="about__content">
              <div className="about__item">
                <div className="about__text">
                  <h1>RitmStyle массаж</h1>
                  <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in purus, sed tellus eget
                    mattis nibh quam. Eu ornare nunc, id est. Erat consectetur etiam a sit diam in imperdiet
                    amet. Diam nisl, ipsum suscipit amet. Eleifend amet habitasse proin quis adipiscing.
                    Nisl convallis mauris in consequat. Sit ac vitae posuere maecenas dictumst quam. Felis
                    amet
                    diam, non augue massa. Egestas molestie lobortis rhoncus, elit nulla nisl. Habitant
                    tortor
                    at tempor.</h2>
                </div>
                <div>
                  <div className="about__image">
                  </div>
                </div>
              </div>
              <div className="about__item">
                <div>
                  <div className="about__image">
                  </div>
                </div>
                <div className="about__text">
                  <h1>RitmStyle гидротерапия</h1>
                  <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in purus, sed tellus eget
                    mattis nibh quam. Eu ornare nunc, id est. Erat consectetur etiam a sit diam in imperdiet
                    amet. Diam nisl, ipsum suscipit amet. Eleifend amet habitasse proin quis adipiscing.
                    Nisl convallis mauris in consequat. Sit ac vitae posuere maecenas dictumst quam. Felis
                    amet
                    diam, non augue massa. Egestas molestie lobortis rhoncus, elit nulla nisl. Habitant
                    tortor
                    at tempor.</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="price">
          <div className="price__container _container">
            <div className="text__decoration">
              <svg className="left">
                <use xlinkHref="#left"></use>
              </svg>
              <h1>Стоимость сеансов</h1>
              <svg className="right">
                <use xlinkHref="#right"></use>
              </svg>
            </div>
            <div className="prices">
              <div className="prices__text">
                <div className="prices__item">
                  <div className="price__item">
                    <div className="price__left">
                      <svg className="left">
                        <use xlinkHref="#left"></use>
                      </svg>
                      <h1>RitmStyle с погружением</h1>
                    </div>
                    <div className="price__right">
                      <h1>1000р.</h1>
                    </div>
                  </div>
                  <div className="price__item">
                    <div className="price__left">
                      <svg className="left">
                        <use xlinkHref="#left"></use>
                      </svg>
                      <h1>Абонемент на RitmStyle</h1>
                    </div>
                    <div className="price__right">
                      <h1>5500р.</h1>
                    </div>
                  </div>
                  <div className="price__item">
                    <div className="price__left">
                      <svg className="left">
                        <use xlinkHref="#left"></use>
                      </svg>
                      <h1>RitmStyle для пар</h1>
                    </div>
                    <div className="price__right">
                      <h1>6000р.</h1>
                    </div>
                  </div>
                  <div className="price__item">
                    <div className="price__left">
                      <svg className="left">
                        <use xlinkHref="#left"></use>
                      </svg>
                      <h1>RitmStyle для беременных</h1>
                    </div>
                    <div className="price__right">
                      <h1>13500р.</h1>
                    </div>
                  </div>
                  <div className="price__item">
                    <div className="price__left">
                      <svg className="left">
                        <use xlinkHref="#left"></use>
                      </svg>
                      <h1>RitmStyle + фотосессия</h1>
                    </div>
                    <div className="price__right">
                      <h1>11500р.</h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="prices__right">
                <div className="price__image">
                </div>
                <h1 className="gift">Подарочный сертификат</h1>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="footer__container _container">
            <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1338502.247942618!2d30.02736222008507!3d60.01844362009769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696378cc74a65ed%3A0x6dc7673fab848eff!2z0KHQsNC90LrRgi3Qn9C10YLQtdGA0LHRg9GA0LMsINCg0L7RgdGB0LjRjw!5e1!3m2!1sru!2sua!4v1650288081551!5m2!1sru!2sua"
                width="900" 
                height="600"
                styles={{border: "0"}}
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"/>
            </div>
            <div className="on__map">
              <div className="map__item">
                <h1>Бассейн WorkclassName</h1>
                <div className="place">
                  <div className="place__location">
                    <img src="./img/carbon_location-filled.png" alt="" />
                    <h2>Невский 140</h2>
                  </div>
                  <div className="place__metro">
                    <img src="./img/metro.png" alt="" />
                    <h3>м. Спасская</h3>
                  </div>
                  <div className="place__date">
                    <img src="./img/bi_calendar-week-fill.png" alt="" />
                    <h4>Запись по договоренности</h4>
                  </div>
                </div>
                <button className="button">Запись по договоренности</button>
              </div>
              <div className="map__item">
                <h1>Бассейн WorkclassName</h1>
                <div className="place">
                  <div className="place__location">
                    <img src="./img/carbon_location-filled.png" alt="" />
                    <h2>Невский 140</h2>
                  </div>
                  <div className="place__metro">
                    <img src="./img/metro.png" alt="" />
                    <h3>м. Спасская</h3>
                  </div>
                  <div className="place__date">
                    <img src="./img/bi_calendar-week-fill.png" alt="" />
                    <h4>Запись по договоренности</h4>
                  </div>
                </div>
                <button className="button">Запись по договоренности</button>
              </div>
            </div>
          </div>
        </footer>
        <div className="footer__licence">
          <div className="licence__container _container">
            <h1>© 2018-2022 RitmStyle</h1>
            <h2>Сергей Дубосар</h2>
            <a href="https://www.figma.com/file/M6BhE1pToNIsn97y4eSwJy/RitmStyle" target="_blank">Оригинал дизайна</a>
            <a href="https://github.com/Syargik" target="_blank">github account</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
