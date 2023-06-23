import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const [profileImage,setProfileImage] = useState(null)
    const [loginData,setLoginData] = useState({
        userName:"",
        userSurname:"",
        userPassword:""
    })

    const convertBase64 = (file)=>{
        return new Promise((resolve,reject)=>{
            const fileReader = new FileReader()
            fileReader.readAsDataURL(file)
            fileReader.onload = () => {
                resolve(fileReader.result)
            }
            fileReader.onerror = (error) => {
                reject(error)
            }
        })
    }
    const uploadImage = async (e)=>{
        const file = e.target.files[0]
        const base64= await convertBase64(file)
        setProfileImage(base64)
    }
    
    const inputData = (e) => {
        setLoginData({...loginData,[e.target.name]:e.target.value})
    }
    
    const data = {
        userName: loginData.userName,
        userSurname: loginData.userSurname,
        userPassword: loginData.userPassword,
        userImage: profileImage
    }
        const navigate = useNavigate()
        
        const register = () => {
            axios.post(`http://localhost:3009/create-data`,data).then(res=>{
                console.log(res)
            })
            navigate("/user-data")
            console.log(data)
    }
  return (
    <div className='register'>
        <h2>Register</h2>
        <input placeholder='Adinizi daxil edin!' type="text" name='userName' onChange={inputData} />
        <input placeholder='Soyadinizi daxil edin!' type="text" name='userSurname' onChange={inputData} />
        <input placeholder='Sifrenizi daxil edin!' type="password" name='userPassword' onChange={inputData} />
        <input className='file' type="file" onChange={uploadImage}/>
        <button onClick={register}>Register</button>
    </div>
  )
}

export default Register