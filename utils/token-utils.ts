// export const setTokenWithTimeout = (token: string) => {
//   const expiryDuration = 3 * 60 * 60 * 1000;
//   localStorage.setItem("authToken", token);
//   setTimeout(() => {
//     clearToken();
//   }, expiryDuration);
// };

export const getToken = () => {
  return localStorage.getItem("authToken");
};

export const clearToken = () => {
  localStorage.removeItem("authToken");
  window.location.href = "/login";
};
