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

/* ICONES HEADER */
    
    modalHeader: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        backgroundColor: "#121212",
        paddingHorizontal: 10,
        paddingVertical: 15,

    },

    modalHeaderInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#121212",
        borderTopWidth: 0.191,
        borderTopColor: '#c6c6c6',
    },

    modalText:{
        color: "#fff",
        justifyContent: 'center',
        flexDirection: 'column',
        paddingVertical: 40,
        paddingHorizontal: "2%",
        marginLeft: 10,
    },

    modalContent: {
        width: "90%",
        height: "90%",
        backgroundColor: "black",
        borderRadius: 5, 
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

    modalBiografia:{
        marginTop: 10
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
    closeButton: {
        width: '90%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0d1117',
        borderRadius: 5,
        padding: 7,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#c1c1c1',
    
    },
    closeButtonText: {
        fontSize: 16,
        color:"#fff",
        fontWeight: "200",
        
    },
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
        flexDirection: 'column', 
       
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