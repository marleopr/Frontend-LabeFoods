export const goToAddressPage = (navigate) => {
    navigate("/address")
}

export const goToFeedPage = (navigate) => {
    navigate("/")
}

export const goToEditPage = (navigate) => {
    navigate("/edit")
}

export const goToLoginPage = (navigate) => {
    navigate("/login")
}

export const goToSignUpPage = (navigate) => {
    navigate("/signup")
}

export const goToCartPage = (navigate) => {
    navigate("/cart")
}

export const goToProfilePage = (navigate) => {
    navigate("/profile")
}

export const goToRestaurantDetailsPage = (navigate, id) => {
    navigate(`/restaurantdetails/${id}`)
}