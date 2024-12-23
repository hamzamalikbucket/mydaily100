import { StyleSheet} from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import YourGoals from './YourGoals';
import Setting from './Setting';

 const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
<NavigationContainer>
    <Drawer.Navigator>
        <Drawer.Screen name='Setting' component={Setting}/>
        <Drawer.Screen name='YourGoals' component={YourGoals}/>
    </Drawer.Navigator>
</NavigationContainer>
  )
}

export default DrawerNavigator;

const styles = StyleSheet.create({

})