import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex:1.,
        backgroundColor: '#f0f0f5',
        paddingTop: Constants.statusBarHeight
    },

    imagem:{
        height:'8.5%',
        width:'100%',
        backgroundColor:'orange',
        elevation:10,
        marginBottom:1
        
    },

    tr:{
        alignSelf:'center',
        height:0.5,
        width: '90%',
        backgroundColor: '#000',
        opacity:0.6,
        marginVertical:10
    },

    title:{
        color: '#47525E',
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf:'center',
        marginTop:-30
    },

    nome:{
        fontSize: 22,
        color:'#0D407C',
        fontWeight:'bold',
    },
    
    caracteristicasTitle:{
        fontSize: 20,
        color:'#737380',
        fontWeight:'bold'
        
    },

    caracteristicas:{
        fontSize: 18,
        color:'#737380',
        marginLeft:15, 
        marginVertical:5

    }
})