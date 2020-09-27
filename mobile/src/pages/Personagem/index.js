import React, {useState, useEffect} from 'react'
import { View, FlatList,Image, Text, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {Feather, FontAwesome5} from  '@expo/vector-icons'

import api from '../../services/api'

import styles from './styles'


export default function personagem(){
    
    const navigation = useNavigation()
    const [personagens, setPersonagens] = useState([])
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    async function loadPersonagens(){

        const res = await api.get('personagens')

        setPersonagens(res.data)
        setTotal(res.headers['x-total-count'])
        setPage(page+1)
        setLoading(false)
    }
    
    useEffect(()=>{
        loadPersonagens()
    }, [])

    

    function navigateToDetail(personagem){
        navigation.navigate('Detail', {personagem})
    }

    return(
        <View style={styles.container}> 

            {/*<FlatList
                data={personagens}
                style={styles.personagemList}
                keyExtractor={personagem=> String(personagem.codPersonagem)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadPersonagens}
                onEndReachedThreshold={0.2}
                renderItem={({item: personagem})=> (

                    <View style={styles.personagem}>

                        <FontAwesome5 name='user-circle' size={50} color={'#47525E'}/>

                        <Text style={styles.personagemNome}>{personagem.nome}</Text>
                        <Text style={styles.personagemAventura}>{personagem.funcao}</Text>

                    </View>

                )}
            /> */}

            <View style={styles.personagemList}>

                <TouchableOpacity style={styles.personagem} onPress={()=>{}} >
                    <FontAwesome5 name='dice-d20' size={50} color={'#47525E'}/>
                    <View>
                        <Text style={styles.personagemNome}>Teste</Text>
                        <Text style={styles.personagemAventura}>Mestre</Text>
                    </View>
                </TouchableOpacity>
                
                

                <TouchableOpacity style={styles.personagem} onPress={()=>{}} >
                    <FontAwesome5 name='dice-d20' size={50} color={'#47525E'}/>
                    <View>
                        <Text style={styles.personagemNome}>Teste</Text>
                        <Text style={styles.personagemAventura}>Mestre</Text>
                    </View>
                </TouchableOpacity>
            
                <TouchableOpacity style={styles.personagem} onPress={()=>{}} >
                    <FontAwesome5 name='dice-d20' size={50} color={'#47525E'}/>
                    <View>
                        <Text style={styles.personagemNome}>Teste</Text>
                        <Text style={styles.personagemAventura}>Mestre</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.personagem} onPress={()=>{}} >
                    <FontAwesome5 name='dice-d20' size={50} color={'#47525E'}/>
                    <View>
                        <Text style={styles.personagemNome}>Teste</Text>
                        <Text style={styles.personagemAventura}>Mestre</Text>
                    </View>
                </TouchableOpacity>
            </View>
            

            <TouchableOpacity
            style={styles.addPersonagem}
            >
            <Feather name='plus' size={50} color={'#fff'}/>
            </TouchableOpacity>

            

        </View>

    )
}