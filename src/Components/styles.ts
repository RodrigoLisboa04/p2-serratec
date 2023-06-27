import React from 'react'
import { StyleSheet, StatusBar, Platform  } from 'react-native'

export const styles = StyleSheet.create({
    modalContainer: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        backgroundColor: "#40404090",
        zIndex: 99,
        left: 0,
        top: 0,
        marginHorizontal: "auto",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    },

    modalContent: {
        width: "90%",
        height: "90%",
        backgroundColor: 'black',
        borderRadius: 5, 
        borderWidth: 0.3,
        borderColor: '#C89B3C'
    },

/* HEADER PADRÃO */
    
    modalHeader: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: "#121212",
        paddingHorizontal: 10,
        paddingVertical: 15,
        borderWidth: 0.199,
        borderColor: '#C89B3C',
    },

/* INFORMAÇÕES PRINCIPAIS */

    modalHeaderInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#121212",
        borderWidth: 0.199,
        borderColor: '#C89B3C',
    },

    modalText:{
        color: "#fff",
        justifyContent: 'center',
        flexDirection: 'column',
        paddingVertical: 40,
        paddingHorizontal: "2%",
        marginLeft: 10,
        
    },

    modalTxtHeader:{
        fontSize: 20,
        color:"#C8AA6E",
        fontWeight: "600"
    },

    modalImage: {
        width: 90,
        height: 90,
        marginLeft: 20
    },
   
    modalName: {
        fontSize: 20,
        color:"#fff",
        fontWeight: "700"
    },

    modalTitle: {
        fontSize: 12,
        color:"#fff",
        fontWeight: "300"
    },

/* BIOGRAFIA */

    modalBiografia:{
        marginTop: 10,
        borderWidth: 0.199,
        borderColor: '#C89B3C',
    },

    modalTituloBiografia:{
        fontSize: 13,
        color:"#fff",
        fontWeight: "500",
        backgroundColor: "#121212",
        paddingHorizontal: 20,
        paddingVertical: 3,
        paddingTop: 10,
        
    },

    modalBlurb: {
        fontSize: 12,
        color:'#c6c6c6',
        fontWeight: "300",
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#121212",
        paddingTop: 10,
      
    },

/* BOTÃO CLOSE */

    closeButton: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#463714',
        borderRadius: 5,
        padding: 7,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#C8AA6E',
    
    },

    closeButtonText: {
        fontSize: 16,
        color:"#C89B3C",
        fontWeight: "300",
    },

/* INFORMAÇÕES */

    modalTags: {
        fontSize: 11.4,
        color:"#fff",
        fontWeight: "200",
        fontStyle: 'italic'
    },

    modalStats: {
        color: "#c6c6c6",
    },

    modalBoxStats: {
        fontSize: 12,
        color:'#c6c6c6',
        fontWeight: "300",
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#121212",
        paddingTop: 10,
        marginTop: 10,
        flexDirection: 'column', 
        borderWidth: 0.199,
        borderColor: '#C89B3C',
    },

    modalIconesStats:{
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    modalTituloStats: {
        fontSize: 13,
        color:"#fff",
        fontWeight: "500",
        backgroundColor: "#121212",
        paddingVertical: 20,
        paddingTop: 10,
       
    },
    
})