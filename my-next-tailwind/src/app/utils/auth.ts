export const saveToken = (accessToken: string, refreshToken: string) => {
    sessionStorage.setItem("accessToken", accessToken);
    sessionStorage.setItem("refreshToken", refreshToken);
};

export const getAccessToken = () => sessionStorage.getItem("accessToken");

export const logout = () => {
    sessionStorage.clear();
    window.location.href = "/user/login";
};
