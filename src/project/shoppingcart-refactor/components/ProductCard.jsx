
const ProductCard = ({ product, addToOrderHandler }) => {

        return (
            <>

                <div className='col-12 col-sm-6 col-md-4 col-lg-3 g-2'>
                    <div className="card h-100 ">
                        <img src={product.pic} className="card-img-top h-50 rounded-bottom-3" alt="pic" />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text text-muted" style={{fontSize: 14}}>{product.desc}</p>
                        </div>
                        <div className="card-footer text-center">
                            <button className="btn btn-primary" onClick={() => addToOrderHandler(product.id)} >اضافه کردن به سبد خرید</button>
                        </div>

                    </div>
                </div>

            </>
        )

}

export default ProductCard;