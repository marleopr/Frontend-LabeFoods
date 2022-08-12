import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './../pages/LoginPage/LoginPage'
import AddressPage from './../pages/AddressPage/AddressPage'
import CartPage from './../pages/CartPage/CartPage'
import FeedPage from './../pages/FeedPage/FeedPage'
import ProfilePage from './../pages/ProfilePage/ProfilePage'
import RestaurantDetailsPage from './../pages/RestaurantDetailsPage/RestaurantDetailsPage'
import SignUpPage from './../pages/SignUpPage/SignUpPage'
import EditPage from './../pages/EditPage/EditPage'
import ErrorPage from './../pages/ErrorPage/ErrorPage'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<FeedPage/>}/>
        <Route path="signup" element={<SignUpPage/>}/>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="address" element={<AddressPage/>}/>
        <Route path="cart" element={<CartPage/>}/>
        <Route path="profile" element={<ProfilePage/>}/>
        <Route path="restaurantdetails/:id" element={<RestaurantDetailsPage/>}/>
        <Route path="edit" element={<EditPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}