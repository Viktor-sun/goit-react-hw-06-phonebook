const getIsAuthenticated = state => state.auth.isAuthenticated;

const getUsername = state => state.auth.user.name;
const getLoading = state => state.auth.loading;

// eslint-disable-next-line
export default { getIsAuthenticated, getUsername, getLoading };
