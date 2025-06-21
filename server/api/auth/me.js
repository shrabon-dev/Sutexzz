// server/api/me.js
export default defineEventHandler((event) => {
  const user = event.context.authUser;

  if (!user) {
    return {
      user: null,
      error: 'Unauthorized',
    };
  }

  return {
    user,
  };
});
