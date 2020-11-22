import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex:1.,
        paddingHorizontal:24,
        backgroundColor: '#f0f0f5'
    },
    mobList:{
        marginTop:10
    },

    mob:{
        flexDirection:'row',
        backgroundColor: '#f0f0f5',
        marginBottom:25
    },

    mobNome:{
        fontSize: 18,
        color:'#41414D',
        fontWeight:'bold'
    },

    atributos:{
        fontSize: 15,
        color:'#737380'

    },

    ajuda:{
        marginTop:5,
        marginLeft:10,
        fontSize: 16,
        color:'#737380'

    },
    
    linhaAjuda:{
        marginLeft:15,
        height:0.5,
        width: '90%',
        backgroundColor: '#000',
        opacity:0.2,
        marginTop:15
    },

    linha:{
        height:0.5,
        width: '85%',
        backgroundColor: '#000',
        opacity:0.2,
        marginTop:15
    }

})