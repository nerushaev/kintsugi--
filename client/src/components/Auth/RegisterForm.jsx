import { useState } from "react"

export default function RegisterForm() {
    const [userData, setUserData] = useState({
    email: '',
    name: '',
    password: '',
    confirmPassword: '',
    })
  
  return (
    <div>RegisterForm</div>
  )
}
