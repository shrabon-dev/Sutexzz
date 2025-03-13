export default function ({ store, redirect }) {
  // Ensure this runs only on the client side
  if (process.client) {
    // Retrieve the auth object from localStorage
    const authString = localStorage.getItem('auth');

    // If auth data is not found, redirect to login
    if (!authString) {
      console.log(auth.token)

      return navigateTo('/client/login');
    }

    // Parse the auth object
    const auth = JSON.parse(authString);

    // If the token is missing or invalid, redirect to login
    if (!auth?.token) {
      console.log(auth)
      return navigateTo('/client/login');
    }
  }
}