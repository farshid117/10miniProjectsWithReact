import React, { Component } from 'react'

import Navbar from './components/navbar/Navbar';
import ProductCard from './components/ProductCard';
import ShoppingCart from './components/ShoppingCart';

class Shop extends Component {
    state = {
        products: [
            { id: "1", name: "کلاه بوکس",     pic: "./img/104.jpg", desc: "جنس تمام چرم مارک vanum",    price: 1500000 },
            { id: "2", name: "دستکش بوکس", pic: "./img/105.jpg", desc: "چرم اصلی-ساخت آلمان Topten",  price: 1200000 },
            { id: "3", name: "شورت بوکس",   pic: "./img/108.jpg", desc: "مناسب برای فایت",             price: 160000  },
            { id: "4", name: "کلاه بوکس",     pic: "./img/110.jpg", desc: "جنس تمام چرم مارک vanum",    price: 1500000 },
            { id: "5", name: "کلاه بوکس",     pic: "./img/114.jpg", desc: "جنس تمام چرم مارک vanum",    price: 1500000 },
            { id: "6", name: "کلاه بوکس",     pic: "./img/112.jpg", desc: "جنس تمام چرم مارک vanum",    price: 1500000 },
        ],
        orders: [],

    }
    addToOrderHandler = ( id) => {
        console.log(id)

        const thereIs = this.state.orders.filter(order => order.id === id)

        if (!thereIs.length) {
            const indexProduct = this.state.products.findIndex(product => product.id === id)
            if(indexProduct !== -1) {
                this.setState({ orders: [...this.state.orders, { ...this.state.products[indexProduct] }], })
            }else{
                alert("محصولی با این id درون لیست محصولات موجود نمیباشد")
            }
        }else {
            alert("این محصول در سبد خرید موجود میباشد")
        }
    }
    deleteOrderHandler = (id) => {
        console.log(id)
        const indexOrders = this.state.orders.findIndex(order => order.id === id)
        console.log("indexOrders: ", indexOrders);

        const newOrders = this.state.orders.filter(order => order.id !== this.state.orders[indexOrders].id)
        console.log("newOrders: ", newOrders);
        
        this.setState({ orders: newOrders })   
    }

    deleteAll = () =>{
        console.log(this)
        this.setState({orders: []})
    }


    render() {
        const { products, orders } = this.state
        return (
            <div className="Shop">
                <Navbar />
            <br /><br />
            <h1 className='text-center' style={{fontFamily: "Booter" }}>Shop Product</h1>
                <section id='productCard' className='mt-5'>
                    <div className="container">
                        <div className="row">
                            {
                                products.map(product => (
                                    <ProductCard key={product.id} product={product} addToOrderHandler={this.addToOrderHandler} />
                                ))
                            }
                        </div>
                    </div>
                </section>
                <hr />
                <h1 className='text-center' style={{ fontFamily: "Booter" }}>Shopping Cart</h1>

                {
                    orders.length > 0 &&
                    <ShoppingCart orders={orders} deleteOrderHandler={this.deleteOrderHandler} deleteAll={this.deleteAll} />
                }

            </div>
        );
    }
}

export default Shop;