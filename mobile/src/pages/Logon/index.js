import React, {useRef} from 'react'
import {Alert, Text, View, TouchableOpacity, TextInput} from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'
import {Form} from '@unform/mobile'

import api from '../../services/api'

import Input from './components/Input'

import styles from './styles'   


export default function logon(){

    const navigation = useNavigation()
    const formRef = useRef(null)

    async function handleSubmit(data){


        try{
            console.log(data)
            const res = await api.post('users', data)

            navigation.navigate('Campanha', {headers:{Authorization:res.data}})
            console.log(res.data)

        }catch(erro){
            Alert.alert('Falha no cadastro, tente novamente.')
        }
        
    }


    return (
        <View style={styles.container}>

            <Text style={styles.title}>CADASTRO</Text>

            <Form ref={formRef} onSubmit={handleSubmit} style={styles.form}>
    
                <Input name="nome" placeholder="Digite seu nome"/>
                <Input name="email" placeholder="Insira seu email"/>
                <Input name="password" placeholder="Digite sua senha"/>

            </Form>

            <View style={styles.actions}>
                <TouchableOpacity style={styles.action} onPress={() => formRef.current.submitForm()}>
                    <Text style={styles.actionText}>Cadastrar</Text>
                </TouchableOpacity>

            </View>
            
        </View>
    )
}