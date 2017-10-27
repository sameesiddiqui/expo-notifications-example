import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput
} from 'react-native';
import { WebBrowser, Notifications } from 'expo';
import registerForPushNotificationsAsync from '../api/registerForPushNotificationsAsync'
import Colors from '../constants/Colors'

export default class NotificationsScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: 'You didn\'t set a title!',
      body: 'Why not enter text into the body?',
      data: {
        thisIsYourData: 'you left this empty'
      }
    }
    this._localNotification = this._localNotification.bind(this)
    this._pushNotification = this._pushNotification.bind(this)
  }


  static navigationOptions = {
    // header: null,
    title: 'Notifications'
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>

          <View style={styles.container}>
            <TextInput
              style={styles.textInput}
              placeholder={'Enter a title'}
              onChangeText={(text) => {this.setState({title: text})}}
            />

            <TextInput
              style={styles.textInput}
              placeholder={'and body text'}
              onChangeText={(text) => {this.setState({body: text})}}
            />

            <TextInput
              style={styles.textInput}
              placeholder={'and data if you want'}
              onChangeText={this._setDataValue}
            />

            <TouchableOpacity
              onPress={this._localNotification}
              style={styles.button}>
              <Text style={styles.text}>
                Send a local notification in 5 seconds!
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={this._pushNotification}
              style={styles.button}>
              <Text style={styles.text}>
                Send a push notification!
              </Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </View>
    );
  }

  _setDataValue = (dataValue) => {
    this.setState({
      data: {
        thisIsYourData: dataValue
      }
    })
  }

  async _localNotification () {
    const notification = {
      title: this.state.title,
      body: this.state.body,
      data: this.state.data,
      ios: {
        sound: true
      },
      android: {
        sound: true
      }
    }

    const scheduleOptions = {
      time: Date.now() + 5000
    }

    Notifications.scheduleLocalNotificationAsync(
      notification,
      scheduleOptions
    )
  }

  _pushNotification () {
    registerForPushNotificationsAsync(
      this.state.title,
      this.state.body,
      this.state.data
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.offWhite,
  },
  contentContainer: {
    paddingTop: 30,
  },
  textInput: {
    height: 60,
    margin: 15
  },
  button: {
    backgroundColor: '#2188FF',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
    margin: 15
  },
  text: {
    alignItems: 'center',
    color: Colors.offWhite,
    fontSize: 16
  }
})
