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

                    <View style={{alignItems:'center'}}>
                        <Text style={styles.heroiNome}>{heroi.nome}</Text>
                        <Text style={styles.heroiNivel}>Nivel: {heroi.nivel}</Text>
                    </View>  
                    
                    <TouchableOpacity onPress={()=>{}}>
                        <Entypo name='dots-three-vertical' size={30} color='#47525E'/>
                    </TouchableOpacity>

                </View>
                
            </View>   
               

            <View style={{flexDirection:'row', justifyContent:'center', marginTop:10}}>

                <Text style={styles.caracteristicasTitle}>HP: </Text>
                <Text style={styles.caracteristicas}>{heroi.hpMaxima}/{heroi.hp}</Text> 
                <Text style={[{marginLeft:20}, styles.caracteristicasTitle]}>CA: </Text>
                <Text style={styles.caracteristicas}>{heroi.ca}</Text>

            </View>

                <View style={styles.tr}></View>
                <View>
                    <View style={{alignSelf:'center', flexDirection:'row'}}>  
                        <View style={{alignSelf:'center', flexDirection:'row'}}>   
                            <Text style={styles.caracteristicasTitle}>RAÇA: </Text>
                            <Text style={styles.caracteristicas}>{heroi.raca}</Text>
                        </View>
                        <View style={{alignSelf:'center', flexDirection:'row'}}>    
                                <Text style={[styles.caracteristicasTitle, {marginLeft:10}]}>CLASSE: </Text>
                                <Text style={styles.caracteristicas}>{heroi.classe}</Text>
                        </View>
                    </View>


                    <View style={{alignSelf:'center', flexDirection:'row'}}>    
                        <Text style={styles.caracteristicasTitle}>ALINHAMENTO: </Text>
                        <Text style={styles.caracteristicas}>{heroi.alinhamento}</Text>
                    </View>
                </View>

            <View style={styles.tr}></View>
        
            <View style={{justifyContent:'space-evenly', alignItems: 'center'}}>

                <Text style={styles.title}>Atributos</Text>

                <View style={{flexDirection:'row'}}>
                    <Text style={[styles.caracteristicasTitle, {marginTop:10}]}>FORÇA: </Text>
                    <Text style={styles.atributos}>{heroi.forc}</Text>

                    <Text style={[styles.caracteristicasTitle, {marginTop:10, marginLeft: 10}]}>CONSTITUIÇÃO: </Text>
                    <Text style={styles.atributos}>{heroi.con}</Text>
                </View>

                <View style={{flexDirection:'row'}}>
                    <Text style={[styles.caracteristicasTitle, {marginTop:10}]}>DESTREZA: </Text>
                    <Text style={styles.atributos}>{heroi.des}</Text>

                    <Text style={[styles.caracteristicasTitle, {marginTop:10, marginLeft: 10}]}>CARISMA: </Text>
                    <Text style={styles.atributos}>{heroi.car}</Text>
                </View>

                <View style={{flexDirection:'row'}}>
                    <Text style={[styles.caracteristicasTitle, {marginTop:10}]}>SABEDORIA: </Text>
                    <Text style={styles.atributos}>{heroi.sab}</Text>

                    <Text style={[styles.caracteristicasTitle, {marginTop:10, marginLeft: 10}]}>INTELIGÊNCIA: </Text>
                    <Text style={styles.atributos}>{heroi.int}</Text>
                </View>

            </View>        

        </View>

    )
}