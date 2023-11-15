import { useState } from 'react'
import { confirmAlert } from 'react-confirm-alert'
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

import NavbarShop from './components/navbar/Navbar';
import ProductCard from './components/ProductCard';
import ShoppingCart from './components/ShoppingCart';

import "./ShopRefactor.css"

const ShopRefactor = () => {
    const [orders, setOrders] = useState([])
    const [products,] = useState([
        { id: "1", name: "کفش بوکس",   pic: "./img/104.jpg",  price: 1500000, desc: "جنس تمام چرم مارک vanum",     },
        { id: "2", name: "دستکش بوکس", pic: "./img/105.jpg", price: 1200000,desc: "چرم اصلی-ساخت آلمان Topten",  },
        { id: "3", name: "شورت بوکس",   pic: "./img/108.jpg", price: 160000, desc: "مناسب برای فایت",             },
        { id: "4", name: "باند بوکس",     pic: "./img/110.jpg", price: 1500000, desc: "جنس تمام چرم مارک vanum",    },
        { id: "5", name: "ساق بند بوکس", pic: "./img/114.jpg", price: 1500000, desc: "جنس تمام چرم مارک vanum",    },
        { id: "6", name: "لثه بند بوکس",  pic: "./img/104.jpg", price: 1500000, desc: "جنس تمام چرم مارک vanum",    },
    ])

    const addToOrderHandler = (id) => {
        //console.log(id)
        const thereIs = orders.filter(order => order.id === id)

        if (!thereIs.length) {
            const indexProduct = products.findIndex(product => product.id === id)
            if (indexProduct !== -1) {
                setOrders([...orders, { ...products[indexProduct] }])
            } else {
                alert("محصولی با این id درون لیست محصولات موجود نمیباشد")
            }
        } else {
            alert("این محصول در سبد خرید موجود میباشد")
        }
    }
    const confirmAlertHandler = (id) => {
        confirmAlert({
            customUI: ({ onClose }) => {
                return (
                    <div className="card">
                        <div className="card-body">
                            <div className='custom-ui'>
                                <h1>آیا مطمئن هستید</h1>
                                <p>که میخواهید این محصول را از سبد خرید حذف کنید؟</p>
                                <button className='btn btn-warning' onClick={onClose}>خیر</button>
                                <button
                                    className='btn btn-success ms-3'
                                    onClick={() => {
                                        deleteOrderHandler(id);
                                        onClose();
                                    }}
                                >
                                    بله، حذف کن
                                </button>
                            </div>

                        </div>
                    </div>

                );
            }
        });
        
    }

    const deleteOrderHandler = (id) =>{
        const indexOrders = orders.findIndex(order => order.id === id)
         const newOrders = orders.filter(order => order.id !== orders[indexOrders].id)
         setOrders(newOrders)
        toast.error('محصول مورد نظر حذف گردید', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        }); 
    }

    const deleteAll = () => {
        setOrders([])
        toast.error('سبد خرید مورد نظر حذف گردید', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
   
    return (
        <div className="Shop">
            <Helmet>
                <title>فروشگاه | 10 مینی پروژه ری‌اکت</title>
            </Helmet>
            <NavbarShop />

            <div id='header-tex' style={{marginTop:150}}>
                <h1 className='text-center mt-3' style={{ fontFamily: "Booter" }}>Shop Product</h1>
            </div>

            {/* Product Cart */}
            <section id='ProductCard' className='mt-2'>
                <div className="container">
                    <div className="row">
                        {
                            products.map(product => (
                                <ProductCard key={product.id} product={product} addToOrderHandler={addToOrderHandler} />
                            ))
                        }
                    </div>
                </div>
            </section>

            {/* Shopping Cart */}
            <hr />
            <section id='shoppingCart'>
                <h1 className='text-center' style={{ fontFamily: "Booter" }}>Shopping Cart</h1>
                {
                    orders.length > 0 &&
                    <ShoppingCart orders={orders} deleteOrderHandler={confirmAlertHandler} deleteAll={deleteAll} />
                }
            </section>

        </div>
    );

}

export default ShopRefactor;