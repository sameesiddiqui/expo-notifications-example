import { Notifications } from 'expo'

// Example server, implemented in Rails: https://git.io/vKHKv
// const PUSH_ENDPOINT = 'https://expo-push-server.herokuapp.com/tokens'
// const PUSH_ENDPOINT = 'http://5acf2105.ngrok.io'
const PUSH_ENDPOINT = 'https://expo.io/--/api/v2/push/send'

export default (async function registerForPushNotificationsAsync (title, body, data) {
  // Get the token that uniquely identifies this device
  let token = await Notifications.getExpoPushTokenAsync()

  // POST the token to our backend so we can use it to send pushes from there
  return window.fetch(PUSH_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify([
      {
        to: token,
        title,
        body,
        data
      }
    ])
  })
})
