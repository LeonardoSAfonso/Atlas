import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
        flex:1.,
        paddingHorizontal:24,
        paddingTop: 10
    },
    
    title:{
        marginLeft:'32%',
        color: '#47525E',
        fontSize: 18,
        fontWeight: 'bold',
    },

    form:{
        marginTop:30

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