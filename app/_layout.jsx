import { SplashScreen, Stack } from "expo-router"
import { useFonts } from "expo-font"
import { useEffect } from "react"

SplashScreen.preventAutoHideAsync();

const RootLayout = () => {

    const [fontsLoaded, error] = useFonts({
        "Montserrat-Thin": require("../assets/fonts/Montserrat-Thin.ttf"),
        "Montserrat-ExtraLight": require("../assets/fonts/Montserrat-ExtraLight.ttf"),
        "Montserrat-Light": require("../assets/fonts/Montserrat-Light.ttf"),
        "Montserrat-Regular": require("../assets/fonts/Montserrat-Regular.ttf"),
        "Montserrat-Medium": require("../assets/fonts/Montserrat-Medium.ttf"),
        "Montserrat-SemiBold": require("../assets/fonts/Montserrat-SemiBold.ttf"),
        "Montserrat-Bold": require("../assets/fonts/Montserrat-Bold.ttf"),
        "Montserrat-ExtraBold": require("../assets/fonts/Montserrat-ExtraBold.ttf"),
        "Montserrat-Black": require("../assets/fonts/Montserrat-Black.ttf")
    })

    useEffect(() => {
        if (error) throw Error;

        if (fontsLoaded) SplashScreen.hideAsync();
    }, [fontsLoaded, error])

    if (!fontsLoaded && !error) return null;

    return (
        <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
        </Stack>
    )
}

export default RootLayout