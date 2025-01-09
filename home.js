const translations = {
    "en": {
        "homeLink": "Home",
        "aboutLink": "About",
        "servicesLink": "Services",
        "contactLink": "Contact",
        "loginBtn": "Login",
        "registerBtn": "Register",
        "welcome": "Welcome to Our Coffee Shop",
        "tagline": "Your favorite place for coffee and comfort",
        "menuTitle": "Our Coffee Menu",
        "espresso": "Espresso",
        "espressoDescription": "A rich and bold coffee served in a small cup.",
        "espressoPrice": "5.50 GEL",
        "cappuccino": "Cappuccino",
        "cappuccinoDescription": "A smooth espresso topped with steamed milk and frothy foam.",
        "cappuccinoPrice": "7.00 GEL",
        "latte": "Latte",
        "latteDescription": "A creamy espresso combined with steamed milk.",
        "lattePrice": "11.20 GEL",
        "seeMenu": "See Full Menu",
        "aboutTitle": "About Us",
        "aboutText": "Welcome to our coffee shop, where we take pride in serving the finest coffee blends and creating a cozy atmosphere for all our customers. Whether you're grabbing a quick cup to-go or relaxing in our cafe, we're here to make your coffee experience exceptional!",
        "footer": "© 2024 Coffee Shop. All rights reserved."
    },
    "ka": {
        "homeLink": "მთავარი",
        "aboutLink": "ჩვენ შესახებ",
        "servicesLink": "სერვისები",
        "contactLink": "კონტაქტი",
        "loginBtn": "შესვლა",
        "registerBtn": "რეგისტრაცია",
        "welcome": "კარგი იყოს, ჩვენი ყავის მაღაზია",
        "tagline": "თქვენი საყვარელი ადგილი ყავისა და კომფორტისთვის",
        "menuTitle": "ჩვენი ყავის მენიუ",
        "espresso": "ესპრესო",
        "espressoDescription": "მდიდარი და ძლიერი ყავა, რომელიც მინი ჭიქაში ემსახურება.",
        "espressoPrice": "5.50 GEL",
        "cappuccino": "კაპუჩინო",
        "cappuccinoDescription": "მოხერხებული ესპრესო, რომელიც დაფარულია შეწურული რძითა და მუქი ქაფით.",
        "cappuccinoPrice": "7.00 GEL",
        "latte": "ლატე",
        "latteDescription": "კრემისებრი ესპრესო, რომელიც შერწყმულია შეწურულ რძესთან.",
        "lattePrice": "11.20 GEL",
        "seeMenu": "იხილეთ სრული მენიუ",
        "aboutTitle": "ჩვენ შესახებ",
        "aboutText": "მოგესალმებით ჩვენს ყავის მაღაზიაში, სადაც სიამოვნებით ვემსახურებით საუკეთესო ყავის ბლენდებს და ქმნით კომფორტულ ატმოსფეროს ყველა ჩვენს სტუმრისთვის. თუ სწრაფად ყავას იღებთ, ან ჩვენს კაფეში მოდიხართ დასასვენებლად, ჩვენ ყოველთვის მზად ვართ, რომ თქვენი ყავის გამოცდილება გამორჩეული გავხადოთ!",
        "footer": "© 2024 ყავის მაღაზია. ყველა უფლება დაცულია."
    }
};

function changeLanguage(language) {
    for (const key in translations[language]) {
        const element = document.getElementById(key);
        if (element) {
            element.textContent = translations[language][key];
        }
    }
}
