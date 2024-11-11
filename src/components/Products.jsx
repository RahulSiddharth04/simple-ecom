import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Products = () => {
  const dispatch = useDispatch();

  const productData = [
    // Men's Clothing
    {
      id: 1,
      title: "Men's Casual Shirt",
      description: "Comfortable and stylish casual shirt.",
      category: "men's clothing",
      price: 24.99,
      image: "/assets/wshirt.jpg",
    },
    {
      id: 2,
      title: "Men's Formal Suit",
      description: "Perfect for business and formal events.",
      category: "men's clothing",
      price: 89.99,
      image: "/assets/csuite.jpg",
    },
    {
      id: 3,
      title: "Men's Jogger Pants",
      description: "Comfortable and stylish jogger pants.",
      category: "men's clothing",
      price: 34.99,
      image: "/assets/mjp.jpg",
    },
    {
      id: 4,
      title: "Men's kurtha",
      description: "smooth and comfy.",
      category: "men's clothing",
      price: 35.99,
      image: "/assets/kurta.jpg",
    },
    {
      id: 5,
      title: "Men's T-shirt",
      description: "smooth and comfy.",
      category: "men's clothing",
      price: 35.99,
      image: "/assets/tshirt.jpg",
    },
    // Women's Clothing
    {
      id: 6,
      title: "Women's Summer Dress",
      description: "Light and breathable summer dress.",
      category: "women's clothing",
      price: 49.99,
      image: "/assets/wosd.jpg",
    },
    {
      id: 7,
      title: "Women's gym pants",
      description: "Stylish pants for gym or casual wear.",
      category: "women's clothing",
      price: 29.99,
      image: "/assets/wp.jpg",
    },
    {
      id: 8,
      title: "Women's Denim Jacket",
      description: "Trendy denim jacket for all seasons.",
      category: "women's clothing",
      price: 59.99,
      image: "/assets/wdj.jpg",
    },
    // Jewelry
    {
      id: 9,
      title: "Gold Necklace",
      description: "Elegant 18k gold necklace.",
      category: "jewelery",
      price: 299.99,
      image: "/assets/gnck.jpg",
    },
    {
      id: 10,
      title: "Silver Earrings",
      description: "Charming silver earrings for all occasions.",
      category: "jewelery",
      price: 99.99,
      image: "/assets/slr ear.jpg",
    },
    {
      id: 11,
      title: "Thanos Ring",
      description: "Sparkling diamond ring for engagements.",
      category: "jewelery",
      price: 499.99,
      image: "/assets/thanosr.jpg",
    },
    // Electronics
    {
      id: 12,
      title: "Smart watch",
      description: "Bluethooth calling smartphone.",
      category: "electronics",
      price: 699.99,
      image: "/assets/swatch.jpg",
    },
    {
      id: 13,
      title: "Laptop",
      description: "High-performance laptop.",
      category: "electronics",
      price: 999.99,
      image: "/assets/laptop.jpg",
    },
    {
      id: 14,
      title: "Smart Watch",
      description: "Stylish and functional smartwatch.",
      category: "electronics",
      price: 199.99,
      image: "/assets/smartwatch.jpg",
    },
    {
      id: 15,
      title: "Headphones",
      description: "Noise-canceling headphones.",
      category: "electronics",
      price: 149.99,
      image: "/assets/headphones.jpg",
    },
    {
      id: 16,
      title: "Tablet",
      description: "Portable and powerful tablet.",
      category: "electronics",
      price: 299.99,
      image: "/assets/oneplus-pad.jpg",
    },
    {
      id: 17,
      title: "Bluetooth Speaker",
      description: "Wireless Bluetooth speaker.",
      category: "electronics",
      price: 79.99,
      image: "/assets/sspeaker.jpg",
    },
    {
      id: 18,
      title: "Smart TV",
      description: "High-definition smart TV with streaming apps.",
      category: "electronics",
      price: 599.99,
      image: "/assets/smarttv.jpg",
    },
    {
      id: 19,
      title: "Gaming Console",
      description: "Popular gaming console for entertainment.",
      category: "electronics",
      price: 499.99,
      image: "/assets/gamingconsole.jpg",
    },
    {
      id: 20,
      title: "Fitness Tracker",
      description: "Track your fitness goals and monitor health metrics.",
      category: "electronics",
      price: 129.99,
      image: "/assets/fitnesstrack.jpg",
    },
    {
      id: 21,
      title: "Wireless Earbuds",
      description: "Compact and convenient wireless earbuds.",
      category: "electronics",
      price: 89.99,
      image: "/assets/Ear buds.jpg",
    },
  ];

  const [data, setData] = useState(productData);
  const [filter, setFilter] = useState(productData);

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  const Loading = () => (
    <div className="col-12 py-5 text-center">
      <Skeleton height={40} width={560} />
    </div>
  );

  const filterProduct = (cat) => {
    const updatedList = data.filter((item) => item.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons text-center py-5">
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => setFilter(data)}
          >
            All
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("men's clothing")}
          >
            Men's Clothing
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("women's clothing")}
          >
            Women's Clothing
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("jewelery")}
          >
            Jewelry
          </button>
          <button
            className="btn btn-outline-dark btn-sm m-2"
            onClick={() => filterProduct("electronics")}
          >
            Electronics
          </button>
        </div>

        {filter.map((product) => (
          <div
            id={product.id}
            key={product.id}
            className="col-md-4 col-sm-6 col-xs-8 col-12 mb-4"
          >
            <div className="card text-center h-100">
              <img
                className="card-img-top p-3"
                src={product.image}
                alt="Product"
                height={300}
              />
              <div className="card-body">
                <h5 className="card-title">
                  {product.title.substring(0, 12)}...
                </h5>
                <p className="card-text">
                  {product.description.substring(0, 90)}...
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item lead">$ {product.price}</li>
              </ul>
              <div className="card-body">
               
                <button
                  className="btn btn-dark m-1"
                  onClick={() => {
                    toast.success("Added to cart");
                    addProduct(product);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <>
      <div className="container my-3 py-3">
        <div className="row">
          <div className="col-12">
            <h2 className="display-5 text-center">Latest Products</h2>
            <hr />
          </div>
        </div>
        <div className="row justify-content-center">
          <ShowProducts />
        </div>
      </div>
    </>
  );
};

export default Products;
