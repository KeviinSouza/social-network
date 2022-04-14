import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
    label: {
        fontSize: 18,
        fontFamily: 'Open Sans',
        textAlign: "left",
        marginLeft: 15
    },
    input: {
        width: Dimensions.get('screen').width - 40,
        padding: 0.9,
        borderWidth: 1.8,
        borderRadius: 5,
        margin: 10,
        backgroundColor: '#7D7D78',
        borderColor: '#1F1F1E',
    }
});