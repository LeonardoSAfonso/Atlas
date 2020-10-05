import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex:1.,
        paddingHorizontal:24,
        backgroundColor: '#f0f0f5'
    },
    mobList:{
        marginTop:15
    },

    mob:{
        flexDirection:'row',
        backgroundColor: '#f0f0f5',
        marginBottom:25
    },

    mobNome:{
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

})