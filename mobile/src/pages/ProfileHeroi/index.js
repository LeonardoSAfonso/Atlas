import React, {useState, useEffect} from 'react'
import { View, FlatList,Image, Text, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {Feather, Entypo} from  '@expo/vector-icons'

import api from '../../services/api'

import styles from './styles'


export default function profile(){
    
    const navigation = useNavigation()
    const [herois, setHerois] = useState([])
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    async function loadHerois(){

        const res = await api.get('herois')

        setHerois(res.data)
        setTotal(res.headers['x-total-count'])
        setPage(page+1)
        setLoading(false)
    }
    
    useEffect(()=>{
        loadHerois()
    }, [])

    

    function navigateToDetail(heroi){
        navigation.navigate('Detail', {heroi})
    }

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
                    <Text style={styles.heroiNome}>Hobgoblin</Text>
                    <TouchableOpacity onPress={()=>{}}>
                        <Entypo name='dots-three-vertical' size={30} color='#47525E'/>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:'center'}}>
                    <Text style={styles.heroiNivel}>Nivel: 10</Text>
                </View>
            </View>   

            <View style={styles.detalhes}>                

                <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>

                    <Text style={styles.caracteristicas}>HP: 5000/5000</Text>
                    <Text style={styles.caracteristicas}>MP: 2000/2000</Text>
                    <Text style={styles.caracteristicas}>CA: 20</Text>

                </View>

                <View style={styles.tr}></View>

                <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
                    <Text style={styles.caracteristicas}>CLASSE: BARBARO</Text>
                    <Text style={styles.caracteristicas}>RAÇA: HOBGOBLIN</Text>
                </View>

                <View style={{alignSelf:'center', marginTop:15}}>
                    <Text style={styles.caracteristicas}>TENDÊNCIA: CAOTICO-BOM</Text>

                </View>

                <View style={styles.tr}></View>
            
                <View style={{justifyContent:'space-evenly'}}>

                    <Text style={styles.title}>Atributos</Text>

                    <View style={{justifyContent:'space-evenly', alignItems: 'center',paddingVertical: 10}}>

        
                        <Text style={styles.atributos}>FORÇA: 18 + 4</Text>
                        <Text style={styles.atributos}>CONSTITUIÇÃO: 18 + 4</Text>
                        <Text style={styles.atributos}>DESTREZA: 16 + 3</Text>
                        <Text style={styles.atributos}>INTELIGÊNCIA: 14 + 2</Text>
                        <Text style={styles.atributos}>SABEDORIA: 12 + 1</Text>
                        <Text style={styles.atributos}>CARISMA: 10 + 1</Text>

                
                    </View>

                </View>
                
                

            </View>

            

            

        </View>

    )
}