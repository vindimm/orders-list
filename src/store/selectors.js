export const getOrders = (state) => state["ORDERS_DATA"].orders;

export const getAuthStatus = (state) => state["USER_DATA"].authStatus;

export const getUser = (state) => state["USER_DATA"].user;

export const getRole = (state) =>["USER_DATA"].user.role;
