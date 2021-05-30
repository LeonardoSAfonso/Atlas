import React, {useState} from 'react'
import { Alert, View, FlatList, Image, Text, TouchableOpacity } from 'react-native'
import {useNavigation, useRoute, useFocusEffect} from '@react-navigation/native'
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

    useFocusEffect(
        React.useCallback(() => {
            loadMobs()
    }, [])
    )



    function navigateToAddMob() {
        navigation.navigate('AddMob', {campanha:campanha})
    }

    function navigateToProfile(mob){
        navigation.navigate('ProfileMob', {mob})
    }

    function navigateToHerois(){
        navigation.navigate('Herois', {campanha})
    }

    async function handleDeleteIncident(id){
        try{
            await api.delete(`mobs/${id}`)

            setMobs(mobs.filter(mob => mob.codMonster !== id))
        }catch(erro){
            alert('Erro ao tentar deletar, tente novamente.')
        }
    }
    
    function Alertafernando(id) {

        return(
        Alert.alert('Excluir Mob?', 'Deseja mesmo excluir o Mob?',
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
    }

    return(
        <View style={styles.container}> 

            <Text style={styles.title}>MOBS</Text> 

            <FlatList 
                data={mobs}
                style={styles.mobList}
                keyExtractor={mob=> String(mob.codMonster)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadMobs}
                onEndReachedThreshold={0.2}
                renderItem={({item: mob})=> (

                    
                    <TouchableOpacity style={styles.mob} 
                    onPress={() => (navigateToProfile(mob))} 
                    onLongPress={() => (Alertafernando(mob.codMonster))} delayLongPress={500}
                >
                    <FontAwesome5 name='user-circle' size={60} color={'#47525E'} style={{marginRight:10}}/>
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