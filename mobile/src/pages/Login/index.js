import React, {useRef} from 'react'
import {Alert, Text, View, TouchableOpacity, TextInput} from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'
import {Form} from '@unform/mobile'

import api from '../../services/api'

import Input from './components/Input'

import styles from './styles'   


export default function login(){

    const navigation = useNavigation()
    const formRef = useRef(null)

    async function handleSubmit(data){

        console.log(data)
        try{
            const res = await api.post('session', data)

            navigation.navigate('Campanha', {
                headers:{
                Authorization: res.data.codUser
            }})

        }catch(erro){
            Alert.alert('Falha no login, tente novamente.')
        }
    }

    function navigateToLogon(){

        navigation.navigate('Logon')
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>LOGIN</Text>

            <Form ref={formRef} onSubmit={handleSubmit} style={styles.form}>
    
                <Input name="email" placeholder="Insira seu email" />
                <Input name="password" placeholder="Digite sua senha" secureTextEntry={true}/>
 
            </Form>

            <View style={styles.actions}>
                <TouchableOpacity style={styles.action} onPress={() => formRef.current.submitForm()}>
                    <Text style={styles.actionText}>Entrar</Text>
                </TouchableOpacity>

                <Text style={[styles.actionText, {color:'#47525E', marginLeft:'45%'}]}>OU</Text>

                <TouchableOpacity style={styles.action} onPress={navigateToLogon}>
                    <Text style={styles.actionText}>Cadastrar</Text>
                </TouchableOpacity>

            </View>
            
        </View>
    )
}