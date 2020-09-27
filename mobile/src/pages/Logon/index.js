import React, {useRef} from 'react'
import {Alert, Text, View, TouchableOpacity, TextInput} from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'
import {Form} from '@unform/mobile'

import Input from './components/input'


import styles from './styles'   


export default function logon(){

    const navigate = useNavigation()
    const formRef = useRef(null)

    function handleLogon(){

       navigate.navigate('Campanha',{codUser:2})

    }

    return (
        <View style={styles.container}>

            <View style={styles.header}>
               <Text style={styles.headerText}>Futuro logo</Text> 
            </View>

            <Text style={[styles.actionText, {color:'#47525E', marginLeft:'35%'}]}>LOGN IN</Text>

            <Form style={styles.form}>
                <TextInput name="email" style={styles.input} type="email" />
                <TextInput name="password" style={styles.input} type="password" />
            </Form>

            <View style={styles.actions}>
                <TouchableOpacity style={styles.action} onPress={handleLogon}>
                    <Text style={styles.actionText}>Entrar</Text>
                </TouchableOpacity>

                <Text style={[styles.actionText, {color:'#47525E', marginLeft:'45%'}]}>OU</Text>

                <TouchableOpacity style={styles.action} onPress={()=>{}}>
                    <Text style={styles.actionText}>Cadastrar</Text>
                </TouchableOpacity>

            </View>
            
        </View>
    )
}