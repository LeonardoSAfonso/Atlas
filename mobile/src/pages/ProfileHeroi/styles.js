import {StyleSheet, Dimensions} from 'react-native'
import Constants from 'expo-constants'

const { width } = Dimensions.get("window")

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
        alignSelf:'center',
        marginVertical: 10
    },
    picker:{
        marginBottom:15,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#ddd',
        fontSize: 15,
        color: '#444',
        width:150,
        height:40,
        justifyContent:'center'

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
        fontWeight:'bold',
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
        fontSize: 18,
        color:'#737380',
        marginVertical: 7

    },
    btnModalTexto:{
        fontSize: 15,
        color:'#f0f0f5',
        fontWeight:'bold',
        alignSelf: 'center'
    },
    btnModal:{                
        backgroundColor: '#47525E',
        alignItems:'center',
        justifyContent:'center',
        alignSelf: 'center',
        width:'30%',
        height:50,
        borderRadius:20,
    },  
    actionText:{
        color: '#47525E',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign:'center',
        marginBottom:15

    },  
    btnHp:{                
        marginTop: '10%',
        marginBottom: '7%',
        backgroundColor: '#47525E',
        alignItems:'center',
        justifyContent:'center',
        width:'25%',
        height:50,
        borderRadius:20,
    },
    btnHpTexto:{
        fontSize: 24,
        color:'#f0f0f5',
        fontWeight:'bold',
    },
    btnLevelUp:{      
        backgroundColor: '#47525E',
        alignItems:'center',
        justifyContent:'center',
        marginLeft:'20%',
        width:'60%',
        height:60,
        borderRadius:20,
    },
    viewWrapper: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
    modalView: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        elevation: 5,
        transform: [{ translateX: -(width * 0.4) }, 
                    { translateY: -90 }],
        height: 180,
        width: width * 0.8,
        backgroundColor: "#fff",
        borderRadius: 7,
    },
    modalView2: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        elevation: 5,
        transform: [{ translateX: -(width * 0.4) }, 
                    { translateY: -90 }],
        height: 250,
        width: width * 0.8,
        backgroundColor: "#fff",
        borderRadius: 7,
    },
    textInput: {
        width: "80%",
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderWidth: 1,
        marginBottom: 8,
    }
})