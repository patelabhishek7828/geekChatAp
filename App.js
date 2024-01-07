import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './SRC/Screens/LoginSignup/Login/Login';
import Signup_EnterEmail from './SRC/Screens/LoginSignup/Signup/Signup_EnterEmail';
import Signup_EnterVerification from './SRC/Screens/LoginSignup/Signup/Signup_EnterVerification';
import Signup_ChooseUsername from './SRC/Screens/LoginSignup/Signup/Signup_ChooseUsername';
import Signup_ChoosePassword from './SRC/Screens/LoginSignup/Signup/Signup_ChoosePassword';
import Signup_AccountCreated from './SRC/Screens/LoginSignup/Signup/Signup_AccountCreated';
import ForgotPassword_EnterEmail from './SRC/Screens/LoginSignup/ForgotPassword/ForgotPassword_EnterEmail';
import ForgotPassword_EnterVerification from './SRC/Screens/LoginSignup/ForgotPassword/ForgotPassword_EnterVerification';
import ForgotPassword_ChoosePassword from './SRC/Screens/LoginSignup/ForgotPassword/ForgotPassword_ChoosePassword';
import ForgotPassword_AccountRecover from './SRC/Screens/LoginSignup/ForgotPassword/ForgotPassword_AccountRecover';
import MainPage from './SRC/Screens/MainPage/MainPage';
import All_Chats from './SRC/Screens/ChatSection/All_Chats';
import SearchuserPage from './SRC/Screens/MainPage/SearchuserPage';
import NotificationPage from './SRC/Screens/MainPage/NotificationPage';
import My_UserProfile from './SRC/Screens/Profile/My_UserProfile';
import Settings1 from './SRC/Screens/Settings/Settings1';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false,
        animation: 'slide_from_right'
      }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup_EnterEmail" component={Signup_EnterEmail} />
        <Stack.Screen name="Signup_EnterVerification" component={Signup_EnterVerification} />
        <Stack.Screen name="Signup_ChooseUsername" component={Signup_ChooseUsername} />
        <Stack.Screen name="Signup_ChoosePassword" component={Signup_ChoosePassword} />
        <Stack.Screen name="Signup_AccountCreated" component={Signup_AccountCreated} />

        <Stack.Screen name="ForgotPassword_EnterEmail" component={ForgotPassword_EnterEmail} />
        <Stack.Screen name="ForgotPassword_EnterVerification" component={ForgotPassword_EnterVerification} />
        <Stack.Screen name="ForgotPassword_ChoosePassword" component={ForgotPassword_ChoosePassword} />
        <Stack.Screen name="ForgotPassword_AccountRecover" component={ForgotPassword_AccountRecover} />

        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="All_Chats" component={All_Chats} options={{
          animation: 'slide_from_bottom'
        }}/>

        <Stack.Screen name="SearchuserPage" component={SearchuserPage} options={{animation: 'slide_from_bottom'}}/>
        <Stack.Screen name="NotificationPage" component={NotificationPage} options={{animation: 'slide_from_left'}}/>
        <Stack.Screen name="My_UserProfile" component={My_UserProfile} options={{animation: 'slide_from_left'}}/>
        <Stack.Screen name="Settings1" component={Settings1} options={{animation: 'slide_from_left'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
