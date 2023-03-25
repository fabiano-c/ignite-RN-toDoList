import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    constainer: {
        flex: 1,
        backgroundColor: "#1A1A1A",
        alignItems: "center",
        
    },

    logoContainer:{
        backgroundColor: "#0D0D0D",
        paddingVertical: 70,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: 173,
    },
    listConteiner: {
        flex: 1,
        alignItems: "center",
        width: "100%",
    },

    form: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        marginTop: -30,
        paddingHorizontal: 24,
    },

    input: {
        flex: 1,
        padding: 16,
        color: "#F2F2F2",
        backgroundColor: "#262626",
        borderWidth: 1,
        borderColor: "#0D0D0D",
        borderRadius: 6,
        fontSize: 16,
        marginRight: 8
    },

    buttonText: {
      color: "#fff",
      fontSize: 24,
    },

    button: {
      width: 52,
      height: 52,
      borderRadius: 5,
      backgroundColor: "#1E6F9F",
      alignItems: "center",
      justifyContent: "center",
    },

    countContainer: {
        width: "85%",
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#808080",
        marginTop: 20,
    },

    flatList: {
        flex: 1,
        width: "85%",
    }

})