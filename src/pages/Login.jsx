import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Login = () => {
    const [userData,setUserData] = useState([])
    useEffect(()=>{
        axios(`http://localhost:3009/get-data`).then(res=>{
            setUserData(res.data.data)
        })
    })
  return (
    <div>
        <table id="customers">

            <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Password</th>
                    <th>Image</th>
                </tr>
            </thead>

            <tbody>
            {userData.map((item,index) => (
                <tr key={index}>
                <td>{item.userName}</td>
                <td>{item.userSurname}</td>
                <td>{item.userPassword}</td>

                <td>
                  <img className='image' src={item.userImage}/>
                </td>
              </tr>
            ))}
            </tbody>

        </table>
    </div>
  )
}

export default Login