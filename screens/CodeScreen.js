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
        <Text>
          Creating a notification object is easy:
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
