import React, { useState, useEffect } from "react";
import { GlobalContext } from "./GlobalContext"
import axios from "axios";
import { BASE_URL } from "../../constants/BASE_URL";

export default function GlobalState(props) {
  const token = localStorage.getItem("token")
  const [currentUser, setCurrentUser] = useState({})

  const getProfile = () => {
    if (token) {
      axios.get(`${BASE_URL}/profile`, {
        headers: {
          auth: token
        }
      })
        .then((res) => {
          setCurrentUser(res.data.user)
        })
        .catch((err) => {
            alert("Ocorreu um erro em localizar seus dados tente novamente")
        })
    } else {
    }
  }

  useEffect(() => {
    getProfile()
  }, [token])

  const values = {
    currentUser,
    setCurrentUser,
  }

  const Provider = GlobalContext.Provider

  return <Provider value={values}>{props.children}</Provider>
}