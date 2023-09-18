// Get all products
fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))

//Get a single product
fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>console.log(json))

//Limit results
fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(json=>console.log(json))


//Sort results
fetch('https://fakestoreapi.com/products?sort=desc')
            .then(res=>res.json())
            .then(json=>console.log(json))


//Get all categories
fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>console.log(json))

// Sort results

fetch('https://fakestoreapi.com/products?sort=desc')
            .then(res=>res.json())
            .then(json=>console.log(json))


// Get All Categories
fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>console.log(json))

// Get products in a specific category
fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res=>res.json())
            .then(json=>console.log(json))


//Add new product

fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))

//Update a product

fetch('https://fakestoreapi.com/products/7',{
            method:"PUT",
            body:JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))

fetch('https://fakestoreapi.com/products/7',{
                method:"PATCH",
                body:JSON.stringify(
                    {
                        title: 'test product',
                        price: 13.5,
                        description: 'lorem ipsum set',
                        image: 'https://i.pravatar.cc',
                        category: 'electronic'
                    }
                )
            })
                .then(res=>res.json())
                .then(json=>console.log(json))

//Delete a product

fetch('https://fakestoreapi.com/products/6',{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=>console.log(json))


//Cart

//Get all carts
fetch('https://fakestoreapi.com/carts')
            .then(res=>res.json())
            .then(json=>console.log(json))

//Get a single cart

fetch('https://fakestoreapi.com/carts/5')
            .then(res=>res.json())
            .then(json=>console.log(json))

//Limit results

fetch('https://fakestoreapi.com/carts?limit=5')
            .then(res=>res.json())
            .then(json=>console.log(json))

//Sort results

fetch('https://fakestoreapi.com/carts?sort=desc')
            .then(res=>res.json())
            .then(json=>console.log(json))

//Get carts in a date range

fetch('https://fakestoreapi.com/carts?startdate=2019-12-10&enddate=2020-10-10')
            .then(res=>res.json())
            .then(json=>console.log(json))

//Get user carts

fetch('https://fakestoreapi.com/carts/user/2')
            .then(res=>res.json())
            .then(json=>console.log(json))

//Add a new product

fetch('https://fakestoreapi.com/carts',{
            method:"POST",
            body:JSON.stringify(
                {
                    userId:5,
                    date:2020-02-03,
                    products:[{productId:5,quantity:1},{productId:1,quantity:5}]
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))

//Update a product

fetch('https://fakestoreapi.com/carts/7',{
            method:"PUT",
            body:JSON.stringify(
                {
                    userId:3,
                    date:2019-12-10,
                    products:[{productId:1,quantity:3}]
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))

fetch('https://fakestoreapi.com/carts/7',{
            method:"PATCH",
            body:JSON.stringify(
                {
                    userId:3,
                    date:2019-12-10,
                    products:[{productId:1,quantity:3}]
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))

//Delete a cart

fetch('https://fakestoreapi.com/carts/6',{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=>console.log(json))


//Users

//Get all users
fetch('https://fakestoreapi.com/users')
            .then(res=>res.json())
            .then(json=>console.log(json))

//Get a single user
fetch('https://fakestoreapi.com/users/1')
            .then(res=>res.json())
            .then(json=>console.log(json))
//Limit results

fetch('https://fakestoreapi.com/users?limit=5')
            .then(res=>res.json())
            .then(json=>console.log(json))

//Sort results

fetch('https://fakestoreapi.com/users?sort=desc')
            .then(res=>res.json())
            .then(json=>console.log(json))
//Add a new user

fetch('https://fakestoreapi.com/users',{
            method:"POST",
            body:JSON.stringify(
                {
                    email:'John@gmail.com',
                    username:'johnd',
                    password:'m38rmF$',
                    name:{
                        firstname:'John',
                        lastname:'Doe'
                    },
                    address:{
                        city:'kilcoole',
                        street:'7835 new road',
                        number:3,
                        zipcode:'12926-3874',
                        geolocation:{
                            lat:'-37.3159',
                            long:'81.1496'
                        }
                    },
                    phone:'1-570-236-7033'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))

//Update a users

fetch('https://fakestoreapi.com/users/7',{
            method:"PUT",
            body:JSON.stringify(
                {
                email:'John@gmail.com',
                username:'johnd',
                password:'m38rmF$',
                name:{
                    firstname:'John',
                    lastname:'Doe'
                },
                address:{
                    city:'kilcoole',
                    street:'7835 new road',
                    number:3,
                    zipcode:'12926-3874',
                    geolocation:{
                        lat:'-37.3159',
                        long:'81.1496'
                    }
                },
                phone:'1-570-236-7033'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))


            fetch('https://fakestoreapi.com/users/7',{
                method:"PATCH",
                body:JSON.stringify(
                    {
                        email:'John@gmail.com',
                        username:'johnd',
                        password:'m38rmF$',
                        name:{
                            firstname:'John',
                            lastname:'Doe'
                        },
                        address:{
                            city:'kilcoole',
                            street:'7835 new road',
                            number:3,
                            zipcode:'12926-3874',
                            geolocation:{
                                lat:'-37.3159',
                                long:'81.1496'
                            }
                        },
                        phone:'1-570-236-7033'
                    }
                )
            })
                .then(res=>res.json())
                .then(json=>console.log(json))

//Delete a user

fetch('https://fakestoreapi.com/users/6',{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=>console.log(json))


//Login

fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: "mor_2314",
                password: "83r5^_"
            })
        })
            .then(res=>res.json())
            .then(json=>console.log(json))
