document.addEventListener('DOMContentLoaded', function () {
  const miniImages = document.querySelectorAll('.galeria .mini');
  const mainImage = document.getElementById('mainImage');

  miniImages.forEach(function (miniImage) {
      miniImage.addEventListener('click', function () {
          mainImage.src = miniImage.src;
      });
  });


const params = new URLSearchParams(window.location.search);
const productID = params.get('productID');

// Lista produktów (lub załaduj z zewnętrznego źródła)
const products = [
    {
        productID: 'P001',
        category: ['Elektronika', 'Home'],
        img: ['./img/tvphoto.jpg','./img/pay.png', './img_product_page/ADYY_1_201811098627323.jpg','./img_product_page/laptop1.webp','./img_product_page/laptop2.webp','./img_product_page/laptop3.webp','./img_product_page/laptop4.webp','./img_product_page/dysk.png','./img_product_page/dell.png','./img_product_page/information-common-super-seller-236577cfa7.svg','./img_product_page/smart 1.svg','./img_product_page/pay 8.png', './img_product_page/clock.png','./img_product_page/deliverytruck.png','./img_product_page/shield.png','./img_product_page/wallet.png', './img_product_page/arrow.png'],
        title: 'Laptop Dell Inspiron 15',
        oldPrice: '3399,00 zł',
        newPrice: '2999,99 zł',
        stock: 10,
        description: 'Laptop Dell Inspiron 15, alalallalalalalallalalalalaalllallalalaaaaaaaaaaaaaaaaaaaaaaaaaa',
    },
    {
        productID: 'P002',
        category: 'Elektronika',
        img: ['./img_product_page/ps5.webp','./img/pay.png','./img_product_page/ps51.png','./img_product_page/ps52.png','./img_product_page/pad.png','./img_product_page/ps54.png','./img_product_page/action-common-share-8f2e34e3c1.svg','./img_product_page/action-common-heart-322d64f02b.svg','./img_product_page/information-common-super-seller-236577cfa7.svg','./img_product_page/smart 1.svg','./img_product_page/pay 8.png','./img_product_page/clock.png','./img_product_page/deliverytruck.png','./img_product_page/shield.png','./img_product_page/wallet.png','./img_product_page/arrow.png'],
        title: 'PlayStation 5',
        oldPrice: '2457,00 zł',
        newPrice: '2199,99 zł',
        stock: 5,
        description: 'PlayStation 5 alalallalalalalallalalalalaalllallalalaaaaaaaaaaaaaaaaaaaaaaaaaassssssssssssss',
    },
    {
        productID: 'P003',
        category: 'Elektronika',
        img: ['./img_product_page/action-common-share-8f2e34e3c1.svg','./img_product_page/action-common-heart-322d64f02b.svg','./img_product_page/Smartfon-APPLE-iPhone-15-128GB-5G-6.1-Niebieski-front-tyl.jpg','./img_product_page/ip15.jpg','./img_product_page/ip152.jpg','./img_product_page/ip153.jpg','./img_product_page/ip154.jpg','./img_product_page/Apple-Beats-Studio-Buds-douszne-sluchawki-bezprzewodowe-z-redukcja-halasu-biale-22605-680x680.webp','./img_product_page/smart 1.svg','./img_product_page/pay 8.png','./img_product_page/information-common-super-seller-236577cfa7.svg','./img_product_page/clock.png','./img_product_page/deliverytruck.png','./img_product_page/arrow.png','./img_product_page/shield.png','./img_product_page/wallet.png'],
        title: 'Telefon iPhone 15',
        oldPrice: '2699,00 zł',
        newPrice: '2199,99 zł',
        stock: 3,
        description: 'Telefon iPhone 15 alalallalalalalallalalalalaalllallalalaaaaaaaaaaaaaaaaaaaaaaaaaa',
        payImg: './img/pay.png'
    }
];

const product = products.find(p => p.productID === productID);

if (product) {
    const isMobile = window.innerWidth <= 450;
    if (isMobile) {
      document.getElementById('product-container').innerHTML =  `
      <!-- Header Section -->
<section class="header">
  <div class="up-section">
      <div class="in-section">
          <a class="logo speak" href="Alledrogo_main_page.html">alledrogo</a>
          <div class="search-container">
              <input class="searchbar speak" type="text" placeholder="czego szukasz?"><!--Tutaj nie działa jeszcze speak-->
              <span class="search-label speak" id="searchLabel" tabindex="0">szukaj wielu</span>

              <span class="category speak" id="searchLabelCategory" tabindex="0">
                  Wszystkie kategorie
                  <img src="./svg/arrow.svg" alt="arrow" class="arrow-icon" data-light="./svg/arrow.svg" data-dark="./svg/arrowlight.svg">
                  <div class="dropdown-menu-category" id="dropdownMenuSearchLabelCategory">
                      <a href="#" class="speak">Allegro days</a>
                      <hr>
                      <a href="#" class="speak">Dom i Ogród</a>
                      <a href="#" class="speak">Diecko</a>
                      <a href="#" class="speak">Elektronika</a>
                      <a href="#" class="speak">Firma i usługi</a>
                      <a href="#" class="speak">Kolekcje i sztuka</a>
                      <a href="#" class="speak">Kultura i rozrywka</a>
                      <a href="#" class="speak">Moda</a>
                      <a href="#" class="speak">Motoryzacja</a>
                      <a href="#" class="speak">Nieruchomości</a>
                      <a href="#" class="speak">Sport i Turystyka</a>
                      <a href="#" class="speak">Supermarket</a>
                      <a href="#" class="speak">Uroda</a>
                      <a href="#" class="speak">Zdrowie</a>
                      <hr>
                      <a href="#" class="speak">Cele charytatywne</a>
                      <a href="#" class="speak">Organizacje charytatywne</a>
                      <a href="#" class="speak">Sprzedawcy</a>
                      <a href="#" class="speak">Zakończone</a>
                      
                  </div>
              </span>
              <button class="search-button speak">SZUKAJ</button>
              <div class="icons">
                <a href="#"><img src="./svg/delivery.svg" data-light="./svg/delivery.svg" data-dark="./svg/deliverylight.svg" alt="Przesyłki" class="icon-look"></a>
                <a href="#"><img src="./svg/fav.svg" data-light="./svg/fav.svg" data-dark="./svg/favlight.svg" alt="Ulubione" class="icon-look"></a>
                <a href="#"><img src="./svg/chat.svg" data-light="./svg/chat.svg" data-dark="./svg/chatlight.svg" alt="Czat" class="icon-look"></a>
                <a href="#"><img src="./svg/notify.svg" data-light="./svg/notify.svg" data-dark="./svg/notifylight.svg" alt="Powiadomienia" class="icon-look"></a>
                <a href="#"><img src="./svg/orders.svg" data-light="./svg/orders.svg" data-dark="./svg/orderslight.svg" alt="Mój koszyk" class="icon-look"></a>
            </div>                 
              <span class="user speak" tabindex="0">Moje Allegro
                <img src="./svg/arrow.svg" alt="arrow" class="arrow-icon2" data-light="./svg/arrow.svg" data-dark="./svg/arrowlight.svg">
                  <div class="dropdown-menu" id="dropdownMenu">
                  <a href="#" class="speak">Moje zakupy</a>
                  <a href="#" class="speak">Kup ponownie</a>
                  <a href="#" class="speak">Licytuję</a>
                  <a href="#" class="speak">Ulubione</a>
                  <a href="#" class="speak">Oceń produkty <span class="new">NOWOŚĆ</span></a>
                  <a href="#" class="speak">Oceń sprzedawcę</a>
                  <hr>
                  <a href="#" class="speak">Allegro Smart!</a>
                  <a href="#" class="speak">Kupony i karty podarunkowe</a>
                  <a href="#" class="speak">Smart! Monety</a>
                  <a href="#" class="speak" id="openSecondPopupLink">Ustawienia</a>
                  </div>
                </span>
          </div>  
      </div>
  </div>
<div class="underheader">
  <div class="under-section">
      <span class="category-under speak" id="categoryTrigger" tabindex="0">
          Kategorie
          <img src="./svg/arrow.svg" alt="arrow" class="arrow-icon3" data-light="./svg/arrow.svg" data-dark="./svg/arrowlight.svg">
          <div class="dropdown-menu-category-under" id="dropdownMenuCategory">
              <ul class="categories">
                  <!-- Kategorie generowane dynamicznie -->
              </ul>
              <div class="subcategories">
                  <ul id="subCategoriesList">
                      <!-- Podkategorie będą się tutaj wyświetlały -->
                  </ul>
              </div>
          </div>
      </span>
      <div class="cateallegro">
        <span tabindex="0" class="speak"><img src="./svg/Days.svg" alt="Allegro Days" data-light="./svg/Days.svg" data-dark="./svg/Dayslight.svg"> Allegro Days</span>
        <span tabindex="0" class="speak"><img src="./svg/protect.svg" alt="Allegro Protect" data-light="./svg/protect.svg" data-dark="./svg/protectlight.svg"> Allegro Protect</span>
        <span tabindex="0" class="speak"><img src="./svg/sell allegro.svg" alt="Sprzedawaj na Allegro" data-light="./svg/sell allegro.svg" data-dark="./svg/sell allegrolight.svg"> Sprzedawaj na Allegro</span>
        <span tabindex="0" class="speak"><img src="./svg/lowpirce.svg" alt="Gwarancja najniższej ceny" data-light="./svg/lowpirce.svg" data-dark="./svg/lowpircelight.svg"> Gwarancja najniższej ceny</span>
        <span tabindex="0" class="speak"><img src="./svg/3dots.svg" alt="Trzy Kropki ..." data-light="./svg/3dots.svg" data-dark="./svg/3dotslight.svg"></span>
    </div>          
  <span class="smart" tabindex="0">bądź<img src="./svg/smart.svg" alt="bądź smart"></span>
</div>  
</section>

<section class="toptop ">
<a href="#">Allegro</a><span class="separator"> / </span>
<a href="#">Elektronika</a><span class="separator"> / </span>
<a href="#">Komputery</a><span class="separator"> / </span>
<a href="#">Laptopy</a><span class="separator"> / </span>
<a href="#" class="current">Laptop DELL Inspiron 15 i5-1235U 32GB 1TB-SSD 15,6" FHD...</a>
</section>

<main class="container">
<section class="container-column">
<section class="left-box ">
  <section class="up">
  <p>Stan: <span class="new2">Nowy</span></p>
  <img src="./img_product_page/action-common-share-8f2e34e3c1.svg">
  <img src="./img_product_page/action-common-heart-322d64f02b.svg">
  </section>
  <h1>Laptop DELL Inspiron 15 i5-1235U 32GB 1TB-SSD 15,6" FHD <br>120Hz Win11 Silver</h1>
  <p class="os">2 osoby kupiły ostatnio</p>
  <img src="./img_product_page/ADYY_1_201811098627323.jpg" class="laptop" id="mainImage">
<section class="galeria">
    <img src="./img_product_page/ADYY_1_201811098627323.jpg" class="mini">
    <img src="./img_product_page/laptop1.webp" class="mini">
    <img src="./img_product_page/laptop2.webp" class="mini">
    <img src="./img_product_page/laptop3.webp" class="mini">
    <img src="./img_product_page/laptop4.webp" class="mini">
    <img src="./img_product_page/laptop2.webp" class="mini">
    <img src="./img_product_page/laptop3.webp" class="mini">
</section>
</section>

<section class="container-column">
<section class="right-box">
    <p class="od">od xyz.pl</p>
    <section class="info">
      <img src="./img_product_page/information-common-super-seller-236577cfa7.svg" class="icon"> 
      <span class="divider"></span>
      <p>Firma</p>
      <span class="divider"></span>
      <span class="recommendation">poleca 99,7%</span>
    </section>
    <hr class="full">
    <p class="super">SUPERCENA</p>
    <section class="cena">
    <p>2999,<span class="zl">99 zł</span></p>
    <img src="./img_product_page/smart 1.svg">
  </section>
  <section class="check ">
    <p>zapłać później z</p>
    <img src="./img_product_page/pay 8.png">
    <p>sprawdź</p>
  </section>
  <p class="os">2 osoby kupiły tę ofertę</p>
  <hr>
  <p class="dostawa">dostawa jutro <span class="do">do 6 miast</span><span class="info-icon">ⓘ</span></p>
  <hr>
  <p class="szt">Liczba sztuk</p>
  <section class="quantity-container">
    <button>-</button>
    <input type="text" value="1" readonly>
    <button>+</button>
    <span class="z">z 21 sztuk</span>
  </section>
<p class="leasing">Masz firmę? Weź leasing</p>
</section>

<section class=" right-box">
  <section class="qwe">
    <img src="./img_product_page/clock.png">
    <p>Jutro u Ciebie do 6 miast</p>
  </section>
  <hr>
  <section class="qwi">
    <img src="./img_product_page/deliverytruck.png">
    <section class="row">
    <p >Dostawa od 10,99 zł</p>
    <img src="./img_product_page/arrow.png">
  </section>
  </section>
  <hr>
  <section class="qwi">
    <img src="./img_product_page/shield.png" class="shield">
    <section class="row">
    <p>Zwrot za darmo - 14 dni<br><span class="down">Reklamacja | Alledrogo Protect</span></p>
    <img src="./img_product_page/arrow.png">
  </section>
  </section>
  <hr>
  <section class="qwi">
    <img src="./img_product_page/wallet.png">
    <section class="row">
    <p>Metody płatności<br><span class="down">Płać tak, jak lubisz</span></p>
    <img src="./img_product_page/arrow.png">
  </section>
  </section>
</section>

<section class=" right-box">
  <h2>Inne oferty produktu<span class="info-icon">ⓘ</span></h2>
  <p class="inne">Laptop Dell Inspiron 15 3520 i5 Silver Win11 15,6 " <br>Intel Core i5 32 GB / 1000 GB srebrny</p>
  <p class="nn">NAJTAŃSZE - NOWE</p>
  <section class="cenasm">
    <p>2999,<span class="zl">99 zł</span></p>
    <img src="./img_product_page/smart 1.svg">
    <img src="./img_product_page/arrow.png"class="arrow">
  </section>
  <p class="stan">Stan: Nowy</p>
  <hr>
  <p class="nn">NAJSZYBCIEJ</p>
  <section class="cenasm">
    <p>2999,<span class="zl">99 zł</span></p>
    <img src="./img_product_page/smart 1.svg">
    <img src="./img_product_page/arrow.png"class="arrow">
  </section>
  <p class="stan">dostawa: pojutrze</p>
</section>

<section class=" right-box">
<p class="sell">Sprzedaż i wysyłka:</p>
<p class="od">od xyz.pl</p>
<section class="infox">
  <img src="./img_product_page/information-common-super-seller-236577cfa7.svg" class="icon"> 
  <p>Super Sprzedawca</p>
  <span class="divider"></span>
  <p>Firma</p>
</section>
<hr class="full">
<section class="rate">
  <p>99,7%</p>
  <p class="po">kupujących poleciło tego sprzedawcę w<br> ostatnich 12 miesiącach</p>
</section>
<hr class="full">
<p class="teal">Inne przedmioty sprzedającego z kategorii <strong>Laptopy</strong></p>
<hr>
<p class="tealx">Wszystkie przedmioty sprzedającego</p>
<hr class="full">
<section class="infoxy">
  <p>O sprzedającym</p>
  <span class="divider"></span>
  <p>Zadaj pytanie</p>
</section>
</section>
</section>

<section class="left-box ">
  <h2>Kup razem</h2>
  <section class="bundle">
    <section class="bundle-images">
      <img src="./img_product_page/ADYY_1_201811098627323.jpg">
      <span class="plus">+</span>
      <img src="./img_product_page/dysk.png">
    </section>
    <section class="bundle-info">
      <p class="product">
      <a href="#">Laptop DELL Inspiron 15 i5-1235U 32GB 1TB-SSD<br> 15,6" FHD 120Hz Win11 Silver</a>
      <span class="price">2999,99 zł</span>
      </p>
      <p class="product">
      <a href="#">Przenośny zewnętrzny dysk SSD 1TB KINGSTON<br> XS1000R USB3.2 Red</a>
      <span class="price">316,16 zł</span>
      </p>
      <p class="total-price">cena razem <span class=big>3316,</span><span class=small>15 zł</span></p>
      <button class="add-to-cart">DODAJ ZESTAW DO KOSZYKA</button>
    </section>
  </section>
</section>
<section class="left-box ">
    <h2>Parametry</h2>
    <section class="product-info">
      <section class="row">
      <span class="label">Stan</span>
      <span class="value highlight">Nowy</span>
      </section>
      <section class="row">
      <span class="label">Faktura</span>
      <span class="value">Wystawiam fakturę VAT</span>
      </section>
      <section class="row">
      <span class="label">Marka</span>
      <span class="value highlight">Dell</span>
      </section>
      <section class="row">
      <span class="label">Stan opakowania</span>
      <span class="value">oryginalne</span>
      </section>
      <section class="row">
      <span class="label">Model</span>
      <span class="value">Inspiron 15 3520 i5 Silver Win11</span>
      </section>
      <section class="row">
      <span class="label">Typ</span>
      <span class="value">standardowy</span>
      </section>
      <seection class="row">
      <span class="label">Układ klawiatury</span>
      <span class="value">US international (qwerty)</span>
      </seection>
      <section class="row">
      <span class="label">Kod producenta</span>
      <span class="value">3520-9997</span>
      </section>
      <section class="full-width-line">
      <a href="#">WSZYSTKIE PARAMETRY</a>
      </section>
    </section>
</section>

<section class="left-box ">
  <h2>Opis</h2>
  <h3>Notebook DELL Inspiron 15 i5-1235U 32GB 1TB-SSD 15,6" FHD W11</h3>
  <div class="product-container">
    <div class="product-text">
        <h2>Dzisiejszy projekt przyszłości - DELL Inspiron 15 3520</h2>
        <p>
        To urządzenie zapewnia wysoką wydajność i ciche działanie. Zostało wyposażone w wydajny procesor
        i szybki dysk SSD PCIe. Korzystaj z dużych klawiszy i touchpada, które ułatwiają nawigację po treściach
        i w oprogramowaniu ComfortView. To rozwiązanie z certyfikatem TUV Rheinland ograniczające emisję
        szkodliwego niebieskiego światła. Dzięki temu możesz korzystać z urządzenia przez długi czas
        bez nadwyrężania wzroku. Ponadto możesz korzystać z wyświetlacza FHD z elegancką, wąską obwódką
        z trzech stron.
        </p>
    </div>
    <div class="product-image">
      <img src="./img_product_page/ADYY_1_201811098627323.jpg" >
    </div>
</div>
<div class="product-container">
  <div class="product-text">
      <h2 class="large">Microsoft Windows 11 Home</h2>
      <p>
      System Windows 11 został zaprojektowany z myślą o intuicyjności, personalizacji i ogromnych możliwościach. Dzięki niemu łatwiej utrzymać porządek, sprawnie przełączać się między zadaniami i płynnie uruchamiać gry. Niezależnie od tego, co planujesz, znajdziesz funkcję lub narzędzie stworzone, by ułatwić codzienne działania i uczynić je jeszcze bardziej wyjątkowymi.
      </p>
  </div>
  <div class="product-image">
    <img src="./img_product_page/laptop1.webp"class="one" >
  </div>
</div>
<div class="product-container">
<div class="product-text">
    <h2 class="large">Nowoczesny Design</h2>
    <p>
    Dzięki wbudowanej kamerze zawsze będziesz wyglądać świetnie i czuć się pewnie. Twój komputer stacjonarny został zaprojektowany z myślą o codziennym użytkowaniu. Wyposażono go w małe gumowe nóżki oraz ochronne elementy zawiasu, które zapobiegają ślizganiu się i zapewniają większą stabilność na twardych powierzchniach.
    </p>
</div>
<div class="product-image">
  <img src="./img_product_page/laptop2.webp"class="one" >
</div>
</div>
<div class="product-container">
<div class="product-text">
    <h2 class="large">Procesor nowej generacji</h2>
    <h2 class="large">Intel Core i5-1235U 10 rdzeni, 12 wątków, do 3.30 / 4.40 GHz, 12 MB</h2>
    <p>
    Intel Core i5-1235U to 10-rdzeniowy procesor, który osiąga maksymalną częstotliwość taktowania do 4,4 GHz, co pozwala mu bez trudu poradzić sobie z wymagającymi zadaniami produktywności i równoczesnym przetwarzaniem wielu procesów. Doświadcz znacznego wzrostu wydajności i wyjątkowo płynnej pracy. Pracuj, twórz i edytuj w swoim tempie dzięki szybkiemu procesorowi Intel.
    </p>
</div>
<div class="product-image">
  <img src="./img_product_page/laptop3.webp"class="two" >
</div>
</div>
<div class="product-container">
<div class="product-text">
    <h2 class="large">Niesamowity dźwięk</h2>
    <p>
    Będziesz pewny, że Twoje słowa będą doskonale słyszalne, dzięki dwóm wbudowanym mikrofonom z technologią sztucznej inteligencji, która skutecznie redukuje hałas tła. Dodatkowo głośniki z funkcją Waves MaxxAudio® Pro gwarantują wyraźny dźwięk i odpowiednią głośność, dzięki czemu każde słowo będzie brzmiało czysto i wyraźnie.
    </p>
</div>
<div class="product-image">
  <img src="./img_product_page/laptop4.webp"class="one" >
</div>
</div>

<div class="product-container">
<div class="product-text">
  <h2 class="xlarge">Specyfikacja</h2>
  <li><strong>Procesor:</strong> Intel Core i5-1235U (10 rdzeni, 12 wątków, 3.30-4.40 GHz, 12MB cache)</li>
  <li><strong>Pamięć:</strong> RAM 32 GB (DDR4, 2666 MHz)</li>
  <li><strong>Pojemność dysku SSD:</strong> 1 TB</li>
  <li><strong>Karta graficzna:</strong> Intel Iris Xe Graphics</li>
  <li><strong>Typ ekranu:</strong> Matowy, LED, WVA</li>
  <li><strong>Przekątna ekranu:</strong> 15,6"</li>
  <li><strong>Rozdzielczość ekranu:</strong> 1920 x 1080 (Full HD)</li>
  <li><strong>Dźwięk:</strong> Wbudowane głośniki stereo, Wbudowany mikrofon</li>
  <li><strong>Złącza:</strong> USB 2.0 - 1 szt., USB 3.2 Gen. 1 - 2 szt., USB 3.2 Gen. 1 - 2 szt., HDMI 1.4 - 1 szt., DC-in (wejście zasilania) - 1 szt.</li>
  <li><strong>Podświetlana klawiatura:</strong> Nie</li>
  <li><strong>Pojemność baterii:</strong> 3-komorowa, 3467 mAh</li>
  <li><strong>System operacyjny:</strong> Microsoft Windows 11 Home</li>
  <li><strong>Łączność:</strong> Wi-Fi 6, Moduł Bluetooth 5.2</li>
</div>
<div class="product-image">
  <img src="./img_product_page/dell.png"class="dell" >
</div>
</div>
<div class="images">
<img src="./img_product_page/ADYY_1_201811098627323.jpg" >
<img src="./img_product_page/laptop2.webp" >
</div>
<div class="images">
<img src="./img_product_page/laptop1.webp" >
<img src="./img_product_page/laptop3.webp" >
</div>
</section>
</section>

</main> 
  <div class="phone-buttons">
      <section class="buttons">
    <button class="button">Dodaj do koszyka</button>
    <button class="button">Kup i zapłać</button>
</section>
  </div> 
  <div class="phone-footer">
      <a href="#">Dostawy<img src="./svg/delivery.svg" data-light="./svg/delivery.svg" data-dark="./svg/deliverylight.svg" alt="Przesyłki" class="icon-look"></a>
      <a href="#">Ulubione<img src="./svg/fav.svg" data-light="./svg/fav.svg" data-dark="./svg/favlight.svg" alt="Ulubione" class="icon-look"></a>
      <a href="#">Wiadomości<img src="./svg/chat.svg" data-light="./svg/chat.svg" data-dark="./svg/chatlight.svg" alt="Czat" class="icon-look"></a>
      <a href="#">Powiadomienia<img src="./svg/notify.svg" data-light="./svg/notify.svg" data-dark="./svg/notifylight.svg" alt="Powiadomienia" class="icon-look"></a>
      <a href="#">Koszyk<img src="./svg/orders.svg" data-light="./svg/orders.svg" data-dark="./svg/orderslight.svg" alt="Mój koszyk" class="icon-look"></a>
  </div> 
<section class="footer-section" id="footer-container"></section>  
  `;
    } else {
      document.getElementById('product-container').innerHTML =  `
      <!-- Header Section -->
<section class="header">
  <div class="up-section">
      <div class="in-section">
          <a class="logo speak" href="Alledrogo_main_page.html">alledrogo</a>
          <div class="search-container">
              <input class="searchbar speak" type="text" placeholder="czego szukasz?"><!--Tutaj nie działa jeszcze speak-->
              <span class="search-label speak" id="searchLabel" tabindex="0">szukaj wielu</span>

              <span class="category speak" id="searchLabelCategory" tabindex="0">
                  Wszystkie kategorie
                  <img src="./svg/arrow.svg" alt="arrow" class="arrow-icon" data-light="./svg/arrow.svg" data-dark="./svg/arrowlight.svg">
                  <div class="dropdown-menu-category" id="dropdownMenuSearchLabelCategory">
                      <a href="#" class="speak">Allegro days</a>
                      <hr>
                      <a href="#" class="speak">Dom i Ogród</a>
                      <a href="#" class="speak">Diecko</a>
                      <a href="#" class="speak">Elektronika</a>
                      <a href="#" class="speak">Firma i usługi</a>
                      <a href="#" class="speak">Kolekcje i sztuka</a>
                      <a href="#" class="speak">Kultura i rozrywka</a>
                      <a href="#" class="speak">Moda</a>
                      <a href="#" class="speak">Motoryzacja</a>
                      <a href="#" class="speak">Nieruchomości</a>
                      <a href="#" class="speak">Sport i Turystyka</a>
                      <a href="#" class="speak">Supermarket</a>
                      <a href="#" class="speak">Uroda</a>
                      <a href="#" class="speak">Zdrowie</a>
                      <hr>
                      <a href="#" class="speak">Cele charytatywne</a>
                      <a href="#" class="speak">Organizacje charytatywne</a>
                      <a href="#" class="speak">Sprzedawcy</a>
                      <a href="#" class="speak">Zakończone</a>
                      
                  </div>
              </span>
              <button class="search-button speak">SZUKAJ</button>
              <div class="icons">
                <a href="#"><img src="./svg/delivery.svg" data-light="./svg/delivery.svg" data-dark="./svg/deliverylight.svg" alt="Przesyłki" class="icon-look"></a>
                <a href="#"><img src="./svg/fav.svg" data-light="./svg/fav.svg" data-dark="./svg/favlight.svg" alt="Ulubione" class="icon-look"></a>
                <a href="#"><img src="./svg/chat.svg" data-light="./svg/chat.svg" data-dark="./svg/chatlight.svg" alt="Czat" class="icon-look"></a>
                <a href="#"><img src="./svg/notify.svg" data-light="./svg/notify.svg" data-dark="./svg/notifylight.svg" alt="Powiadomienia" class="icon-look"></a>
                <a href="#"><img src="./svg/orders.svg" data-light="./svg/orders.svg" data-dark="./svg/orderslight.svg" alt="Mój koszyk" class="icon-look"></a>
            </div>                 
              <span class="user speak" tabindex="0">Moje Allegro
                <img src="./svg/arrow.svg" alt="arrow" class="arrow-icon2" data-light="./svg/arrow.svg" data-dark="./svg/arrowlight.svg">
                  <div class="dropdown-menu" id="dropdownMenu">
                  <a href="#" class="speak">Moje zakupy</a>
                  <a href="#" class="speak">Kup ponownie</a>
                  <a href="#" class="speak">Licytuję</a>
                  <a href="#" class="speak">Ulubione</a>
                  <a href="#" class="speak">Oceń produkty <span class="new">NOWOŚĆ</span></a>
                  <a href="#" class="speak">Oceń sprzedawcę</a>
                  <hr>
                  <a href="#" class="speak">Allegro Smart!</a>
                  <a href="#" class="speak">Kupony i karty podarunkowe</a>
                  <a href="#" class="speak">Smart! Monety</a>
                  <a href="#" class="speak" id="openSecondPopupLink">Ustawienia</a>
                  </div>
                </span>
          </div>  
      </div>
  </div>
<div class="underheader">
  <div class="under-section">
      <span class="category-under speak" id="categoryTrigger" tabindex="0">
          Kategorie
          <img src="./svg/arrow.svg" alt="arrow" class="arrow-icon3" data-light="./svg/arrow.svg" data-dark="./svg/arrowlight.svg">
          <div class="dropdown-menu-category-under" id="dropdownMenuCategory">
              <ul class="categories">
                  <!-- Kategorie generowane dynamicznie -->
              </ul>
              <div class="subcategories">
                  <ul id="subCategoriesList">
                      <!-- Podkategorie będą się tutaj wyświetlały -->
                  </ul>
              </div>
          </div>
      </span>
      <div class="cateallegro">
        <span tabindex="0" class="speak"><img src="./svg/Days.svg" alt="Allegro Days" data-light="./svg/Days.svg" data-dark="./svg/Dayslight.svg"> Allegro Days</span>
        <span tabindex="0" class="speak"><img src="./svg/protect.svg" alt="Allegro Protect" data-light="./svg/protect.svg" data-dark="./svg/protectlight.svg"> Allegro Protect</span>
        <span tabindex="0" class="speak"><img src="./svg/sell allegro.svg" alt="Sprzedawaj na Allegro" data-light="./svg/sell allegro.svg" data-dark="./svg/sell allegrolight.svg"> Sprzedawaj na Allegro</span>
        <span tabindex="0" class="speak"><img src="./svg/lowpirce.svg" alt="Gwarancja najniższej ceny" data-light="./svg/lowpirce.svg" data-dark="./svg/lowpircelight.svg"> Gwarancja najniższej ceny</span>
        <span tabindex="0" class="speak"><img src="./svg/3dots.svg" alt="Trzy Kropki ..." data-light="./svg/3dots.svg" data-dark="./svg/3dotslight.svg"></span>
    </div>          
  <span class="smart" tabindex="0">bądź<img src="./svg/smart.svg" alt="bądź smart"></span>
</div>  
</section>

<section class="toptop ">
<a href="#">Allegro</a><span class="separator"> / </span>
<a href="#">Elektronika</a><span class="separator"> / </span>
<a href="#">Komputery</a><span class="separator"> / </span>
<a href="#">Laptopy</a><span class="separator"> / </span>
<a href="#" class="current">Laptop DELL Inspiron 15 i5-1235U 32GB 1TB-SSD 15,6" FHD...</a>
</section>

<main class="container">
<section class="container-column">
<section class="left-box ">
  <section class="up">
  <p>Stan: <span class="new2">Nowy</span></p>
  <img src="./img_product_page/action-common-share-8f2e34e3c1.svg">
  <img src="./img_product_page/action-common-heart-322d64f02b.svg">
  </section>
  <h1>Laptop DELL Inspiron 15 i5-1235U 32GB 1TB-SSD 15,6" FHD <br>120Hz Win11 Silver</h1>
  <p class="os">2 osoby kupiły ostatnio</p>
  <img src="./img_product_page/ADYY_1_201811098627323.jpg" class="laptop" id="mainImage">
<section class="galeria">
    <img src="./img_product_page/ADYY_1_201811098627323.jpg" class="mini">
    <img src="./img_product_page/laptop1.webp" class="mini">
    <img src="./img_product_page/laptop2.webp" class="mini">
    <img src="./img_product_page/laptop3.webp" class="mini">
    <img src="./img_product_page/laptop4.webp" class="mini">
    <img src="./img_product_page/laptop2.webp" class="mini">
    <img src="./img_product_page/laptop3.webp" class="mini">
</section>
</section>

<section class="left-box ">
  <h2>Kup razem</h2>
  <section class="bundle">
    <section class="bundle-images">
      <img src="./img_product_page/ADYY_1_201811098627323.jpg">
      <span class="plus">+</span>
      <img src="./img_product_page/dysk.png">
    </section>
    <section class="bundle-info">
      <p class="product">
      <a href="#">Laptop DELL Inspiron 15 i5-1235U 32GB 1TB-SSD<br> 15,6" FHD 120Hz Win11 Silver</a>
      <span class="price">2999,99 zł</span>
      </p>
      <p class="product">
      <a href="#">Przenośny zewnętrzny dysk SSD 1TB KINGSTON<br> XS1000R USB3.2 Red</a>
      <span class="price">316,16 zł</span>
      </p>
      <p class="total-price">cena razem <span class=big>3316,</span><span class=small>15 zł</span></p>
      <button class="add-to-cart">DODAJ ZESTAW DO KOSZYKA</button>
    </section>
  </section>
</section>
<section class="left-box ">
    <h2>Parametry</h2>
    <section class="product-info">
      <section class="row">
      <span class="label">Stan</span>
      <span class="value highlight">Nowy</span>
      </section>
      <section class="row">
      <span class="label">Faktura</span>
      <span class="value">Wystawiam fakturę VAT</span>
      </section>
      <section class="row">
      <span class="label">Marka</span>
      <span class="value highlight">Dell</span>
      </section>
      <section class="row">
      <span class="label">Stan opakowania</span>
      <span class="value">oryginalne</span>
      </section>
      <section class="row">
      <span class="label">Model</span>
      <span class="value">Inspiron 15 3520 i5 Silver Win11</span>
      </section>
      <section class="row">
      <span class="label">Typ</span>
      <span class="value">standardowy</span>
      </section>
      <seection class="row">
      <span class="label">Układ klawiatury</span>
      <span class="value">US international (qwerty)</span>
      </seection>
      <section class="row">
      <span class="label">Kod producenta</span>
      <span class="value">3520-9997</span>
      </section>
      <section class="full-width-line">
      <a href="#">WSZYSTKIE PARAMETRY</a>
      </section>
    </section>
</section>

<section class="left-box ">
  <h2>Opis</h2>
  <h3>Notebook DELL Inspiron 15 i5-1235U 32GB 1TB-SSD 15,6" FHD W11</h3>
  <div class="product-container">
    <div class="product-text">
        <h2>Dzisiejszy projekt przyszłości - DELL Inspiron 15 3520</h2>
        <p>
        To urządzenie zapewnia wysoką wydajność i ciche działanie. Zostało wyposażone w wydajny procesor
        i szybki dysk SSD PCIe. Korzystaj z dużych klawiszy i touchpada, które ułatwiają nawigację po treściach
        i w oprogramowaniu ComfortView. To rozwiązanie z certyfikatem TUV Rheinland ograniczające emisję
        szkodliwego niebieskiego światła. Dzięki temu możesz korzystać z urządzenia przez długi czas
        bez nadwyrężania wzroku. Ponadto możesz korzystać z wyświetlacza FHD z elegancką, wąską obwódką
        z trzech stron.
        </p>
    </div>
    <div class="product-image">
      <img src="./img_product_page/ADYY_1_201811098627323.jpg" >
    </div>
</div>
<div class="product-container">
  <div class="product-text">
      <h2 class="large">Microsoft Windows 11 Home</h2>
      <p>
      System Windows 11 został zaprojektowany z myślą o intuicyjności, personalizacji i ogromnych możliwościach. Dzięki niemu łatwiej utrzymać porządek, sprawnie przełączać się między zadaniami i płynnie uruchamiać gry. Niezależnie od tego, co planujesz, znajdziesz funkcję lub narzędzie stworzone, by ułatwić codzienne działania i uczynić je jeszcze bardziej wyjątkowymi.
      </p>
  </div>
  <div class="product-image">
    <img src="./img_product_page/laptop1.webp"class="one" >
  </div>
</div>
<div class="product-container">
<div class="product-text">
    <h2 class="large">Nowoczesny Design</h2>
    <p>
    Dzięki wbudowanej kamerze zawsze będziesz wyglądać świetnie i czuć się pewnie. Twój komputer stacjonarny został zaprojektowany z myślą o codziennym użytkowaniu. Wyposażono go w małe gumowe nóżki oraz ochronne elementy zawiasu, które zapobiegają ślizganiu się i zapewniają większą stabilność na twardych powierzchniach.
    </p>
</div>
<div class="product-image">
  <img src="./img_product_page/laptop2.webp"class="one" >
</div>
</div>
<div class="product-container">
<div class="product-text">
    <h2 class="large">Procesor nowej generacji</h2>
    <h2 class="large">Intel Core i5-1235U 10 rdzeni, 12 wątków, do 3.30 / 4.40 GHz, 12 MB</h2>
    <p>
    Intel Core i5-1235U to 10-rdzeniowy procesor, który osiąga maksymalną częstotliwość taktowania do 4,4 GHz, co pozwala mu bez trudu poradzić sobie z wymagającymi zadaniami produktywności i równoczesnym przetwarzaniem wielu procesów. Doświadcz znacznego wzrostu wydajności i wyjątkowo płynnej pracy. Pracuj, twórz i edytuj w swoim tempie dzięki szybkiemu procesorowi Intel.
    </p>
</div>
<div class="product-image">
  <img src="./img_product_page/laptop3.webp"class="two" >
</div>
</div>
<div class="product-container">
<div class="product-text">
    <h2 class="large">Niesamowity dźwięk</h2>
    <p>
    Będziesz pewny, że Twoje słowa będą doskonale słyszalne, dzięki dwóm wbudowanym mikrofonom z technologią sztucznej inteligencji, która skutecznie redukuje hałas tła. Dodatkowo głośniki z funkcją Waves MaxxAudio® Pro gwarantują wyraźny dźwięk i odpowiednią głośność, dzięki czemu każde słowo będzie brzmiało czysto i wyraźnie.
    </p>
</div>
<div class="product-image">
  <img src="./img_product_page/laptop4.webp"class="one" >
</div>
</div>

<div class="product-container">
<div class="product-text">
  <h2 class="xlarge">Specyfikacja</h2>
  <li><strong>Procesor:</strong> Intel Core i5-1235U (10 rdzeni, 12 wątków, 3.30-4.40 GHz, 12MB cache)</li>
  <li><strong>Pamięć:</strong> RAM 32 GB (DDR4, 2666 MHz)</li>
  <li><strong>Pojemność dysku SSD:</strong> 1 TB</li>
  <li><strong>Karta graficzna:</strong> Intel Iris Xe Graphics</li>
  <li><strong>Typ ekranu:</strong> Matowy, LED, WVA</li>
  <li><strong>Przekątna ekranu:</strong> 15,6"</li>
  <li><strong>Rozdzielczość ekranu:</strong> 1920 x 1080 (Full HD)</li>
  <li><strong>Dźwięk:</strong> Wbudowane głośniki stereo, Wbudowany mikrofon</li>
  <li><strong>Złącza:</strong> USB 2.0 - 1 szt., USB 3.2 Gen. 1 - 2 szt., USB 3.2 Gen. 1 - 2 szt., HDMI 1.4 - 1 szt., DC-in (wejście zasilania) - 1 szt.</li>
  <li><strong>Podświetlana klawiatura:</strong> Nie</li>
  <li><strong>Pojemność baterii:</strong> 3-komorowa, 3467 mAh</li>
  <li><strong>System operacyjny:</strong> Microsoft Windows 11 Home</li>
  <li><strong>Łączność:</strong> Wi-Fi 6, Moduł Bluetooth 5.2</li>
</div>
<div class="product-image">
  <img src="./img_product_page/dell.png"class="dell" >
</div>
</div>
<div class="images">
<img src="./img_product_page/ADYY_1_201811098627323.jpg" >
<img src="./img_product_page/laptop2.webp" >
</div>
<div class="images">
<img src="./img_product_page/laptop1.webp" >
<img src="./img_product_page/laptop3.webp" >
</div>
</section>
</section>

<section class="container-column">
<section class="right-box">
    <p class="od">od xyz.pl</p>
    <section class="info">
      <img src="./img_product_page/information-common-super-seller-236577cfa7.svg" class="icon"> 
      <span class="divider"></span>
      <p>Firma</p>
      <span class="divider"></span>
      <span class="recommendation">poleca 99,7%</span>
    </section>
    <hr class="full">
    <p class="super">SUPERCENA</p>
    <section class="cena">
    <p>2999,<span class="zl">99 zł</span></p>
    <img src="./img_product_page/smart 1.svg">
  </section>
  <section class="check ">
    <p>zapłać później z</p>
    <img src="./img_product_page/pay 8.png">
    <p>sprawdź</p>
  </section>
  <p class="os">2 osoby kupiły tę ofertę</p>
  <hr>
  <p class="dostawa">dostawa jutro <span class="do">do 6 miast</span><span class="info-icon">ⓘ</span></p>
  <hr>
  <p class="szt">Liczba sztuk</p>
  <section class="quantity-container">
    <button>-</button>
    <input type="text" value="1" readonly>
    <button>+</button>
    <span class="z">z 21 sztuk</span>
  </section>
<section class="buttons">
    <button class="button">Dodaj do koszyka</button>
    <button class="button">Kup i zapłać</button>
</section>
<p class="leasing">Masz firmę? Weź leasing</p>
</section>

<section class=" right-box">
  <section class="qwe">
    <img src="./img_product_page/clock.png">
    <p>Jutro u Ciebie do 6 miast</p>
  </section>
  <hr>
  <section class="qwi">
    <img src="./img_product_page/deliverytruck.png">
    <section class="row">
    <p >Dostawa od 10,99 zł</p>
    <img src="./img_product_page/arrow.png">
  </section>
  </section>
  <hr>
  <section class="qwi">
    <img src="./img_product_page/shield.png" class="shield">
    <section class="row">
    <p>Zwrot za darmo - 14 dni<br><span class="down">Reklamacja | Alledrogo Protect</span></p>
    <img src="./img_product_page/arrow.png">
  </section>
  </section>
  <hr>
  <section class="qwi">
    <img src="./img_product_page/wallet.png">
    <section class="row">
    <p>Metody płatności<br><span class="down">Płać tak, jak lubisz</span></p>
    <img src="./img_product_page/arrow.png">
  </section>
  </section>
</section>

<section class=" right-box">
  <h2>Inne oferty produktu<span class="info-icon">ⓘ</span></h2>
  <p class="inne">Laptop Dell Inspiron 15 3520 i5 Silver Win11 15,6 " <br>Intel Core i5 32 GB / 1000 GB srebrny</p>
  <p class="nn">NAJTAŃSZE - NOWE</p>
  <section class="cenasm">
    <p>2999,<span class="zl">99 zł</span></p>
    <img src="./img_product_page/smart 1.svg">
    <img src="./img_product_page/arrow.png"class="arrow">
  </section>
  <p class="stan">Stan: Nowy</p>
  <hr>
  <p class="nn">NAJSZYBCIEJ</p>
  <section class="cenasm">
    <p>2999,<span class="zl">99 zł</span></p>
    <img src="./img_product_page/smart 1.svg">
    <img src="./img_product_page/arrow.png"class="arrow">
  </section>
  <p class="stan">dostawa: pojutrze</p>
</section>

<section class=" right-box">
<p class="sell">Sprzedaż i wysyłka:</p>
<p class="od">od xyz.pl</p>
<section class="infox">
  <img src="./img_product_page/information-common-super-seller-236577cfa7.svg" class="icon"> 
  <p>Super Sprzedawca</p>
  <span class="divider"></span>
  <p>Firma</p>
</section>
<hr class="full">
<section class="rate">
  <p>99,7%</p>
  <p class="po">kupujących poleciło tego sprzedawcę w<br> ostatnich 12 miesiącach</p>
</section>
<hr class="full">
<p class="teal">Inne przedmioty sprzedającego z kategorii <strong>Laptopy</strong></p>
<hr>
<p class="tealx">Wszystkie przedmioty sprzedającego</p>
<hr class="full">
<section class="infoxy">
  <p>O sprzedającym</p>
  <span class="divider"></span>
  <p>Zadaj pytanie</p>
</section>
</section>
</section>
</main> 
<section class="footer-section" id="footer-container"></section>  
  `;
  }};
  
});
