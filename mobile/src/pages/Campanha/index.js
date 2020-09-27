import React, {useState, useEffect} from 'react'
import { View, FlatList,Image, Text, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {Feather, FontAwesome5} from  '@expo/vector-icons'

import api from '../../services/api'

import styles from './styles'


export default function campanha(){
    
    const navigation = useNavigation()
    const [campanhas, setCampanhas] = useState([])
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    async function loadCampanhas(){

        const res = await api.get('campanhas')

        setCampanhas(res.data)
        setTotal(res.headers['x-total-count'])
        setPage(page+1)
        setLoading(false)
    }
    
    useEffect(()=>{
        loadCampanhas()
    }, [])

    

    function navigateToDetail(campanha){
        navigation.navigate('Detail', {campanha})
    }

    return(
        <View style={styles.container}> 

            {/*<FlatList
                data={campanhas}
                style={styles.campanhaList}
                keyExtractor={campanha=> String(campanha.codCampanha)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadCampanhas}
                onEndReachedThreshold={0.2}
                renderItem={({item: campanha})=> (

                   <TouchableOpacity style={styles.campanha} onPress={()=>{}} >
                    <FontAwesome5 name='dice-d20' size={50} color={'#47525E'}/>
                    <View>
                        <Text style={styles.campanhaNome}>Teste</Text>
                        <Text style={styles.campanhaFuncao}>Mestre</Text>
                    </View>
                    </TouchableOpacity>

                )}
            /> */}

            <View style={styles.campanhaList}>

                <TouchableOpacity style={styles.campanha} onPress={()=>{}} >
                    <FontAwesome5 name='dice-d20' size={50} color={'#47525E'}/>
                    <View>
                        <Text style={styles.campanhaNome}>Teste</Text>
                        <Text style={styles.campanhaFuncao}>Mestre</Text>
                    </View>
                </TouchableOpacity>
                
                

                <TouchableOpacity style={styles.campanha} onPress={()=>{}} >
                    <FontAwesome5 name='dice-d20' size={50} color={'#47525E'}/>
                    <View>
                        <Text style={styles.campanhaNome}>Teste</Text>
                        <Text style={styles.campanhaFuncao}>Mestre</Text>
                    </View>
                </TouchableOpacity>
            
                <TouchableOpacity style={styles.campanha} onPress={()=>{}} >
                    <FontAwesome5 name='dice-d20' size={50} color={'#47525E'}/>
                    <View>
                        <Text style={styles.campanhaNome}>Teste</Text>
                        <Text style={styles.campanhaFuncao}>Mestre</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.campanha} onPress={()=>{}} >
                    <FontAwesome5 name='dice-d20' size={50} color={'#47525E'}/>
                    <View>
                        <Text style={styles.campanhaNome}>Teste</Text>
                        <Text style={styles.campanhaFuncao}>Mestre</Text>
                    </View>
                </TouchableOpacity>

            </View>
            

            <TouchableOpacity
            style={styles.addCampanha}
            >
            <Feather name='plus' size={50} color={'#fff'}/>
            </TouchableOpacity>

            

        </View>

    )
}