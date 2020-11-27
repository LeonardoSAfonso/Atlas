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
        backgroundColor: '#f0f0f5'
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
    
    linha:{
        height:0.5,
        width: '85%',
        backgroundColor: '#000',
        opacity:0.2,
        marginVertical:15
    },
    
    addMob:{                
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

    herois:{                
        backgroundColor: '#47525E',
        alignItems:'center',
        justifyContent:'center',
        width:60,
        height:60,
        borderRadius:50,
        position:'absolute',
        left:'10%',
        top:'82%'
    }

})