import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import { productInfo } from '../../components';

import "./Products.css"
import { Button, Stack, useMediaQuery } from '@mui/material';
import { Modal } from 'react-bootstrap';

export default function UserList() {
  const [productData, setProductData] = useState(productInfo);
  const [showProductsModal, setShowproductsModal] = useState(false)
  let matches = useMediaQuery("(min-width:992px)")

  useEffect(() => {
    if (matches === true) setShowproductsModal(false)
  }, [matches])

  const removeHandler = (id) => {
    // console.log(id)
    if (productData) {
      const newProductInfo = productData.filter(product => product.id !== id)
      setProductData(newProductInfo)
      // console.log("newUserData: ", newProductInfo);
    } else {
      return (
        <h2>کاربری موجود نمیباشد</h2>
      )
    }

  }
  const editHandler = (id) => {
    // console.log(id)
  }
  let columns = [
    {
      field: "id",
      headerName: "ردیف",
      width: 90,
    },
    {
      field: "name",
      headerName: "نام محصول",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to="/" >
            <img src={params.row.avatar} className='rounded-circle' alt="" width={40} height={40} style={{ marginLeft: 7 }} />
            {params.row.title}
          </Link>
        )
      }
    },
    {
      field: "price",
      headerName: "قیمت",
      width: 250,
      renderCell: (params) => {
        return (
          <span style={{ color: "blue", fontWeight: "bold" }}>{params.row.price}</span>
        )
      }
    },
    {
      field: "status",
      headerName: "وضعیت",
      width: 150,
      renderCell: (params) => {
        return (
          params.row.status === "has"
            ? <span style={{ color: "green", fontWeight: "bold" }}>موجود</span>
            : <span style={{ color: "red", fontWeight: "bold" }}>موجود نیست</span>
        )
      }
    },
    {
      field: "action",
      headerName: "عملیات",
      width: 170,
      renderCell: (params) => {
        return (
          <Stack direction="row" spacing={1} sx={{ my: 1 }}>
            <Button variant='contained' color="error" size='small' onClick={() => removeHandler(params.row.id)}>حذف</Button>
            <Link to={`edit/${params.row.id}`}>
              <Button variant='contained' color="success" size='small' onClick={() => editHandler(params.row.id)} >ویرایش</Button>
            </Link>
          </Stack>
        )
      }
    }
  ]

  return (
    <>
      <div className='row justify-content-center mt-5 '>
        <div className="d-none d-lg-block col-md-12 col-lg-10 col-xl-11">
          <h3 className='text-center mb-3'>لیست محصولات</h3>
          <div className="dataGrid">
            <DataGrid
              rows={productData}
              columns={columns}
              disableSelectionOnClick
              pageSize={2}
              slots={{
                toolbar: GridToolbar
              }}
              autoHeight
              checkboxSelection
              sx={{ bgcolor: "whitesmoke", overflow: "scroll" }}
            />
          </div>
        </div>
        {/* todo display Xs-Sm-Md */}
        {/* todo: Buttons */}
        <div className='d-flex justify-content-center d-lg-none '>
          <Button variant='contained'
            color='secondary'
            className='me-2'
            onClick={() => setShowproductsModal((prev) => !prev)}
          >
            لیست محصولات
          </Button>
        </div>
      </div>

      {/* todo: Modals */}
      <Modal show={showProductsModal}
        fullscreen="lg-down"
        onHide={() => setShowproductsModal(false)}
        className='d-block d-lg-none'
        style={{ direction: "rtl" }}
      >
        <Modal.Header className='bg-primary-subtle' closeButton>
          <Modal.Title className='text-primary fw-bold'>لیست محصولات</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <DataGrid
            rows={productData}
            columns={columns}
            disableSelectionOnClick
            pageSize={2}
            autoHeight
            checkboxSelection
            slots={{
              toolbar: GridToolbar
            }}
            sx={{ bgcolor: "whitesmoke", }}
          />
        </Modal.Body>
      </Modal>


    </>
  )
}
