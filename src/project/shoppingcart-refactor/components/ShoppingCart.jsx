import OrderTable from "./OrderTable"

const ShoppingCart = ({ orders, deleteOrderHandler, deleteAll }) => {

    return (
        <>
            <section id="shoppingCart" className='mt-5'>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10">
                            <div className="table-responsive">
                                <div className="card card-body text-dark rounded-3 overflow-auto ">
                                    <table className='table table-bordered border-primary align-middle  '>
                                        <caption className='caption-top h3 fw-bold text-bg-primary text-center'>سبد خرید شما</caption>
                                        <thead>
                                            <tr>
                                                <th className='bg-secondary'>ردیف</th>
                                                <td className='fw-bold bg-secondary'>نام محصول</td>
                                                <td className='fw-bold bg-secondary'>قیمت</td>
                                                <td className='fw-bold bg-secondary text-center'>عملیات</td>
                                            </tr>
                                        </thead>

                                        {/* todo: tbody */}
                                        <tbody>
                                            {
                                                orders.length > 0 &&
                                                orders.map((order, index) => (
                                                    <OrderTable key={order.id} order={order} row={index + 1} deleteOrderHandler={deleteOrderHandler} />

                                                ))
                                            }
                                        </tbody>
                                        {/* todo End of tbody */}

                                        <tfoot className='text-center  w-100'>
                                            <tr>
                                                <td colSpan={4}>
                                                    <button className="btn btn-danger me-2" onClick={deleteAll}>حذف همه موارد</button>
                                                    <a href='aaa' className="btn btn-success">پرداخت</a>
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <br /><br /><br />
            </section>


        </>
    );
}
export default ShoppingCart;