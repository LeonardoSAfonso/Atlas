import {StyleSheet} from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex:1.,
        paddingHorizontal:24,
        paddingTop: Constants.statusBarHeight+20
    },

    header:{
        paddingVertical: 16,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },

    headerText:{
        color: '#47525E',
        fontSize: 18,
        fontWeight: 'bold'
    },

    form:{
        marginTop:20

    },

    input: {
        marginBottom: 15,
        paddingHorizontal: 12,
        paddingVertical: 16,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#ddd',
        fontSize: 15,
        color: '#444',
    },

    actions:{
        marginTop:0,
        justifyContent: 'center',
        alignContent: 'center'
    },

    action:{
        marginTop:25,
        marginBottom:25,
        backgroundColor: '#47525E',
        borderRadius:8,
        height:50,
        width:'100%',
        justifyContent:'center',
        alignItems: 'center'
    },

    actionText:{
        color: '#ffffff',
        fontSize: 17,
        fontWeight: 'bold',
    }
})