
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
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
import Contact from './screens/Personalinfo';
import PaymentDetails from './screens/PaymentDetails';
import PaymentSuccessfull from './screens/PaymentSuccessfull';
import DateTime from './screens/DateTime';
import SelectCoach from './screens/SelectCoach';
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
import ResetPassword1 from './screens/ResetPassword1';
import MainPage from './screens/MainPage';
import SuccessChart from './screens/SuccessChart';
import DailyTarget from './screens/DailyTarget';
import Goals from './screens/Goals';
import SwiperScreen from './screens/SwiperScreen';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="YourGoals" component={YourGoals} />
      <Stack.Screen name="YourGoals2" component={YourGoals2} />
      <Stack.Screen name="Journal1" component={Journal1} />
      <Stack.Screen name="Journal2" component={Journal2} />
      <Stack.Screen name="Journal3" component={Journal3} />
      <Drawer.Screen name="Journal" component={Journal} />
      <Stack.Screen name="PersonalGoals" component={PersonalGoals} />
      <Stack.Screen name="AddPersonalgoals" component={AddPersonalgoals} />
      <Stack.Screen name="DailyPerformance" component={DailyPerformance} />
      <Drawer.Screen name="Library" component={Library} />
      <Stack.Screen name="Setting" component={Setting} />
      <Drawer.Screen name="TermsConditions" component={TermsConditions} />
      <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Drawer.Screen name="ContactUs" component={ContactUs} />
    </Drawer.Navigator>
  );
}

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
      {/* <Stack.Navigator initialRouteName="SwiperScreen" screenOptions={{ headerShown: false }}>

        <Stack.Screen name="MyDrawer" component={MyDrawer} />
        <Stack.Screen name="SwiperScreen" component={SwiperScreen} />
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="SuccessChart" component={SuccessChart} />
        <Stack.Screen name="DailyTarget" component={DailyTarget} />
        <Stack.Screen name="Goals" component={Goals} />
        <Stack.Screen name="OtpPage" component={OtpPage} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="ResetPassword1" component={ResetPassword1} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="ProfilePage" component={ProfilePage} />
        <Stack.Screen name="Motivation" component={Motivation} />
        <Stack.Screen name="PicUpload" component={PicUpload} />
        <Stack.Screen name="Setup" component={Setup} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="SelectCoach" component={SelectCoach} />
        <Stack.Screen name="DateTime" component={DateTime} />
        <Stack.Screen name="PaymentDetails" component={PaymentDetails} />
        <Stack.Screen name="PaymentSuccessfull" component={PaymentSuccessfull} />
             <Stack.Screen name="Editjournal" component={Editjournal} />

        <Stack.Screen name="Contact" component={Contact} />
       
      </Stack.Navigator> */}
    </NavigationContainer >
  );
};

export default App; 