import { Link } from "expo-router";
import { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => {
    try {
      const response = await fetch("/api/auth/sign-in", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.error) {
        // Handle error
        return;
      }
    } catch (error) {
      // Handle error
    }
  };

  return (
    <View className="flex-1 bg-white">
      <View className="h-[300px] justify-end p-5">
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1611224923853-80b023f02d71",
          }}
          className="absolute top-0 left-0 right-0 h-[300px]"
        />
        <View className="absolute inset-0 bg-black/40" />
        <Text className="text-3xl font-bold text-white mb-2">Welcome Back</Text>
        <Text className="text-base text-white/80">
          Sign in to continue managing your tasks
        </Text>
      </View>

      <View className="p-5">
        <TextInput
          className="bg-gray-100 rounded-lg p-4 mb-4 text-base"
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          keyboardType="email-address"
        />
        <TextInput
          className="bg-gray-100 rounded-lg p-4 mb-4 text-base"
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <TouchableOpacity
          className="bg-blue-500 rounded-lg p-4 items-center mt-2"
          onPress={handleSignIn}
        >
          <Text className="text-white text-base font-semibold">Sign In</Text>
        </TouchableOpacity>

        <View className="flex-row justify-center mt-5">
          <Text className="text-gray-600">Don't have an account? </Text>
          <Link href="/auth/sign-up">
            <Text className="text-blue-500 font-semibold">Sign Up</Text>
          </Link>
        </View>
      </View>
    </View>
  );
}
