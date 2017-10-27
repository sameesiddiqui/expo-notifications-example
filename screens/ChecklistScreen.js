import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { WebBrowser } from 'expo'
import BodyText from '../components/BodyText'
import Colors from '../constants/Colors'

export default class ChecklistScreen extends React.Component {
  static navigationOptions = {
    title: 'Notifications Checklist',
  }

  render () {
    const localNotifUrl = 'https://docs.expo.io/versions/latest/sdk/notifications.html#local-notifications'
    const pushNotifUrl = 'https://docs.expo.io/versions/latest/guides/push-notifications.html'

    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <BodyText>
            For in depth guides and full parameter lists check out the expo docs.
          </BodyText>

          <TouchableOpacity
            onPress={() => this._openLink(localNotifUrl)}
            style={{marginTop: 15}}>
            <Text style={styles.link}>Local Notifications:</Text>
          </TouchableOpacity>

          <BodyText>
            1. Create your notification object (title and body are required){'\n'}
            2. Create scheduling object (if you want to send it in the future){'\n'}
            3. iOS only: ask for permission to send notifications{'\n'}
            4. iOS only: set up listener to handle the notification{'\n'}
          </BodyText>

          <TouchableOpacity
            onPress={() => this._openLink(pushNotifUrl)}
            style={{marginTop: 15}}>
            <Text style={styles.link}>Push Notifications:</Text>
          </TouchableOpacity>

          <BodyText>
            1. Get the unique token that identifies the device (use Notifications.getExpoPushTokenAsync){'\n'}
            2. Send the push notification using the expo push api{'\n'}
            3. Respond to the notification being received or selected by the user{'\n'}
          </BodyText>
        </View>
      </View>
    )
  }

  async _openLink (url) {
    await WebBrowser.openBrowserAsync(url)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.offWhite,
  },
  contentContainer: {
    margin: 15
  },
  link: {
    fontSize: 20,
    color: Colors.blue
  }
})
