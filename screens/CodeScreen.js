import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Colors from '../constants/Colors'

export default class CodeScreen extends React.Component {
  static navigationOptions = {
    title: 'Code',
  };

  render() {

    return (
      <ScrollView style={styles.container}>
        <View style={{margin: 15}}>
          {this._localInstructions()}
          {this._pushInstructions()}
        </View>
      </ScrollView>
    );
  }

  _localInstructions = () => {
    const notification = {
      title: 'this is your title!',
      body: 'and your body',
      data: { iWantData: 'yesPlease' },
      ios: {
        sound: true
      },
      android: {
        sound: true
      }
    }

    return (
      <View>
        <Text style={{fontSize: 20}}>
          Scheduling local notifications
        </Text>
        <Text style={{marginTop: 10}}>
          Creating a local notification object is easy:
        </Text>

        <View style={styles.codeBlock}>
          <Text style={styles.code}>
            {'const notification = ' + JSON.stringify(notification, null, '\t')}
          </Text>
        </View>

        <Text>
          Then just schedule and send!
        </Text>

        <View style={styles.codeBlock}>
          <Text style={styles.code}>
            {'const scheduleOptions = {' + '\n\t' + '"time": Date.now() + 5000\n}'}
            {`\n\n`}
            {'Notifications.scheduleLocalNotificationAsync(' + '\n\t' + 'notification' +
            '\n\t' + 'scheduleOptions\n)'}
          </Text>
        </View>
      </View>
    )
  }

  _pushInstructions = () => {
    const fetchObj = `{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        token: {
          value: token,
        },
        user: {
          username: 'Steve Jobs',
        }
      })
    }`

    const notification = `{
      to: usersPushToken,
      sound: 'default',
      body: 'This is a test notification',
      data: { withSome: 'data' },
    }`

    return (
      <View>
        <Text style={{marginTop: 20, fontSize: 20}}>
          Push notification process
        </Text>
        <Text style={{marginTop: 10}}>
          Getting push notification tokens is simple too:
        </Text>

        <View style={styles.codeBlock}>
          <Text style={styles.code}>
            let token = await Notifications.getExpoPushTokenAsync()
          </Text>
        </View>

        <Text>
          Send the token to your server so you know the device to send the notification to.
        </Text>

        <View style={styles.codeBlock}>
          <Text style={styles.code}>
            {'const yourServer = https://reallyCoolSite.com/push_token'}
            {`\n\n`}
            {'fetch(yourServer, ' + fetchObj + ')'}
          </Text>
        </View>

        <Text>
          Lastly, use the token you stored and send a notification from your server code!
        </Text>

        <View style={styles.codeBlock}>
          <Text style={styles.code}>
            {"import Expo from 'expo-server-sdk'"}
            {`\n`}
            {'let expo = new Expo()'}
            {`\n\n`}
            {'let notification = ' + notification}
            {`\n`}
            {'expo.sendPushNotificationsAsync(notification)'}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: 15,
    backgroundColor: Colors.offWhite,
  },
  codeBlock: {
    backgroundColor: '#eaeaea',
    flex: 1,
    marginTop: 10,
    marginBottom: 10
  },
  code: {
    fontFamily: 'terminal',
    padding: 10
  }
});
