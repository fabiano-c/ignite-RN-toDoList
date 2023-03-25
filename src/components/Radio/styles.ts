import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    radioContainer: {
        justifyContent: "center",
        alignItems: "center",
        height: 24,
        width: 24,
        borderWidth: 2,
        borderRadius: 999,
        marginHorizontal: 8,
    },

    radioContainerCheckedFalse: {
        borderColor: "#4EA8DE",
        backgroundColor: "transparent"
    },

    
    radioContainerCheckedTrue: {
        borderColor: "#5E60CE",
        backgroundColor: "#5E60CE"
    },

    invisible: {
        display: "none",
    }
})