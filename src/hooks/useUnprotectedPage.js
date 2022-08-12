import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { goToFeedPage } from "./../routes/coordinator.js"

export default function useUnprotectedPage() {
  const navigate = useNavigate();

  return (
    useEffect(()=>{
      const token = localStorage.getItem('token');
      if (token) {
        goToFeedPage(navigate);
      }
    },[navigate])
  )
}  