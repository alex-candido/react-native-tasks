import {
  Bell,
  CircleHelp as HelpCircle,
  LogOut,
  Settings,
  Shield,
} from "lucide-react-native";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function ProfileScreen() {
  const MenuItem = ({ icon: Icon, title, onPress }: any) => (
    <TouchableOpacity
      className="flex-row items-center py-3 border-b border-gray-200"
      onPress={onPress}
    >
      <View className="w-10 h-10 rounded-full bg-gray-100 justify-center items-center mr-3">
        <Icon size={20} color="#666" />
      </View>
      <Text className="text-lg text-gray-800">{title}</Text>
    </TouchableOpacity>
  );

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="relative h-52">
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1579546929518-9e396f3cc809",
          }}
          className="absolute top-0 left-0 right-0 h-full"
        />
        <View className="absolute top-0 left-0 right-0 h-full bg-black opacity-30" />
        <View className="absolute bottom-5 left-0 right-0 flex items-center justify-center">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
            }}
            className="w-24 h-24 rounded-full border-4 border-white"
          />
          <Text className="text-2xl font-bold text-white mt-3">
            Alex Cândido
          </Text>
          <Text className="text-lg text-white opacity-80">
            alex.candido@mail.com
          </Text>
        </View>
      </View>

      <View className="flex-row justify-around p-5 bg-white rounded-xl mt-[-20px] mx-5 shadow-lg">
        <View className="items-center">
          <Text className="text-2xl font-bold text-blue-600">12</Text>
          <Text className="text-xs text-gray-600 mt-1">Projects</Text>
        </View>
        <View className="w-px h-full bg-gray-200" />
        <View className="items-center">
          <Text className="text-2xl font-bold text-blue-600">48</Text>
          <Text className="text-xs text-gray-600 mt-1">Tasks</Text>
        </View>
        <View className="w-px h-full bg-gray-200" />
        <View className="items-center">
          <Text className="text-2xl font-bold text-blue-600">86%</Text>
          <Text className="text-xs text-gray-600 mt-1">Completion</Text>
        </View>
      </View>

      <View className="p-5">
        <Text className="text-xl font-semibold mb-4">Settings</Text>
        <MenuItem icon={Settings} title="Account Settings" />
        <MenuItem icon={Bell} title="Notifications" />
        <MenuItem icon={Shield} title="Privacy & Security" />
        <MenuItem icon={HelpCircle} title="Help & Support" />
        <MenuItem icon={LogOut} title="Logout" />
      </View>
    </ScrollView>
  );
}
