import React, { useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import _ from 'lodash';
import { useFlipper } from '@react-navigation/devtools';

import { Colors } from '../../globals';
import { linkingConfigs } from './deep-links'


const WelcomeScreen = () => <Paragraph>WelcomeScreen</Paragraph>
const LoginScreen = () => <Paragraph>LoginScreen</Paragraph>
const HomeScreen = () => <Slider />
const SettingScreen = () => <Paragraph>SettingScreen</Paragraph>

import { navigationRef } from './navigation-utils';
import { MainBottomTabsParamList, MainStackParamList } from './types';
import { Paragraph, } from '../components';
import { Youtube } from '../screens';
import PullToRefresh from '../screens/pullToRefresh';
import GoogleCalendar from '../screens/googleCalendar';
import DeleteChat from '../screens/chatDelete';
import ProductPage from '../screens/addToCart/productPage';
import AddToCart from '../screens/addToCart';
import BkashPayment from '../screens/bKashPayment';
import SwipeToDelete from '../screens/swipeToDelete';
import WhatsappHeader from '../screens/whatsAppSearch';
import Slider from '../screens/slider/slider';

const MainAppStack = createNativeStackNavigator<MainStackParamList>();
const MainTabs = createBottomTabNavigator<MainBottomTabsParamList>();

/**
 * Define core App navigator
 */
export const AppNavigator = () => {
  const routeNameRef = useRef<string>();
  const authenticated = true  //get this from redux store
  // to debug react-navigation with flipper
  useFlipper(navigationRef);
  const handleNavContainerReady = () => {
    routeNameRef.current = navigationRef.getCurrentRoute()?.name;
  };

  const handleNavStateChanged = () => {
    const previousRouteName = routeNameRef.current;
    const currentRouteName = navigationRef.getCurrentRoute()?.name;

    if (previousRouteName !== currentRouteName) {
      // handle Analytics
    }
    routeNameRef.current = currentRouteName;
  };

  return (

    <NavigationContainer ref={navigationRef} linking={linkingConfigs} onReady={handleNavContainerReady} onStateChange={handleNavStateChanged}>
      <MainAppStack.Navigator>
        {!authenticated ? (
          <>
            <MainAppStack.Screen name="WelcomeScreen" component={WelcomeScreen} options={{ headerShown: false }} />
            {AuthFlow}
          </>
        ) : (
          <>
            <MainAppStack.Screen name="Tabs" component={TabsNavigator} options={{ headerShown: false }} />
          </>
        )}
      </MainAppStack.Navigator>
    </NavigationContainer>
  );
};

/**
 * Define Tab navigator
 */
const TabsNavigator = () => {
  return (
    <MainTabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        lazy: true,
        tabBarActiveTintColor: Colors.blue,
        tabBarInactiveTintColor: Colors.red,
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case 'HomeScreen':
              return <Ionicons name="home" size={25} color={color} />
            case 'SettingsScreen':
              return <Ionicons name="home" size={25} color={color} />
            default:
              return '';
          }
        },
      })}
    >
      <MainTabs.Screen name="HomeScreen" component={HomeScreen} options={{ tabBarLabel: "Home" }} />
      <MainTabs.Screen
        name="SettingsScreen"
        component={SettingScreen}
        options={{
          tabBarLabel: "setting",
        }}
      />
    </MainTabs.Navigator>
  );
};

/**
 * Instead of closely coupled abstracted workflows, use RN navigator instances 
 * for various "flows" within the app
 * perhaps put these in separate file
 */
const AuthFlow = (
  <MainAppStack.Group
    navigationKey="Auth"
    screenOptions={{
      title: '',
      headerBackTitleVisible: false,
      headerShadowVisible: false,
    }}
  >
    <MainAppStack.Screen name="LoginScreen" component={LoginScreen} />
  </MainAppStack.Group>
);