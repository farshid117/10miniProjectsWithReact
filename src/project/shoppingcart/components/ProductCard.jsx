import React, { Component } from 'react'

class ProductCard extends Component {
    state = {}
    render() {
        const { product, addToOrderHandler } = this.props
        return (
            <>

                <div className='col-12 col-md-3 col-lg-4 mb-4'>
                    <div className="card h-100" >

                        <img src={product.pic} className="card-img-top h-50" alt="pic" />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text text-muted" style={{fontSize: 14}}>{product.desc}</p>
                        </div>
                        <div className="card-footer text-center">
                            <button className="btn btn-primary" onClick={() => addToOrderHandler( product.id)} >اضافه کردن به سبد خرید</button>
                        </div>

                    </div>
                </div>

            </>
        )
    }
}

export default ProductCard;