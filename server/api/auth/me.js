// server/api/me.js
export default defineEventHandler((event) => {
    console.log('event:' + event)
    return event.context.authUser;
  });
  