import React, {useState, useEffect} from 'react'
import { View, FlatList, Text, TouchableOpacity } from 'react-native'
import {useNavigation, useRoute, useFocusEffect} from '@react-navigation/native'
import {Feather, FontAwesome5} from  '@expo/vector-icons'

import api from '../../services/api'

import styles from './styles'


export default function heroi(){
    
    const navigation = useNavigation()
    const route = useRoute()

    const campanha = route.params.campanha

    console.log('Heroi: ',campanha)


    const [herois, setHerois] = useState([])
    

    async function loadHerois(){

        const res = await api.get(`herois/${campanha}`)

        setHerois(res.data)

    }
    
    useFocusEffect(
        React.useCallback(()=>{
            loadHerois()
    }, [])
    )

    

    function navigateToProfile(heroi){
        navigation.navigate('ProfileHeroi', {heroi})
    }

    function navigateToMobs(){
        navigation.navigate('Mobs')
    }

    function navigateToRaca(){
        navigation.navigate('Raca', campanha)
    }

    return(
        <View style={styles.container}> 

            <FlatList 
                data={herois}
                style={styles.heroiList}
                keyExtractor={heroi=> String(heroi.codheroi)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadHerois}
                onEndReachedThreshold={0.2}
                renderItem={({item: heroi})=> (

                    
                    <TouchableOpacity style={styles.heroi} 
                    onPress={() => (navigateToProfile(heroi))} 
                    onLongPress={() => (Alertafernando(heroi.codheroi))} delayLongPress={500}
                >

                        <FontAwesome5 name='user-circle' size={60} color={'#47525E'} style={{marginTop:5}}/>

                        <View>
                            <Text style={styles.heroiNome}>{heroi.nome}</Text>
                            
                            <View style={{flexDirection:'row'}}>
                                <Text style={styles.atributos}>HP: {heroi.hpMaxima}/{heroi.hp}</Text>
                                <Text style={styles.atributos}>NIVEL: {heroi.nivel}</Text>
                            </View>

                            <View style={{flexDirection:'row'}}>
                                <Text style={styles.atributos}>CLASSE: {heroi.classe}</Text>
                                <Text style={styles.atributos}>CA: {heroi.ca}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                )}
            />

            {/*<View style={styles.heroiList}>

                <TouchableOpacity style={styles.heroi} onPress={()=>{}} >
                    <FontAwesome5 name='user-circle' size={60} color={'#47525E'} style={{marginTop:10}}/>

                    <View>
                        <Text style={styles.heroiNome}>Roberto</Text>
                        
                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.atributos}>HP: 500/500</Text>
                            <Text style={styles.atributos}>NIVEL: 10</Text>
                        </View>

                        <View style={{flexDirection:'row'}}>
                            <Text style={styles.atributos}>CLASSE: GUERREIRO</Text>
                            <Text style={styles.atributos}>CA: 15</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>*/}
            

            <TouchableOpacity
            style={styles.addHeroi}
            onPress={navigateToRaca}
            >
            <Feather name='plus' size={50} color={'#fff'}/>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.mobs}
            onPress={navigateToMobs}
            >
            <FontAwesome5 name='dragon' size={36} color={'#fff'}/>
            </TouchableOpacity>

            

        </View>

    )
}