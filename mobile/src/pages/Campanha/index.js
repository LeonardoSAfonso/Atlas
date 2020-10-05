import React, { useState, useEffect } from 'react'
import { Alert, View, FlatList, Image, Text, TouchableOpacity } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather, FontAwesome5 } from '@expo/vector-icons'

import api from '../../services/api'

import styles from './styles'


export default function listCampanha() {

    const navigation = useNavigation()

    const [campanhas, setCampanhas] = useState([])


    async function loadCampanhas() {

        const res = await api.get('campanhas', {
            headers: {
                Authorization: 1,
            }
        })

        setCampanhas(res.data)

    }

    useEffect(() => {
        loadCampanhas()
    }, [])



    function navigateToAddCampanha() {
        navigation.navigate('AddCampanha')
    }

    function navigateToDetalhes() {
        navigation.navigate('CampanhaTab')
    }

    function Alertafernando() {

        return(
        Alert.alert('Excluir Aventura?', 'Deseja mesmo excluir a aventura?',
            [{
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
            },
            {
                text: 'OK',
                onPress: () => console.log('OK Pressed')
            }
            ])
        )
    }


    return (
        <View style={styles.container}>

            <Text style={styles.title}>CAMPANHAS</Text>

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
            />*/ }

            <View style={styles.campanhaList}>

                <TouchableOpacity style={styles.campanha} 
                    onPress={() => (navigateToDetalhes())} 
                    onLongPress={() => (Alertafernando())} delayLongPress={500}
                >
                    <FontAwesome5 name='dice-d20' size={50} color={'#47525E'} />
                    <View>
                        <Text style={styles.campanhaNome}>Teste 1</Text>
                        <Text style={styles.campanhaFuncao}>Mestre</Text>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity style={styles.campanha} onPress={() => (navigateToDetalhes())} >
                    <FontAwesome5 name='dice-d20' size={50} color={'#47525E'} />
                    <View>
                        <Text style={styles.campanhaNome}>Teste</Text>
                        <Text style={styles.campanhaFuncao}>Mestre</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.campanha} onPress={() => (navigateToDetalhes())} >
                    <FontAwesome5 name='dice-d20' size={50} color={'#47525E'} />
                    <View>
                        <Text style={styles.campanhaNome}>Teste</Text>
                        <Text style={styles.campanhaFuncao}>Mestre</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles.campanha} onPress={() => (navigateToDetalhes())} >
                    <FontAwesome5 name='dice-d20' size={50} color={'#47525E'} />
                    <View>
                        <Text style={styles.campanhaNome}>Teste</Text>
                        <Text style={styles.campanhaFuncao}>Mestre</Text>
                    </View>
                </TouchableOpacity>

            </View>


            <TouchableOpacity
                style={styles.addCampanha}
                onPress={() => (navigateToAddCampanha())}
            >
                <Feather name='plus' size={50} color={'#fff'} />
            </TouchableOpacity>



        </View>

    )
}