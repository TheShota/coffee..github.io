<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Coffee Shop Homepage</title>
    <link rel="stylesheet" href="home.css">
    <link rel="icon" href="images/logo.ico">
    <script src="home.js"></script>
   
</head>
<body>
    <nav>
        <ul class="menu">
            <li><a href="home.html" id="homeLink">Home</a></li>
            <li><a href="about.html" id="aboutLink">About</a></li>
            <li><a href="servise.html" id="servicesLink">Services</a></li>
            <li><a href="contact.html" id="contactLink">Contact</a></li>
        </ul>
        <div class="auth-buttons">
            <a href="autorization.html" class="auth-btn" id="loginBtn">Login</a>
            <a href="registration.html" class="auth-btn" id="registerBtn">Register</a>
        </div>
    </nav>

    <div class="slider">
        <input type="radio" name="slide" id="slide1" checked>
        <input type="radio" name="slide" id="slide2">
        <input type="radio" name="slide" id="slide3">
        <input type="radio" name="slide" id="slide4">
        <div class="slides">
            <div class="slide" id="s1">
                <img src="/unk1.jpg.webp" alt="Slide 1">
            </div>
            <div class="slide" id="s2">
                <img src="images/unk3.jpg" alt="Slide 2">
            </div>
            <div class="slide" id="s3">
                <img src="images/unk4.jpg.webp" alt="Slide 3">
            </div>
            <div class="slide" id="s4">
                <img src="images/unk2.jpg.webp" alt="Slide 4">
            </div>
        </div>
        <div class="nav">
            <label for="slide1" class="dot"></label>
            <label for="slide2" class="dot"></label>
            <label for="slide3" class="dot"></label>
        </div>
    </div>

    <!-- Hero Section -->
    <header class="hero">
        <div class="hero-content">
            <h1 id="welcome">Welcome to Our Coffee Shop</h1>
            <p id="tagline">Your favorite place for coffee and comfort</p>
        </div>
    </header>

    <!-- Coffee Menu Section -->
    <section id="menu" class="menu-section">
        <h2 id="menuTitle">Our Coffee Menu</h2>
        <div class="menu-items">
            <div class="menu-item">
                <img src="images/How_Much_Caffeine_in_Italian_Espresso__A_Quick_Guide.jpg.webp" alt="Espresso">
                <h3 id="espresso">Espresso</h3>
                <p id="espressoDescription">A rich and bold coffee served in a small cup.</p>
                <p class="price" id="espressoPrice">5.50 GEL</p>
            </div>
            <div class="menu-item">
                <img src="images/cappuchino.jpeg" alt="Cappuccino">
                <h3 id="cappuccino">Cappuccino</h3>
                <p id="cappuccinoDescription">A smooth espresso topped with steamed milk and frothy foam.</p>
                <p class="price" id="cappuccinoPrice">7.00 GEL</p>
            </div>
            <div class="menu-item">
                <img src="images/latte.jpeg" alt="Latte">
                <h3 id="latte">Latte</h3>
                <p id="latteDescription">A creamy espresso combined with steamed milk.</p>
                <p class="price" id="lattePrice">11.20 GEL</p>
            </div>
        </div>
       <a href="menu.html" class="see-menu-btn" id="seeMenu">See Full Menu</a>
    </section>
    
    <section id="about" class="about-section">
        <h2 id="aboutTitle">About Us</h2>
        <p id="aboutText">Welcome to our coffee shop, where we take pride in serving the finest coffee blends and creating a cozy atmosphere for all our customers. Whether you're grabbing a quick cup to-go or relaxing in our cafe, we're here to make your coffee experience exceptional!</p>
    </section> 

    <div class="language-switcher">
        <button onclick="changeLanguage('en')">English</button>
        <button onclick="changeLanguage('ka')">ქართული</button>                                
    </div>                           

    <footer id="footer">
        &copy; 2024 Coffee Shop. All rights reserved.
    </footer>
</body>
</html>
