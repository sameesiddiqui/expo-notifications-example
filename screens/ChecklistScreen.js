import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import BodyText from '../components/BodyText'
import Colors from '../constants/Colors'

export default class ChecklistScreen extends React.Component {
  static navigationOptions = {
    title: 'Notifications Checklist',
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <BodyText>
            For in depth guides, check out the expo docs for notifications.
          </BodyText>

          <TouchableOpacity
            onPress={() => {}}
            style={{marginTop: 15}}>
            <Text style={styles.link}>Local Notifications:</Text>
          </TouchableOpacity>

          <BodyText>
            1. Create notification object{'\n'}
            2. Create scheduling object{'\n'}
            3. iOS only: ask for notification permissions{'\n'}
            4. iOS only: set up listener to handle the notification{'\n'}
          </BodyText>

          <TouchableOpacity
            onPress={() => {}}
            style={{marginTop: 15}}>
            <Text style={styles.link}>Push Notifications:</Text>
          </TouchableOpacity>

          <BodyText>
            1. Get the users push token{'\n'}
            2. Send the push notification using the expo push api{'\n'}
            3. Handle the push notification being received or clicked{'\n'}
          </BodyText>
        </View>
      </View>
    )
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
