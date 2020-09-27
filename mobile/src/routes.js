import React from 'react'
import {FontAwesome5} from  '@expo/vector-icons'
import {Text, View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'

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

const AppTab = createMaterialTopTabNavigator()

function CampanhaTab(){
    return(
        <AppTab.Navigator tabBarOptions={{
            style: {
                backgroundColor:'#f0f0f5',
            }
          }} >
                <AppTab.Screen name='Campanha' component={Campanha}/>
                <AppTab.Screen name='Personagem' component={Personagem}/>
        </AppTab.Navigator>
    )
}

import Logon from './pages/Logon'
import Campanha from './pages/Campanha'

import Personagem from './pages/Personagem'


export default function Routes(){
    return(
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: true, headerStyle: {backgroundColor: '#f0f0f5', elevation: 0},
                        headerLeft: () =>{},
                        headerTitle: props => <Icone style={{marginLeft:0}} {...props} />}}>
                <AppStack.Screen name='Logon' component={Logon} options={{headerShown: false}}/>
                <AppStack.Screen name='Campanha' component={CampanhaTab}/> 
            </AppStack.Navigator>
        </NavigationContainer>
    )
}