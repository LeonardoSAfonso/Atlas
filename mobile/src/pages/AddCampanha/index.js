import React, {useRef} from 'react'
import {Alert, Text, View, TouchableOpacity, TextInput} from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'
import {Form} from '@unform/mobile'

import api from '../../services/api'

import Input from './components/Input'

import InputLines from './components/InputLines'

import styles from './styles'   


export default function addCampanha(){

    const navigation = useNavigation()
    const route = useRoute()
    const formRef = useRef(null)


    const user = route.params.headers.Authorization

    console.log(user)
    
    function handleSubmit(data){


        try{
            console.log(data, user)
            const res = api.post('Campanhas', data, {headers:{Authorization:user}})

            navigation.navigate('Campanha')
        }catch(erro){
            Alert.alert('Falha no login, tente novamente.')
        }
        
    }


    return (
        <View style={styles.container}>

            <Text style={styles.title}>ADICIONAR CAMPANHA</Text>

            <Form ref={formRef} onSubmit={handleSubmit} style={styles.form}>
    
                <Input name="nome" placeholder="Digite seu nome"/>
                <InputLines name="descricao" placeholder="Insira uma pequena introdução a sua aventura"/>

            </Form>

            <View style={styles.actions}>
                <TouchableOpacity style={styles.action} onPress={() => formRef.current.submitForm()}>
                    <Text style={styles.actionText}>Cadastrar</Text>
                </TouchableOpacity>

            </View>
            
        </View>
    )
}