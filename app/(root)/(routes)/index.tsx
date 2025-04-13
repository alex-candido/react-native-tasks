import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 bg-white">
      <View className="flex-row justify-between items-center p-5 pt-16 bg-white">
        <View>
          <Text className="text-gray-600 text-lg">Welcome back,</Text>
          <Text className="text-black text-2xl font-bold">Alex Cândido</Text>
        </View>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
          }}
          className="w-12 h-12 rounded-full"
        />
      </View>

      <ScrollView className="flex-1">
        <View className="p-5">
          <Text className="text-2xl font-semibold mb-4">Your Tasks</Text>
          <View className="flex-row justify-between">
            <View className="bg-gray-100 p-4 rounded-xl flex-1 mx-1">
              <Text className="text-3xl font-bold text-blue-600">12</Text>
              <Text className="text-sm text-gray-600 mt-1">In Progress</Text>
            </View>
            <View className="bg-gray-100 p-4 rounded-xl flex-1 mx-1">
              <Text className="text-3xl font-bold text-blue-600">5</Text>
              <Text className="text-sm text-gray-600 mt-1">Due Today</Text>
            </View>
            <View className="bg-gray-100 p-4 rounded-xl flex-1 mx-1">
              <Text className="text-3xl font-bold text-blue-600">8</Text>
              <Text className="text-sm text-gray-600 mt-1">Completed</Text>
            </View>
          </View>
        </View>

        <View className="p-5">
          <Text className="text-2xl font-semibold mb-4">Recent Projects</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            className="mr-5"
          >
            {[1, 2, 3].map((project) => (
              <TouchableOpacity
                key={project}
                className="bg-gray-100 p-5 rounded-xl ml-5 w-48"
              >
                <Text className="text-xl font-semibold mb-2">
                  Project {project}
                </Text>
                <Text className="text-sm text-gray-600">
                  8 tasks • 3 in progress
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}
