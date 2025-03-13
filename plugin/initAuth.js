export default function () {
    if (process.client) {
      const auth = {
        name: 'Muhammad Ali',
        disg: 'Video Editor',
        age: 15,
        photo: 'https://alicenter.org/wp-content/uploads/2023/07/ALI-Header-Gradient-aspect-ratio-8-9-910x1024.jpg',
        token: 'tkn1205sdfsdf653506', // Set a valid token
      };
      localStorage.setItem('auth', JSON.stringify(auth));
    }
  }