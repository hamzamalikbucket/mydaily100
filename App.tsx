// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */

// import React from 'react';
// import { StyleSheet, Text, Image, View } from 'react-native';
// // import PagerView from 'react-native-pager-view';
// import Swiper from 'react-native-swiper';



// // type SectionProps = PropsWithChildren<{
// //   title: string;
// // }>;

// // function Section({ children, title }: SectionProps): React.JSX.Element {
// //   const isDarkMode = useColorScheme() === 'dark';
// //   return (
// //     <View style={styles.sectionContainer}>
// //       <Text
// //         style={[
// //           styles.sectionTitle,
// //           {
// //             color: isDarkMode ? Colors.white : Colors.black,
// //           },
// //         ]}>
// //         {title}
// //       </Text>
// //       <Text
// //         style={[
// //           styles.sectionDescription,
// //           {
// //             color: isDarkMode ? Colors.light : Colors.dark,
// //           },
// //         ]}>
// //         {children}
// //       </Text>
// //     </View>
// //   );
// // }

// function App(): React.JSX.Element {
//   return (
//     <Swiper loop={false} showsPagination={false}>
//       <View style={styles.container}>
//         <Text style={styles.text}>Skip</Text>
//         <Image source={require('./asstes/images/Character.png')} style={styles.character} />
//         <Text style={styles.line1}>Unlock your</Text>
//         <Text style={styles.line2}>Potential Now</Text>
//         <Text style={styles.discription}>Visualize and track daily progress,
//           turning obstacles into stepping stones with</Text>
//         <Image source={require('./asstes/images/logo.png')} style={styles.logo} />
//         <Image source={require('./asstes/images/Frame2.png')} style={styles.fram2} />
//       </View>
//     </Swiper>
//   );
// }

// const styles = StyleSheet.create({

//   container: {
//     flex: 1,
//     backgroundColor: "#fff"
//   },
//   text: {
//     color: '#D11A38',
//     fontSize: 14,
//     fontWeight: '500',
//     textAlign: 'center',
//     top: 20,
//     justifyContent: 'flex-start',
//     padding: 20,
//   },
//   character: {
//     left: 48,
//     top: 100,
//   },
//   line1: {
//     fontSize: 34,
//     fontWeight: '400',
//     textAlign: 'center',
//     top: 100,
//   },
//   line2: {
//     fontSize: 34,
//     fontWeight: '400',
//     color: '#D11A38',
//     textAlign: 'center',
//     top: 100,
//   },
//   discription: {
//     fontSize: 15,
//     fontWeight: '400',
//     textAlign: 'center',
//     top: 100,
//     padding: 25,
//     marginLeft: 10,
//     marginRight: 10,
//   },
//   logo: {
//     alignSelf: 'center',
//     position: 'relative',
//     top: 80,
//     height: 38,
//   },
//   fram2: {
//     flexDirection: 'row',
//     alignItems: 'flex-end',
//     position: 'absolute',
//     right: 10,
//     bottom: 20,
//   },
// });

// export default App;

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

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
// import Setting from './screens/Setting';
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

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();


const MyDrawer = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#fff',
          elevation: 0,
          shadowOpacity: 0,
        },
      }}
    >
      <Drawer.Screen name="YourGoals" component={YourGoals} />
      <Drawer.Screen name="Journal" component={Journal} />
      <Drawer.Screen name="Library" component={Library} />
      <Drawer.Screen name="TermsConditions" component={TermsConditions} />
      <Drawer.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
      <Drawer.Screen name="ContactUs" component={ContactUs} />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
              <Stack.Screen name="MyDrawer" component={MyDrawer} />

      {/* <Stack.Navigator screenOptions={{ headerShown: false }}> */}
      <Stack.Navigator initialRouteName="SwiperScreen" screenOptions={{ headerShown: false }}>
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
        <Stack.Screen name="ContactUs" component={ContactUs} />
        <Stack.Screen name="SelectCoach" component={SelectCoach} />
        <Stack.Screen name="DateTime" component={DateTime} />
        <Stack.Screen name="PaymentDetails" component={PaymentDetails} />
        <Stack.Screen name="PaymentSuccessfull" component={PaymentSuccessfull} />
        <Stack.Screen name="YourGoals" component={YourGoals} />
        <Stack.Screen name="Journal" component={Journal} />
        {/* <Stack.Screen name="Setting" component={Setting} /> */}
        <Stack.Screen name="YourGoals2" component={YourGoals2} />
        <Stack.Screen name="Journal1" component={Journal1} />
        <Stack.Screen name="Journal2" component={Journal2} />
        <Stack.Screen name="Journal3" component={Journal3} />
        <Stack.Screen name="TermsConditions" component={TermsConditions} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
         <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Editjournal" component={Editjournal} />
        <Stack.Screen name="PersonalGoals" component={PersonalGoals} /> 
        <Stack.Screen name="Library" component={Library} />
      </Stack.Navigator>
    </NavigationContainer >
  );
};

export default App;