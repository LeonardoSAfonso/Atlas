import React, {useState, useEffect, useRef} from 'react'
import { View,Image, Text, TouchableOpacity, ScrollView, Alert} from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'
import {Form} from '@unform/mobile'

import api from '../../services/api'

import Input from './components/Input'

import styles from './styles'




export default function profile(){
    
    const navigation = useNavigation()  
    const route = useRoute()

    const formRef = useRef(null)

    const ids = route.params.ids

    console.log('Final ',ids)



    function navigateBack(teste){
        //navigation.goBack()
        console.log('Cod: ', teste)
    }

    async function handleSubmit(data){

        console.log(data)

        try{
            const res = await api.post(`/herois/${ids.campanha}/${ids.idRaca}/${ids.idClasse}/${ids.raca}/${ids.classe}`, data)
            navigation.navigate('Herois', {campanha:ids.campanha})
            console.log(res.data)

        }catch(erro){
            Alert.alert('Falha no cadastro do herói, tente novamente.')
        }
        
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>CADASTRO</Text>

            <Form ref={formRef} onSubmit={handleSubmit} style={styles.form}>
                <ScrollView>
                    <View style={styles.campo}> 
                        <Text style={styles.actionText}>Nome</Text>
                        <Input style={[styles.input, {width:'80%'}]} name="nome" placeholder="Digite seu nome"/>                    
                    </View>

                    <View style={styles.campo}> 
                        <Text style={styles.actionText}>Alinhamento</Text>
                        <Input style={[styles.input, {width:'70%'}]} name="alinhamento" placeholder="Digite seu alinhamento"/>
                    </View>

                    

                    <View style={[styles.campo,{justifyContent:'space-evenly'}]}> 
                        <Text style={styles.actionText}>HP Máxima</Text>
                        <Input name="hpMaxima" placeholder="..."/>

                        <Text style={styles.actionText}>HP</Text>
                        <Input name="hp" placeholder="..."/>

                        <Text style={styles.actionText}>Nível</Text>
                        <Input name="nivel" placeholder="..."/>
                    </View>

                    <View style={{flexDirection:'row', justifyContent:'flex-start'}}> 

                    <View style={{width:'50%'}}> 
                    <View style={styles.campo}>
                        <Text style={styles.actionText}>Força</Text>
                        <Input name="forc" placeholder="..."/>
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.actionText}>Constituição</Text>
                        <Input name="con" placeholder="..."/>
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.actionText}>Inteligência</Text>
                        <Input name="int" placeholder="..."/>
                    </View>

                    </View>
                    <View style={{width:'50%'}}>
                    <View style={styles.campo}>               
                        <Text style={styles.actionText}>Destreza</Text>
                        <Input name="des" placeholder="..."/>
                    </View>

                    <View style={styles.campo}> 
                        <Text style={styles.actionText}>Carisma</Text>
                        <Input name="car" placeholder="..."/>
                    </View>

                    <View style={styles.campo}>
                        <Text style={styles.actionText}>Sabedoria</Text>
                        <Input name="sab" placeholder="..."/>
                    </View>
                    </View>

                    </View>
                </ScrollView>
            </Form>

            <View style={styles.actions}>
                <TouchableOpacity style={styles.action} onPress={() => formRef.current.submitForm()}>
                    <Text style={[styles.actionText,, {color:'#ffffff'}]}>Cadastrar</Text>
                </TouchableOpacity>

            </View>
            
        </View>
    )
}