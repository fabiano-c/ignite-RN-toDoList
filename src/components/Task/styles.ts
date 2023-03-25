import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        height: 50,
        backgroundColor: "#262626",
        marginTop: 8,
        borderWidth: 1,
        borderColor: "#333333",
        borderRadius: 8,
    },

    title: {
        flex: 1,
        fontSize: 14,
    },

    normalTitle: {
        textDecorationLine: "none",
        color: "#f2f2f2",
    },

    crossedOutTitle: {
        textDecorationLine: "line-through",
        color: "#808080",
    },

    deleteTaskButton: {
        width: 32,
        height: 32,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 4,
        marginHorizontal:8
    }
})