import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex:1.,
        paddingHorizontal:24,
        backgroundColor: '#f0f0f5'
    },
    personagemList:{
        marginTop:15
    },

    personagem:{
        flexDirection:'row',
        backgroundColor: '#f0f0f5',
    },

    tr:{
        marginLeft:'15%',
        height:0.5,
        width: '70%',
        backgroundColor: '#000',
        opacity:0.6,
        marginVertical:15
    },

    personagemNome:{
        fontSize: 18,
        color:'#41414D',
        fontWeight:'bold',
        marginLeft:10,
        marginTop:5
    },

    atributos:{
        marginLeft:10,
        fontSize: 15,
        color:'#737380',

    },
    
    addPersonagem:{                
        backgroundColor: '#47525E',
        alignItems:'center',
        justifyContent:'center',
        width:60,
        height:60,
        borderRadius:50,
        position:'absolute',
        left:'90%',
        top:'82%'
    },

})