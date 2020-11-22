import React, {useState, useEffect} from 'react'
import { View, FlatList,Image, Text, TouchableOpacity } from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'
import {Feather, Entypo} from  '@expo/vector-icons'

import api from '../../services/api'

import styles from './styles'


export default function profile(){
    
    const navigation = useNavigation()
    const route = useRoute()


    const [mob, setMobs] = useState([])

    const Mob = route.params.mob

    console.log(Mob)

    async function loadMobs() {

        setMobs(Mob)

    }

    useEffect(() => {
        loadMobs()
    }, [])


    function navigateBack(){
        navigation.goBack()
    }

    console.log("mob: ", mob.nome)
    console.log("Mob: ", Mob.nome)
    return(
        <View style={styles.container}> 
                
            <View style={styles.imagem}>
                <View style={{flexDirection:'row', justifyContent:'space-between', padding:10}}>
                    <TouchableOpacity onPress={navigateBack}>
                        <Feather name='arrow-left' size={30} color='#47525E'/>
                    </TouchableOpacity>
                    <Text style={styles.mobNome}>{mob.nome}</Text>
                    <TouchableOpacity onPress={()=>{}}>
                        <Entypo name='dots-three-vertical' size={30} color='#47525E'/>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:'center'}}>
                    <Text style={styles.mobNivel}>Nivel: {mob.nivel}</Text>
                </View>
            </View>   

            <View style={styles.detalhes}>                

                <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>

                    <Text style={styles.caracteristicas}>HP: {mob.hpMaxima}/{mob.hp}</Text>
                    <Text style={styles.caracteristicas}>CA: {mob.ca}</Text>

                </View>

                <View style={styles.tr}></View>

                <View style={{alignSelf:'center', marginTop:0}}>
                    <Text style={styles.caracteristicas}>ALINHAMENTO: {mob.alinhamento}</Text>

                </View>

                <View style={styles.tr}></View>
            
                <View style={{justifyContent:'space-evenly'}}>

                    <Text style={styles.title}>Atributos</Text>

                    <View style={{justifyContent:'space-evenly', alignItems: 'center',paddingVertical: 10}}>

        
                        <Text style={styles.atributos}>FORÇA: {mob.forc}</Text>
                        <Text style={styles.atributos}>CONSTITUIÇÃO: {mob.con}</Text>
                        <Text style={styles.atributos}>DESTREZA: {mob.des}</Text>
                        <Text style={styles.atributos}>INTELIGÊNCIA: {mob.int}</Text>
                        <Text style={styles.atributos}>SABEDORIA: {mob.sab}</Text>
                        <Text style={styles.atributos}>CARISMA: {mob.car}</Text>
                
                    </View>

                </View>
                
                

            </View>

            

            

        </View>

    )
}