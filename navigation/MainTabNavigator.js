import React from 'react'
import { Platform } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { TabNavigator, TabBarBottom } from 'react-navigation'

import Colors from '../constants/Colors'

import NotificationsScreen from '../screens/NotificationsScreen'
import CodeScreen from '../screens/CodeScreen'
import ChecklistScreen from '../screens/ChecklistScreen'

export default TabNavigator(
  {
    Notifications: {
      screen: NotificationsScreen,
    },
    Code: {
      screen: CodeScreen,
    },
    Checklist: {
      screen: ChecklistScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state
        let iconName
        switch (routeName) {
          case 'Notifications':
            iconName = 'ios-notifications'
            break
          case 'Code':
            iconName = 'ios-code'
            break
          case 'Checklist':
            iconName = 'ios-checkmark-circle-outline'
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.blue : Colors.gray}
          />
        )
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
)
