import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex:1.,
        backgroundColor: '#f0f0f5',
        paddingTop: Constants.statusBarHeight
    },
    imagem:{
        height:'8.7%',
        width:'100%',
        backgroundColor:'orange'
        
    },
    detalhes:{
        padding:20
        
    },

    tr:{
        alignSelf:'center',
        height:0.5,
        width: '80%',
        backgroundColor: '#000',
        opacity:0.6,
        marginVertical:10
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
        marginTop:-10
    },

    heroiNivel:{
        fontSize: 18,
        color:'#41414D',
        fontWeight:'bold',
        marginTop:-7
    },

    caracteristicasTitle:{
        fontSize: 18,
        color:'#737380',
        fontWeight:'bold'
    },
    
    caracteristicas:{
        fontSize: 18,
        color:'#737380',

    },

    raca:{
        fontSize: 18,
        color:'#737380',
        marginLeft:10

    },

    atributos:{
        marginTop:10,
        fontSize: 18,
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