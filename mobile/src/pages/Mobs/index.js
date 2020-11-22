import React, {useState, useEffect} from 'react'
import { View, FlatList,Image, Text, TouchableOpacity } from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'
import {Feather, FontAwesome5} from  '@expo/vector-icons'

import api from '../../services/api'

import styles from './styles'


export default function mob(){
    
    const navigation = useNavigation()
    const route = useRoute()

    const campanha = route.params.campanha

    console.log(campanha)


    const [mobs, setMobs] = useState([])
   
    async function loadMobs() {

        const res = await api.get(`mobs/${campanha}`)

        setMobs(res.data)

    }

    useEffect(() => {
        loadMobs()
    }, [])



    function navigateToAddMob() {
        navigation.navigate('AddMob', {campanha:campanha})
    }

    function navigateToProfile(mob){
        navigation.navigate('ProfileMob', {mob})
    }

    function navigateToHerois(){
        navigation.navigate('Herois')
    }

    async function handleDeleteIncident(id){
        try{
            await api.delete(`mobs/${id}`,{
                headers: {
                    authorization: user
                }
            })

            setMobs(mobs.filter(mob => mob.codMob !== id))
        }catch(erro){
            alert('Erro ao tentar deletar, tente novamente.')
        }
    }

    /*function Alertafernando(id) {

        return(
        Alert.alert('Excluir Aventura?', 'Deseja mesmo excluir a aventura?',
            [{
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            },
            {
                text: 'OK',
                onPress: () => (handleDeleteIncident(id))
            }
            ])
        )
    }*/

    return(
        <View style={styles.container}> 

            <FlatList 
                data={mobs}
                style={styles.mobList}
                keyExtractor={mob=> String(mob.codMob)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadMobs}
                onEndReachedThreshold={0.2}
                renderItem={({item: mob})=> (

                    
                    <TouchableOpacity style={styles.mob} 
                    onPress={() => (navigateToProfile(mob))} 
                    onLongPress={() => (Alertafernando(mob.codMob))} delayLongPress={500}
                >
                    <FontAwesome5 name='user-circle' size={60} color={'#47525E'} style={{marginTop:5, marginRight:10}}/>
                    <View>
                        <Text style={styles.mobNome}>{mob.nome}</Text>
                        <View style={{flexDirection:'row'}}>
                            <View style={{width:'40%'}}>
                                <Text style={styles.atributos}>NIVEL: {mob.nivel}</Text>
                                <Text style={styles.atributos}>CA: {mob.ca}</Text>
                            </View>
                            <View >
                                <Text style={styles.atributos}>HP: {mob.hpMaxima}/{mob.hp} </Text>
                            </View>
                        </View>
                        <View style={styles.linha}></View>
                    </View>
                    </TouchableOpacity>
                )}
            />

            

            {/*<View style={styles.mobList}>

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
            </View>*/}
            
            <TouchableOpacity
            style={styles.addMob}
            onPress={navigateToAddMob}
            >
            <Feather name='plus' size={50} color={'#fff'}/>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.herois}
            onPress={navigateToHerois}
            >
            <FontAwesome5 name='shield-alt' size={40} color={'#fff'}/>
            </TouchableOpacity>

            

        </View>

    )
}