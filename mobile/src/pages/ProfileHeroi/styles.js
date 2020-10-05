import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex:1.,
        backgroundColor: '#f0f0f5',
        paddingTop: Constants.statusBarHeight
    },
    imagem:{
        height:'35%',
        width:'100%',
        backgroundColor:'orange'
        
    },
    detalhes:{
        padding:20
        
    },

    tr:{
        marginLeft:'15%',
        height:0.5,
        width: '70%',
        backgroundColor: '#000',
        opacity:0.6,
        marginVertical:15
    },
    title:{
        color: '#47525E',
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf:'center'
    },
    heroiList:{
        marginTop:15
    },

    heroi:{
        flexDirection:'row',
        backgroundColor: '#f0f0f5',
        marginBottom:25
    },

    heroiNome:{
        fontSize: 22,
        color:'#41414D',
        fontWeight:'bold',
        marginTop:5
    },

    heroiNivel:{
        fontSize: 18,
        color:'#41414D',
        fontWeight:'bold',
        marginTop:5
    },
    
    caracteristicas:{
        fontSize: 18,
        color:'#737380',

    },

    atributos:{
        marginBottom:5,
        fontSize: 17,
        color:'#737380',

    },
    
    addHeroi:{                
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