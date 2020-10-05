import React, {useState, useEffect} from 'react'
import { View, FlatList,Image, Text, TouchableOpacity } from 'react-native'
import {useNavigation} from '@react-navigation/native'
import {Feather, FontAwesome5} from  '@expo/vector-icons'

import api from '../../services/api'

import styles from './styles'


export default function mob(){
    
    const navigation = useNavigation()
    const [mobs, setMobs] = useState([])
    const [total, setTotal] = useState(0)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)

    async function loadMobs(){

        const res = await api.get('mobs')

        setMobs(res.data)
        setTotal(res.headers['x-total-count'])
        setPage(page+1)
        setLoading(false)
    }
    
    useEffect(()=>{
        loadMobs()
    }, [])

    

    function navigateToProfile(){
        navigation.navigate('ProfileMob')
    }

    return(
        <View style={styles.container}> 

            {/*<FlatList
                data={mobs}
                style={styles.mobList}
                keyExtractor={mob=> String(mob.codMob)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadMobs}
                onEndReachedThreshold={0.2}
                renderItem={({item: mob})=> (

                    <View style={styles.mob}>

                        <FontAwesome5 name='user-circle' size={50} color={'#47525E'}/>

                        <Text style={styles.mobNome}>{mob.nome}</Text>
                        <Text style={styles.mobAventura}>{mob.funcao}</Text>

                    </View>

                )}
            /> */}

            <View style={styles.mobList}>

                <TouchableOpacity style={styles.mob} onPress={navigateToProfile} >
                    <FontAwesome5 name='user-circle' size={60} color={'#47525E'} style={{marginTop:5}}/>
                    <View>
                        <Text style={styles.mobNome}>Dragão</Text>
                        <View style={{flexDirection:'row'}}>
                            <View style={{width:'50%'}}>
                                <Text style={styles.atributos}>HP: 5000/5000</Text>
                                <Text style={styles.atributos}>MP: 2000/2000</Text>
                            </View>
                            <View >
                                <Text style={styles.atributos}>NIVEL: 100</Text>
                                <Text style={styles.atributos}>CA: 20</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
                
                

                <TouchableOpacity style={styles.mob} onPress={()=>{}} >
                    <FontAwesome5 name='user-circle' size={60} color={'#47525E'} style={{marginTop:5}}/>
                    <View>
                        <Text style={styles.mobNome}>HobGlobin</Text>
                        <View style={{flexDirection:'row'}}>
                            <View style={{width:'50%'}}>
                                <Text style={styles.atributos}>HP: 500/500</Text>
                                <Text style={styles.atributos}>MP: 200/200</Text>
                            </View>
                            <View >
                                <Text style={styles.atributos}>NIVEL: 10</Text>
                                <Text style={styles.atributos}>CA: 15</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            
                <TouchableOpacity style={styles.mob} onPress={()=>{}} >
                    <FontAwesome5 name='user-circle' size={60} color={'#47525E'} style={{marginTop:5}}/>
                    <View>
                        <Text style={styles.mobNome}>Goblin</Text>
                        <View style={{flexDirection:'row'}}>
                            <View style={{width:'50%'}}>
                                <Text style={styles.atributos}>HP: 500/500</Text>
                                <Text style={styles.atributos}>MP: 200/200</Text>
                            </View>
                            <View >
                                <Text style={styles.atributos}>NIVEL: 10</Text>
                                <Text style={styles.atributos}>CA: 15</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.mob} onPress={()=>{}} >
                    <FontAwesome5 name='user-circle' size={60} color={'#47525E'} style={{marginTop:5}}/>
                    <View>
                        <Text style={styles.mobNome}>Goblin2</Text>
                        <View style={{flexDirection:'row'}}>
                            <View style={{width:'50%'}}>
                                <Text style={styles.atributos}>HP: 500/500</Text>
                                <Text style={styles.atributos}>MP: 200/200</Text>
                            </View>
                            <View >
                                <Text style={styles.atributos}>NIVEL: 10</Text>
                                <Text style={styles.atributos}>CA: 15</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            

            <TouchableOpacity
            style={styles.addMob}
            >
            <Feather name='plus' size={50} color={'#fff'}/>
            </TouchableOpacity>

            

        </View>

    )
}