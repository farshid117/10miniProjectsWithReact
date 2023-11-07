import React, { Component } from 'react'

class OrderTable extends Component {
 
    render() { 
        const { order, row, deleteOrderHandler } = this.props
        
        
        return (
            <>
                <tr>
                    <th>{row}</th>
                    <td style={{ fontSize: 14, fontWeight: "bold" }}>{order.name}</td>
                    <td>{order.price}<span className='fw-bold ms-2'>تومان</span></td>
                    <td>
                        <div className='d-flex justify-content-center'>
                            <button className="btn btn-warning btn-sm me-2">ویرایش</button>
                            <button className="btn btn-danger btn-sm " onClick={()=> deleteOrderHandler(order.id)}>حذف</button>
                        </div>
                    </td>
                </tr>
            </>
        );
    }
}
 
export default OrderTable;