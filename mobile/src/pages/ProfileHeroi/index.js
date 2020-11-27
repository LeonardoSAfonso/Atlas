import React, {useState, useEffect} from 'react'
import { View, FlatList,Image, Text, TouchableOpacity } from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'
import {Feather, Entypo} from  '@expo/vector-icons'

import api from '../../services/api'

import styles from './styles'


export default function profile(){
    
    const navigation = useNavigation()
    const route = useRoute()


    const [heroi, setHerois] = useState([])

    const Heroi = route.params.heroi

    console.log(Heroi)

    async function loadHerois() {

        setHerois(Heroi)

    }

    useEffect(() => {
        loadHerois()
    }, [])


    function navigateBack(){
        navigation.goBack()
    }
    
    return(
        <View style={styles.container}> 
                
            <View style={styles.imagem}>
                <View style={{flexDirection:'row', justifyContent:'space-between', padding:10}}>
                    <TouchableOpacity onPress={navigateBack}>
                        <Feather name='arrow-left' size={30} color='#47525E'/>
                    </TouchableOpacity>
                    <Text style={styles.heroiNome}>{heroi.nome}</Text>
                    <TouchableOpacity onPress={()=>{}}>
                        <Entypo name='dots-three-vertical' size={30} color='#47525E'/>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:'center'}}>
                    <Text style={styles.heroiNivel}>Nivel: {heroi.nivel}</Text>
                </View>
            </View>   

            <View style={styles.detalhes}>                

                <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>

                    <Text style={styles.caracteristicas}>HP: {heroi.hpMaxima}/{heroi.hp}</Text>
                    <Text style={styles.caracteristicas}>CA: {heroi.ca}</Text>

                </View>

                <View style={styles.tr}></View>

                <View style={{flexDirection:'row', alignSelf:'center'}}>
                    <Text style={styles.caracteristicas}>CLASSE: {heroi.classe}</Text>
                    <Text style={styles.raca}>RAÇA: {heroi.raca}</Text>
                </View>

                <View style={{alignSelf:'center', marginTop:0}}>
                    <Text style={styles.caracteristicas}>ALINHAMENTO: {heroi.alinhamento}</Text>

                </View>

                


                <View style={styles.tr}></View>
            
                <View style={{justifyContent:'space-evenly'}}>

                    <Text style={styles.title}>Atributos</Text>

                    <View style={{justifyContent:'space-evenly', alignItems: 'center',paddingVertical: 10}}>

                        <Text style={styles.atributos}>FORÇA: {heroi.forc}</Text>
                        <Text style={styles.atributos}>CONSTITUIÇÃO: {heroi.con}</Text>
                        <Text style={styles.atributos}>DESTREZA: {heroi.des}</Text>
                        <Text style={styles.atributos}>INTELIGÊNCIA: {heroi.int}</Text>
                        <Text style={styles.atributos}>SABEDORIA: {heroi.sab}</Text>
                        <Text style={styles.atributos}>CARISMA: {heroi.car}</Text>
                
                    </View>

                </View>
                
                

            </View>

            

            

        </View>

    )
}