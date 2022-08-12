import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToLoginPage } from "./../routes/coordinator.js"

export default function useProtectedPage() {
  const navigate = useNavigate();

  return (
    useEffect(()=>{
      const token = localStorage.getItem('token');
      if (!token) {
        goToLoginPage(navigate);
      } else {
        localStorage.setItem('page', 1);
      }
    },[navigate])
  )
}  