import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from 'react-navigation';
import React from 'react';
import { Image } from 'react-native';
import BackButton from './components/BackButton';
import Home from './pages/Home';
import History from './pages/History';
import DetailPage from './pages/DetailPage';
import HomeActiveIcon from './assets/home-active.png';
import HomeInActiveIcon from './assets/home-inactive.png';
import HistoryActiveIcon from './assets/user-active.png';
import HistoryInActiveIcon from './assets/user-inactive.png';

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: '#36404a'
  },
  headerTitleStyle: {
    color: '#fff',
    fontSize: 17
  },
  headerBackTitle: null,
  headerBackImage: <BackButton />
};

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: '上报'
      }
    }
  },
  {
    defaultNavigationOptions,
    initialRouteName: 'Home'
  }
);

const HistoryStack = createStackNavigator(
  {
    History: {
      screen: History,
      navigationOptions: {
        title: '上报历史'
      }
    },
    DetailPage: {
      screen: DetailPage,
      navigationOptions: {
        title: '上报详情'
      }
    }
  },
  {
    defaultNavigationOptions,
    initialRouteName: 'History'
  }
);

const TabContainer = createBottomTabNavigator(
  {
    Home: HomeStack,
    History: HistoryStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      let tabBarVisible = true;
      if (
        navigation.state.index > 0 ||
        navigation.state.routes[0].routeName === 'Authentication'
      ) {
        tabBarVisible = false;
      }

      return {
        tabBarIcon: ({ focused }) => {
          const { routeName } = navigation.state;

          let icon;
          let iconStyle;

          switch (routeName) {
            case 'Home':
              icon = focused ? HomeActiveIcon : HomeInActiveIcon;
              iconStyle = { width: 24, height: 24 };
              break;
            case 'History':
              icon = focused ? HistoryActiveIcon : HistoryInActiveIcon;
              iconStyle = { width: 24, height: 24 };
              break;
            default:
              break;
          }

          return <Image source={icon} style={iconStyle} />;
        },
        tabBarVisible
      };
    },
    tabBarOptions: {
      activeTintColor: '#5fbdaa',
      inactiveTintColor: '#8e8e93',
      labelStyle: {
        fontSize: 10
      }
    }
  }
);

export default createAppContainer(TabContainer);
