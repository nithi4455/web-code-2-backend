import React from 'react'
import AuthForm from './AuthForm'

function AdminAuth() {
  const getData=(data)=>{
    console.log("Admin", data)
  }
  return (
    <div>
        <AuthForm onSubmit={getData}/>
    </div>
  )
}

export default AdminAuth