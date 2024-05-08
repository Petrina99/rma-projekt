import { Text, View, StyleSheet, TextInput, Button, Pressable } from "react-native";

export default  Login = () => {

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Text style={styles.logoText}>SellSpot</Text>
            </View>
            <View style={styles.loginDiv}>
                <Text style={styles.loginText}>Login to your account</Text>
            </View>
            <View style={styles.inputDiv}>
                <TextInput 
                    style={styles.input}
                    placeholder="Username"
                    placeholderTextColor="white"
                />
                <TextInput 
                    style={styles.inputPass}
                    placeholder="Password"
                    placeholderTextColor="white"
                />
                <View style={styles.inputBtn}>
                    <Pressable
                        style={styles.btn} 
                    >
                        <Text style={styles.btnText}>Login</Text>
                    </Pressable>
                </View>
            </View>
            <View style={styles.register}>
                <Text style={styles.registerTextWhite}>Don't have an account?</Text>
                <Text style={styles.registerTextOrange}>Create one</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        width: "100%",
        backgroundColor: "#1A1A1A"
    },
    logo: {
        flexBasis: "100%",
        marginTop: 80,
        display: "flex",
        justifyContent: "center"
    },
    logoText: {
        color: "#EC4E20",
        fontSize: 64,
        textAlign: "center"
    },
    loginDiv: {
        flexBasis: "100%",
        display: "flex",
        marginTop: 100
    },
    loginText: {
        color: "white",
        fontWeight: "bold",
        fontSize: 24,
        textAlign: "center"
    },
    inputDiv: {
        flexBasis: "100%",
        marginTop: 60,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    input: {
        width: 294,
        borderColor: "#EC4E20",
        borderWidth: 1,
        padding: 20,
        color: "white",
        borderRadius: 10
    },
    inputPass: {
        width: 294,
        borderColor: "#EC4E20",
        borderWidth: 1,
        padding: 20,
        color: "white",
        borderRadius: 10,
        marginTop: 15
    },
    inputBtn: {
        width: 294,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    btn: {
        backgroundColor: "#EC4E20",
        width: 100,
        padding: 10,
        borderRadius: 10
    },
    btnText: {
        color: "white",
        textAlign: "center"
    },
    register: {
        marginTop: 70,
        display: "flex"
    },
    registerTextWhite: {
        color: "white",
        fontWeight: "bold",
        fontSize: 24
    },
    registerTextOrange: {
        color: "#EC4E20",
        fontWeight: "bold",
        fontSize: 24
    }
})