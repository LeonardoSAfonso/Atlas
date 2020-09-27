import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex:1.,
        paddingHorizontal:24,
        backgroundColor: '#f0f0f5'
    },
    campanhaList:{
        marginTop:15
    },

    campanha:{
        flexDirection:'row',
        backgroundColor: '#f0f0f5',
        marginBottom:15
    },

    campanhaNome:{
        fontSize: 20,
        color:'#41414D',
        fontWeight:'bold',
        marginLeft:10,
 
    },

    campanhaFuncao:{
        fontSize: 18,
        color:'#737380',
        marginLeft:10,
    },
    
    addCampanha:{                
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