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
import YourGoals from './screens/YourGoals';
import YourGoals2 from './screens/YourGoals2';
import Contact from './screens/Personalinfo';
import PaymentDetails from './screens/PaymentDetails';
import PaymentDetails2 from './screens/PaymentDetails2';
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
import VerifiedOtp from './screens/VerifiedOtp';
import SignUp from './screens/SignUp';
import ForgetPassword from './screens/ForgetPassword';
import ResetPassword1 from './screens/ResetPassword1';
import ResetPassword2 from './screens/ResetPassword2';
import MainPage from './screens/MainPage';
import SuccessChart from './screens/SuccessChart';
import DailyTarget from './screens/DailyTarget';
import Goals from './screens/Goals';
import SwiperScreen from './screens/SwiperScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator screenOptions={{ headerShown: false }}> */}
        <Stack.Navigator initialRouteName="SwiperScreen" screenOptions={{ headerShown: false }}>
       <Stack.Screen name="SwiperScreen" component={SwiperScreen} />
        <Stack.Screen name="MainPage" component={MainPage} />
        <Stack.Screen name="SuccessChart" component={SuccessChart} />
        <Stack.Screen name="DailyTarget" component={DailyTarget} />
        <Stack.Screen name="Goals" component={Goals} /> 
        <Stack.Screen name="OtpPage" component={OtpPage} />
        <Stack.Screen name="VerifiedOtp" component={VerifiedOtp} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="TermsConditions" component={TermsConditions} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
        <Stack.Screen name="ResetPassword1" component={ResetPassword1} />
        <Stack.Screen name="ResetPassword2" component={ResetPassword2} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="ProfilePage" component={ProfilePage} />
        <Stack.Screen name="Motivation" component={Motivation} />
        <Stack.Screen name="PicUpload" component={PicUpload} />
        <Stack.Screen name="Setup" component={Setup} />
        <Stack.Screen name="Setting" component={Setting} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
        <Stack.Screen name="SelectCoach" component={SelectCoach} />
        <Stack.Screen name="DateTime" component={DateTime} />
        <Stack.Screen name="PaymentDetails" component={PaymentDetails} />
        <Stack.Screen name="PaymentDetails2" component={PaymentDetails2} />
        <Stack.Screen name="PaymentSuccessfull" component={PaymentSuccessfull} />
        <Stack.Screen name="YourGoals" component={YourGoals} /> 
        <Stack.Screen name="YourGoals2" component={YourGoals2} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer >

  );
}

export default App;