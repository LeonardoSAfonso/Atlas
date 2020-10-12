import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex:1.,
        paddingHorizontal:24,
        backgroundColor: '#f0f0f5'
    },

    title:{
        marginTop:20,
        marginLeft:'33%',
        color: '#47525E',
        fontSize: 20,
        fontWeight: 'bold',
    },
    tr:{
        marginLeft:'15%',
        height:0.5,
        width: '70%',
        backgroundColor: '#000',
        opacity:0.6,
        marginVertical:15
    },

    campanhaList:{
        marginTop:20
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