import { useState } from 'react';
import { Link } from 'react-router-dom';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

import { userRows } from '../../components';

import "./UserList.css"
import { Button, Stack } from '@mui/material';

export default function UserList() {
  const [userData, setUserData] = useState(userRows);
  const removeHandler = (id) => {
    console.log(id)
    if(userData) {
      const newUserData = userData.filter(user => user.id !== id)
      setUserData(newUserData)
      console.log("newUserData: ", newUserData);
    }else{
      return(
        <h2>کاربری موجود نمیباشد</h2>
      )
    }

  }
  const editHandler = (id) => {
    console.log(id)
  }
  let columns = [
    {
      field: "id",
      headerName: "ردیف",
      width: 90,
    },
    {
      field: "name",
      headerName: "نام و نام خانوادگی",
      width: 200,
      renderCell: (params) => {
        return (
          <Link to="/" >
            <img src={params.row.avatar} alt="" width={40} height={40} style={{ marginLeft: 7 }} />
            {params.row.userName}
          </Link>
        )
      }
    },
    {
      field: "email",
      headerName: "ایمیل",
      width: 250,
    },
    {
      field: "status",
      headerName: "وضعیت",
      width: 150,
      renderCell: (params) => {
        return (
          params.row.status === "Active" ? <span style={{ color: "green", fontWeight: "bold" }}>فعال</span> : <span style={{ color: "red", fontWeight: "bold" }}>غیرفعال</span>
        )
      }
    },
    {
      field: "trasaction",
      headerName: "تراکنش مالی",
      width: 90,
    },
    {
      field: "action",
      headerName: "عملیات",
      width: 170,
      renderCell: (params) => {
        return (
          <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
            <Button variant='contained' color="error" size='small' sx={{cursor:'pointer',}} onClick={() => removeHandler(params.row.id)}>حذف</Button>
            <Link to={`edit/${params.row.id}`}>
              <Button variant='contained' color="success" size='small' sx={{ cursor: 'pointer', }} onClick={() => editHandler(params.row.id)} >ویرایش</Button>
            </Link>
          </Stack>
        )
      }
    }
  ]

  return (
    <div className='row justify-content-center mt-5 '>
      <div className="col-12 col-md-12 col-lg-10 col-xl-11">
        <h3 className='text-center mb-3'>لیست کاربران</h3>
       <div className="dataGrid">
          <DataGrid
            rows={userData}
            columns={columns}
            disableSelectionOnClick
            pageSize={2}
            slots={{
              toolbar: GridToolbar
            }}
            autoHeight
            sx={{ bgcolor: "whitesmoke", }}
          />
       </div>
      </div>

    </div>
  )
}
