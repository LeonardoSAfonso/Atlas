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
    const formRef = useRef(null)

    function handleSubmit(){

        navigation.navigate('Campanha')
        
    }


    return (
        <View style={styles.container}>

            <Text style={styles.title}>ADICIONAR CAMPANHA</Text>

            <Form ref={formRef} onSubmit={handleSubmit} style={styles.form}>
    
                <Input name="nome" placeholder="Digite seu nome"/>
                <InputLines name="email" placeholder="Insira uma pequena introdução a sua aventura"/>

            </Form>

            <View style={styles.actions}>
                <TouchableOpacity style={styles.action} onPress={() => formRef.current.submitForm()}>
                    <Text style={styles.actionText}>Cadastrar</Text>
                </TouchableOpacity>

            </View>
            
        </View>
    )
}