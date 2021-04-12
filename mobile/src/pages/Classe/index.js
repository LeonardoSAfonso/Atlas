import React, {useState, useEffect} from 'react'
import { View, FlatList,Image, Text, TouchableOpacity, ScrollView} from 'react-native'
import {useNavigation, useRoute} from '@react-navigation/native'
import {Feather, Entypo} from  '@expo/vector-icons'

import api from '../../services/api'

import styles from './styles'




export default function profile(){
    
    const navigation = useNavigation()  
    const route = useRoute()

    const ids = {
        campanha:0,
        idRaca:0,
        raca:'',
        idClasse:0,
        classe:'',
        alinhamento:''
    }

    ids.campanha=route.params.campanha
    ids.idRaca = route.params.idRaca
    ids.raca = route.params.raca


    console.log('ROUTE: ',route.params)

    const [classes, setClassses] = useState([])


    async function loadClasses() {

        const Classes = await api.get(`/classes`)

        console.log('Classes: ',Classes.data)

        setClassses(Classes.data)

    }

    useEffect(() => {
        loadClasses()
    }, [])


    function navigateBack(teste){
        //navigation.goBack()
        console.log('Cod: ', teste)
    }

    function navigatoToAddHeroi(id, nome, caInicial){

        ids.idClasse = id
        ids.classe = nome
        ids.ca = caInicial
        navigation.navigate('AddHeroi', {ids})
    }
    
    return(
        <View style={styles.container}>   
 
        <Text style={styles.title}>CLASSES</Text>        

        <FlatList
            data={classes}
            style={styles.mobList}
            keyExtractor={classe=> String(classe.codClasse)}
            showsVerticalScrollIndicator={false}
            onEndReached={loadClasses}
            renderItem={({item: classe})=> (
                <View>

                    <View style={{justifyContent:'space-evenly', marginHorizontal: 30}}>

                        <TouchableOpacity onPress={()=>navigatoToAddHeroi(classe.codClasse, classe.nome, classe.caInicial)}>
                            <Text style={styles.nome}>{classe.nome}</Text>
                        </TouchableOpacity>

                        <Text style={styles.caracteristicas}>{classe.desc}</Text>
                        <Text style={styles.caracteristicasTitle}>Armaduras::</Text>
                        <Text style={styles.caracteristicas}>{classe.proeficienciaArmaduras}</Text>
                        <Text style={styles.caracteristicas}>Sua classe de armadura inicial é: {classe.caInicial}</Text>
                        <Text style={styles.caracteristicasTitle}>Armas:</Text>
                        <Text style={styles.caracteristicas}>{classe.proeficienciaArmas}</Text>
                        <Text style={styles.caracteristicasTitle}>Proeficiência:</Text>
                        <Text style={styles.caracteristicas}>{classe.proeficienciaTestes}</Text>
                        <Text style={styles.caracteristicasTitle}>Atributo Principal:</Text>
                        <Text style={styles.caracteristicas}>{classe.habilidadePrincipal}</Text>
                        <Text style={styles.caracteristicasTitle}>{classe.caminhoNome}:</Text>
                        <Text style={styles.caracteristicas}>{classe.caminhoDesc}</Text>

                    </View>

                    <View style={styles.tr}></View>  

                </View>
            )}
        />

            
        </View>

    )
}