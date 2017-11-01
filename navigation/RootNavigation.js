import { Notifications, Permissions } from 'expo';
import React from 'react';
import { Alert } from 'react-native'
import { StackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

const RootStackNavigator = StackNavigator(
  {
    Main: {
      screen: MainTabNavigator,
    },
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  }
);

export default class RootNavigator extends React.Component {
  componentDidMount() {
    this.getiOSNotificationPermission()
    // this._notificationSubscription = this._listenForNotifications();
  }

  componentWillUnmount() {
    this._notificationSubscription && this._notificationSubscription.remove();
  }

  render() {
    return <RootStackNavigator />;
  }

  // android permissions are given on install
  async getiOSNotificationPermission () {
    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS)
    if (status !== 'granted') {
      return
    }
    this._notificationSubscription = Notifications.addListener(this._handleNotification)
  }

  _handleNotification = ({ origin, data, remote }) => {
    console.log(remote)
    let type = remote ? 'Push' : 'Local'
    let info = `${type} notification ${origin} with data: ${JSON.stringify(data)}`
    setTimeout(() => Alert.alert('Notification!', info), 500)
  }
}
