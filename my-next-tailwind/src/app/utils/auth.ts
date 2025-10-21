export const saveToken = (accessToken: string, refreshToken: string) => {
    sessionStorage.setItem("accessToken", accessToken);
    sessionStorage.setItem("refreshToken", refreshToken);
};

export const getAccessToken = () => sessionStorage.getItem("accessToken");

export const saveUserInfo = (userInfo: { fullName: string; username: string; email?: string }) => {
    sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
};

export const getUserInfo = () => {
    const userInfo = sessionStorage.getItem("userInfo");
    return userInfo ? JSON.parse(userInfo) : null;
};

export const isLoggedIn = () => {
    return !!getAccessToken();
};

export const logout = () => {
    sessionStorage.clear();
    window.location.href = "/user/login";
};
