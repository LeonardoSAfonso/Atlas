import React, {useState, useEffect} from 'react'
import { View, FlatList, Text, TouchableOpacity } from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'
import {Feather, FontAwesome5} from  '@expo/vector-icons'

import api from '../../services/api'

import styles from './styles'


export default function personagem(){
    
    const navigation = useNavigation()


    const [herois, setHerois] = useState([])
    

    async function loadPersonagens(){

        const res = await api.get('personagens')

        setHerois(res.data)

    }
    
    useEffect(()=>{
        loadPersonagens()
    }, [])

    

    function navigateToProfile(){
        navigation.navigate('ProfileHeroi')
    }

    function navigateToMobs(){
        navigation.navigate('Mobs')
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
                    <FontAwesome5 name='user-circle' size={60} color={'#47525E'} style={{marginTop:5}}/>
                    <View>
                        <Text style={styles.personagemNome}>Draco</Text>
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
                
                <View style={styles.tr}></View>

                <TouchableOpacity style={styles.personagem} onPress={()=>(navigateToProfile())} >
                 <FontAwesome5 name='user-circle' size={60} color={'#47525E'} style={{marginTop:5}}/>
                    <View>
                        <Text style={styles.personagemNome}>Karlos</Text>
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

                <View style={styles.tr}></View>
            
                <TouchableOpacity style={styles.personagem} onPress={()=>{}} >
                    <FontAwesome5 name='user-circle' size={60} color={'#47525E'} style={{marginTop:5}}/>
                    <View>
                        <Text style={styles.personagemNome}>Jerson</Text>
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

                <View style={styles.tr}></View>

                <TouchableOpacity style={styles.personagem} onPress={()=>{}} >
                    <FontAwesome5 name='user-circle' size={60} color={'#47525E'} style={{marginTop:5}}/>

                    <View>
                        <Text style={styles.personagemNome}>Roberto</Text>
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
            style={styles.addPersonagem}
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