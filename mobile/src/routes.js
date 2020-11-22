import React from 'react'
import {FontAwesome5} from  '@expo/vector-icons'
import {Text, View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const AppStack = createStackNavigator();

function Icone(){
    return(
        <View 
            style={{flexDirection: 'row', alignItems: 'center'}}
        >
            <FontAwesome5 name='atlas' size={40} color='#47525E'/>
            <Text 
                style={{color: '#47525E',fontSize: 20,fontWeight: 'bold', marginLeft:15}}
            >Atlas Adventure</Text> 
        </View>
        
    )   
}

import Login from './pages/Login'
import Logon from './pages/Logon'
import Campanha from './pages/Campanha'

import Herois from './pages/Herois'
import Mobs from './pages/Mobs'
import AddCampanha from './pages/AddCampanha'
import AddMob from './pages/AddMob'


import ProfileHeroi from './pages/ProfileHeroi'
import ProfileMob from './pages/ProfileMob'


export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: true, headerStyle: {backgroundColor: '#f0f0f5', elevation: 0},
                headerLeft: () =>{},
                headerTitle: props => <Icone style={{marginLeft:0}} {...props} />}
            }>
                <AppStack.Screen name='Login' component={Login}/>
                <AppStack.Screen name='Logon' component={Logon}/>
                <AppStack.Screen name='Campanha' component={Campanha}/>
                <AppStack.Screen name='Mobs' component={Mobs}/>
                <AppStack.Screen name='Herois' component={Herois}/>
                <AppStack.Screen name='ProfileHeroi' component={ProfileHeroi} options={{headerShown: false}}/>
                <AppStack.Screen name='ProfileMob' component={ProfileMob} options={{headerShown: false}}/>
                <AppStack.Screen name='AddCampanha' component={AddCampanha}/>
                <AppStack.Screen name='AddMob' component={AddMob}/>


                
            </AppStack.Navigator>
        </NavigationContainer>
    )
}