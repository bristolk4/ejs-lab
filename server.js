const express = require('express');
const app = express();
const RESTAURANT = {
    name: 'The Green Byte Bistro',
    isOpen: true,
    address: '742 Evergreen Rd, Mapleview, OS 45502',
    phone: '555-321-9876',
    menu: [
      { 
        id: 1,
        name: 'Quantum Quinoa Mushroom Burger',
        price: 13.00,
        rating: 4,
        category: 'mains',
        details: 'A vegetarian burger made with a quinoa and mushroom patty, it will take you to another realm.'
      },
      { 
        id: 2,
        name: 'Binary Berry Cheesecake',
        price: 10.11,
        rating: 3,
        category: 'desserts',
        details: 'A creamy cheesecake bursting with flavor. A mix of berries in every byte.'
      },
      { 
        id: 3,
        name: 'Recursive Rigatoni',
        price: 17.00,
        rating: 5,
        category: 'mains',
        details: 'A classic rigatoni pasta dish, layered with rich tomato sauce and herbs. You\'ll keep coming back for more.'
      },
      { 
        id: 4,
        name: 'Pumpkin Pi Squared',
        price: 3.14,
        rating: 5,
        category: 'desserts',
        details: 'A delightful pumpkin dessert, squared and spiced to perfection.'
      },
      { 
        id: 5,
        name: 'Fibonacci String Bean Fries',
        price: 11.23,
        rating: 5,
        category: 'sides',
        details: 'Crispy and lightly seasoned string bean fries, served in a pattern for a fun twist.'
      }
    ]
  }


app.get('/', (req, res) => {
    res.render('home.ejs', {restaurant: RESTAURANT}) // "restaurant: RESTAURANT" is the object
    // that defines data to send to the home.ejs template. passes "RESTAURANT" object from js to
    // ejs under the name "restaurant"
});  

app.get('/menu', (req, res) => {
    res.render('menu.ejs', {menu: RESTAURANT.menu}) // same thing but more specific with .menu
});

app.get('/menu/:category', (req, res) => { // I had to use chatGPT for some of this part
    const category = req.params.category // accesses "category" parameter (placeholder) in URL.
    // so when you change the URL to blahblah/menu/blank, this would assign "blank" to the category
    // const for this one URL
    const menuItems = []; // menuItems is an empty array that will get data when you change the URL
    for (const item of RESTAURANT.menu) { // cycles through each item in the menu array
        if (item.category === category) { // pretty much: you type in the category you want in the
            // URL and this will match it to the item with the matching category name
            menuItems.push(item); // uses push to add the data from the menu item with the matching
            // category name to the menuItems array. menuItems changes when you type in dif URL
        }
    }
    res.render('category.ejs', {menuItems, category})
});

app.listen(3000);
