import React, { useState, useEffect } from 'react'
import { View, FlatList, Image, Text, TouchableOpacity, ScrollView } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import { Feather, Entypo } from '@expo/vector-icons'

import api from '../../services/api'

import styles from './styles'


export default function profile() {

    const navigation = useNavigation()
    const route = useRoute()


    const [mob, setMobs] = useState([])
    const [acoes, setAcoes] = useState([])


    const Mob = route.params.mob


    async function loadMobs() {

        setMobs(Mob)

        const Acao = await api.get(`/habilidades/${Mob.codMob}`)

        console.log('acao: ', Acao.data)

        setAcoes(Acao.data)

    }

    console.log('acões: ', acoes)

    useEffect(() => {
        loadMobs()
    }, [])


    function navigateBack() {
        navigation.goBack()
    }

    return (
        <View style={styles.container}>

            <View style={styles.imagem}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, marginHorizontal: 10 }}>
                    <TouchableOpacity onPress={navigateBack}>
                        <Feather name='arrow-left' size={30} color='#47525E' />
                    </TouchableOpacity>

                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.mobNome}>{mob.nome}</Text>
                        <Text style={styles.mobNivel}>Nivel: {mob.nivel}</Text>
                    </View>

                    <TouchableOpacity onPress={() => { }}>
                        <Entypo name='dots-three-vertical' size={30} color='#47525E' />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>

                <Text style={styles.caracteristicasTitle}>HP: </Text>
                <Text style={styles.caracteristicas}>{mob.hpMaxima}/{mob.hp}</Text>
                <Text style={[{ marginLeft: 20 }, styles.caracteristicasTitle]}>CA: </Text>
                <Text style={styles.caracteristicas}>{mob.ca}</Text>

            </View>

            <View style={styles.tr}></View>

            <View style={{ alignSelf: 'center', flexDirection: 'row' }}>

                <Text style={styles.caracteristicasTitle}>ALINHAMENTO: </Text>
                <Text style={styles.caracteristicas}>{mob.alinhamento}</Text>

            </View>

            <View style={styles.tr}></View>

            <View style={{ justifyContent: 'space-evenly', alignItems: 'center' }}>

                <Text style={styles.title}>Atributos</Text>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={[styles.caracteristicasTitle, { marginTop: 10 }]}>FORÇA: </Text>
                    <Text style={styles.atributos}>{mob.forc}</Text>

                    <Text style={[styles.caracteristicasTitle, { marginTop: 10, marginLeft: 10 }]}>CONSTITUIÇÃO: </Text>
                    <Text style={styles.atributos}>{mob.con}</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={[styles.caracteristicasTitle, { marginTop: 10 }]}>DESTREZA: </Text>
                    <Text style={styles.atributos}>{mob.des}</Text>

                    <Text style={[styles.caracteristicasTitle, { marginTop: 10, marginLeft: 10 }]}>CARISMA: </Text>
                    <Text style={styles.atributos}>{mob.car}</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <Text style={[styles.caracteristicasTitle, { marginTop: 10 }]}>SABEDORIA: </Text>
                    <Text style={styles.atributos}>{mob.sab}</Text>

                    <Text style={[styles.caracteristicasTitle, { marginTop: 10, marginLeft: 10 }]}>INTELIGÊNCIA: </Text>
                    <Text style={styles.atributos}>{mob.int}</Text>
                </View>

            </View>

            <View style={styles.tr}></View>

            <Text style={styles.title}>Ações</Text>

            <FlatList

                data={acoes}
                style={styles.mobList}
                keyExtractor={acao => String(acao.codHabilidade)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadMobs}
                onEndReachedThreshold={0.2}
                renderItem={({ item: acao }) => (

                    <View>

                        <View style={{ justifyContent: 'space-evenly', marginHorizontal: 30 }}>

                            <Text style={styles.caracteristicasTitle}>{acao.nomeHab}</Text>
                            <Text style={[styles.caracteristicas, { marginLeft: 15, marginTop: 3 }]}>{acao.descHab}</Text>

                        </View>

                        <View style={styles.tr}></View>

                    </View>
                )}
            />
        </View>
    )
}