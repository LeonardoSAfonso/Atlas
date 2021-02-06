import React, { useState, useEffect } from 'react'
import { View, FlatList, Image, Text, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather, Entypo } from '@expo/vector-icons'

import api from '../../services/api'

import styles from './styles'




export default function profile() {

    const navigation = useNavigation()
    const route = useRoute()

    const [racas, setRacas] = useState([])

    const campanha = route.params

    console.log('Campanha? ', route.params)



    async function loadRacas() {

        const Racas = await api.get(`/racas`)

        setRacas(Racas.data)

    }

    useEffect(() => {
        loadRacas()
    }, [])



    function navigateBack(teste) {
        //navigation.goBack()
        console.log('Cod: ', teste)
    }

    function navigateToClasse(idRaca, nome) {

        navigation.navigate('Classe', { idRaca: idRaca, raca: nome, campanha: campanha })
    }

    return (
        <View style={styles.container}>

            <Text style={styles.title}>RAÇAS</Text> 

            <FlatList
                data={racas}
                style={styles.mobList}
                keyExtractor={raca => String(raca.codRaca)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadRacas}
                renderItem={({ item: raca }) => (

                    <View>

                        <View style={{ justifyContent: 'space-evenly', marginHorizontal: 30 }}>

                            <TouchableOpacity onPress={() => navigateToClasse(raca.codRaca, raca.nome)}>
                                <Text style={styles.nome}>{raca.nome}</Text>
                            </TouchableOpacity>

                            <Text style={[styles.caracteristicas, { marginLeft: 15, marginTop: 3 }]}>{raca.descricao}</Text>
                            <Text style={styles.caracteristicasTitle}>Alinhamento:</Text>
                            <Text style={[styles.caracteristicas, { marginLeft: 15, marginTop: 3 }]}>{raca.alinhamento}</Text>
                            <Text style={styles.caracteristicasTitle}>Visao:</Text>
                            <Text style={[styles.caracteristicas, { marginLeft: 15, marginTop: 3 }]}>{raca.visao}</Text>
                            <Text style={styles.caracteristicasTitle}>Traços:</Text>
                            <Text style={[styles.caracteristicas, { marginLeft: 15, marginTop: 3 }]}>{raca.visao}</Text>

                        </View>

                        <View style={styles.tr}></View>

                    </View>

                )}
            />

        </View>

    )
}