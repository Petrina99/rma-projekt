import { Text, View, StyleSheet, TextInput, Button, Pressable } from "react-native";

const Login = () => {

    return (
        <View className="flex-row justify-center w-full h-full flex-wrap bg-background">
            <View className="basis-full mt-[70px] flex-row justify-center">
                <Text className="text-white text-center text-[64px] font-msemibold">Sell</Text>
                <Text className="text-primary text-center text-[64px] font-msemibold">Spot</Text>
            </View>
            <View className="basis-full mt-[85px] flex-row justify-center">
                <Text className="text-white font-mbold text-[24px] text-center">Login to your account</Text>
            </View>
            <View className="basis-full mt-16 flex-row flex-wrap justify-center align-middle">
                <TextInput 
                    className="w-[300px] rounded-lg border-2 border-primary border-solid p-5 font-mregular text-[16px] text-white"
                    placeholder="Username"
                    placeholderTextColor="#A0A0A0"
                />
                <TextInput 
                    className="w-[300px] rounded-lg border-2 border-primary border-solid p-5 mt-3 font-mregular text-[16px] text-white"
                    placeholder="Password"
                    placeholderTextColor="#A0A0A0"
                />
                <View className="w-[300px] mt-3 flex-row justify-end">
                    <Pressable className="w-[150px] bg-primary p-4 rounded-lg">
                        <Text className="text-white font-mbold text-center text-[16px]">Login</Text>
                    </Pressable>
                </View>
            </View>
            <View className="mt-[50px] border-t-2 border-primary pt-6 w-[320px] flex-row justify-center flex-wrap">
                <Text className="text-white font-mbold text-[24px]">Don't have an account?</Text>
                <Text className="text-primary font-mbold text-[24px]">Create one</Text>
            </View>
        </View>
    )
}

export default Login