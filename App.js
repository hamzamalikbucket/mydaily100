
import React, { useEffect } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AddPersonalgoals from './screens/AddPersonalgoals';
import DailyPerformance from './screens/DailyPerformance';
import Journal from './screens/Journal';
import Journal1 from './screens/Journal1';
import Journal2 from './screens/Journal2';
import Journal3 from './screens/Journal3';
import Editjournal from './screens/Editjournal';
import PersonalGoals from './screens/PersonalGoals';
import Library from './screens/Library';
import YourGoals from './screens/YourGoals';
import YourGoals2 from './screens/YourGoals2';
import Contact from './screens/Contact';
import PaymentDetails from './screens/PaymentDetails';
import PaymentSuccessfull from './screens/PaymentSuccessfull';
import DateTime from './screens/DateTime';
import ContactUs from './screens/ContactUs';
import ChangePassword from './screens/ChangePassword';
import Setting from './screens/Setting';
import PicUpload from './screens/PicUpload';
import Setup from './screens/Setup';
import Motivation from './screens/Motivation';
import ProfilePage from './screens/ProfilePage';
import TermsConditions from './screens/TermsConditions';
import PrivacyPolicy from './screens/PrivacyPolicy';
import SignIn from './screens/SignIn';
import OtpPage from './screens/OtpPage';
import SignUp from './screens/SignUp';
import ForgetPassword from './screens/ForgetPassword';
import MainPage from './screens/MainPage';
import SuccessChart from './screens/SuccessChart';
import DailyTarget from './screens/DailyTarget';
import Goals from './screens/Goals';
import SwiperScreen from './screens/SwiperScreen';
import CustomDrawer from './screens/CustomDrawer';
import { LogBox, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MyTeam from './screens/MyTeam';
import Notification from './screens/Notification';
import ResetPassword from './screens/ResetPassword';


const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  const navigation = useNavigation();

  return (
    <Drawer.Navigator
      screenOptions={({ route }) => ({
        headerShown: route.name === "Your Goals",
        headerStyle: {
          borderBottomColor: '#fff',
          borderBottomWidth: 0,
          elevation: 0,
        },
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Notification')}
            style={{ marginRight: 12 }}
          >
            <Icon name="notifications" size={28} color="#D11A38" />
          </TouchableOpacity>
        ),
      })}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="Your Goals" component={YourGoals} />
      <Drawer.Screen name="Journal" component={Journal} />
      <Drawer.Screen name="Library" component={Library} />
      <Drawer.Screen name="My Team" component={MyTeam} />
      <Drawer.Screen name="Terms Conditions" component={TermsConditions} />
      <Drawer.Screen name="Privacy Policy" component={PrivacyPolicy} />
      <Drawer.Screen name="Setting" component={Setting} />
      <Drawer.Screen name="Contact" component={Contact} />
      <Drawer.Screen name="Personal Goals" component={PersonalGoals} />
      <Drawer.Screen name="Notification" component={Notification} />
    </Drawer.Navigator>
  );
}

const Stack = createStackNavigator();

const App = () => {

  useEffect(()=>{
    LogBox.ignoreAllLogs();
  },[]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName= "SwiperScreen"screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MyDrawer" component={MyDrawer} />
        <Stack.Screen name="SwiperScreen" component={SwiperScreen} />
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="SuccessChart" component={SuccessChart} />
        <Stack.Screen name="DailyTarget" component={DailyTarget} />
        <Stack.Screen name="Goals" component={Goals} />
        <Stack.Screen name="OtpPage" component={OtpPage} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="ProfilePage" component={ProfilePage} />
        <Stack.Screen name="Motivation" component={Motivation} />
        <Stack.Screen name="PicUpload" component={PicUpload} />
        <Stack.Screen name="Setup" component={Setup} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="Terms Conditions" component={TermsConditions} />
        <Stack.Screen name="Privacy Policy" component={PrivacyPolicy} />
        <Stack.Screen name="DateTime" component={DateTime} />
        <Stack.Screen name="PaymentDetails" component={PaymentDetails} />
        <Stack.Screen name="PaymentSuccessfull" component={PaymentSuccessfull} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Your Goals" component={YourGoals} />
        <Stack.Screen name="YourGoals2" component={YourGoals2} />
        <Stack.Screen name="Journal" component={Journal} />
        <Stack.Screen name="Journal1" component={Journal1} />
        <Stack.Screen name="Journal2" component={Journal2} />
        <Stack.Screen name="Journal3" component={Journal3} />
        <Stack.Screen name="AddPersonalgoals" component={AddPersonalgoals} />
        <Stack.Screen name="DailyPerformance" component={DailyPerformance} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="PersonalGoals" component={PersonalGoals} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
        <Stack.Screen name="MyTeam" component={MyTeam} />
        <Stack.Screen name="Library" component={Library} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Editjournal" component={Editjournal} />
      </Stack.Navigator>
    </NavigationContainer >
  );
};

export default App; 