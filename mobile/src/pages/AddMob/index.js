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

        const res = await api.get('mobs/add')

        setMobs(res.data)

    }

    useEffect(() => {
        loadMobs()
    }, [])


    function navigateToProfile(mob){
        navigation.navigate('ProfileMob', {mob})
    }


    async function adicionarMob(id) {
        console.log("teste: ", campanha)
        try{
            await api.post(`mobs/${id}/${campanha}`)
            alert('Mob adicionado à aventura com sucesso.')
        }catch(erro){
            alert('Erro ao tentar adicionar mob, tente novamente.')
        }
    }

    return(
        <View style={styles.container}> 

            <View>
                <Text style={styles.ajuda}>Pressione para selecionar o mob que deseja adicionar à sua aventura.</Text>
            </View>

            <View style={styles.linhaAjuda}></View>

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
                    onLongPress={() => (adicionarMob(mob.codMob))} delayLongPress={500}
                >
                    <FontAwesome5 name='user-circle' size={60} color={'#47525E'} style={{ marginRight:10}}/>
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

        </View>

    )
}