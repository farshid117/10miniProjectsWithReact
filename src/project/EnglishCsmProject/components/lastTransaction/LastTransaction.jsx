import React from 'react';

import "./LastTransaction.css"

const Button = ({ type }) => {
    return (
        <button className={'widgetButton ' + type} > {type} </button>
    )
}
const LastTransaction = () => {
    return (
        <div className="table-responsive p-3" >
            <table className="table" style={{ direction: "ltr" }}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Customer</th>
                        <th scope="col">Date</th>
                        <th scope="col">Amount</th>
                        <th scope="col" className='text-center'>Status</th>
                    </tr>
                </thead>
                <tbody className='table-group-divider'>
                    <tr>
                        <th scope="row">1</th>
                        <td>alireza khayatpour</td>
                        <td>22 may 2023</td>
                        <td>120_000</td>
                        <td className='text-center'>
                            <Button type="pending" />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Maryam Khayatpour</td>
                        <td>12 may 2023</td>
                        <td>120_000</td>
                        <td className='text-center'>
                            <Button type="success" />
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Simin esmaeili</td>
                        <td>12 may 2023</td>
                        <td>120_000</td>
                        <td className='text-center'>
                            <Button type="reject" />
                        </td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
}

export default LastTransaction;
