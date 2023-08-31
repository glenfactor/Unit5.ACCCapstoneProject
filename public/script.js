document.addEventListener('DOMContentLoaded', () => {
//GET all the products
    fetch('https://fakestoreapi.com/products') // fetch the data from the API
        .then(response => response.json()) // convert the data to JSON
        .then(data => {
            // iterate through the data and create <li> elements
            data.forEach(product => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <img src="${product.image}" alt="">
                    <p>Name: ${product.title}</p>
                    <p>Category: ${product.category}</p>
                    <p>Price: $${product.price}</p>
                    <p>Description: ${product.description}</p>
                `;
                document.querySelector('ul').appendChild(listItem);
            });
        }
        )
        .catch(error => console.error('Error fetching products:', error));

});

// Get a single product
    fetch('https://fakestoreapi.com/products/1')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    }
    )
    .catch(error => console.error('Error fetching product:', error));

// Code snippet from script.js
