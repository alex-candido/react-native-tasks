import { MoveVertical as MoreVertical, Plus } from "lucide-react-native";
import { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

type TaskStatus = "todo" | "in-progress" | "done";

interface Task {
  id: string;
  title: string;
  status: TaskStatus;
}

const INITIAL_TASKS: Task[] = [
  { id: "1", title: "Design new landing page", status: "todo" },
  { id: "2", title: "Implement authentication", status: "in-progress" },
  { id: "3", title: "Write documentation", status: "done" },
];

export default function TasksScreen() {
  const [tasks, setTasks] = useState<Task[]>(INITIAL_TASKS);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim()) {
      const task: Task = {
        id: Date.now().toString(),
        title: newTask.trim(),
        status: "todo",
      };
      setTasks([...tasks, task]);
      setNewTask("");
    }
  };

  const moveTask = (taskId: string, newStatus: TaskStatus) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task,
      ),
    );
  };

  const renderColumn = (status: TaskStatus, title: string) => {
    const columnTasks = tasks.filter((task) => task.status === status);

    return (
      <View className="w-72 bg-white rounded-xl mr-4 p-4 shadow-lg">
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-lg font-semibold">{title}</Text>
          <Text className="bg-gray-200 px-2 py-1 rounded-full text-sm text-gray-600">
            {columnTasks.length}
          </Text>
        </View>
        <ScrollView className="flex-1">
          {columnTasks.map((task) => (
            <View
              key={task.id}
              className="bg-white rounded-lg p-4 mb-3 border border-gray-200"
            >
              <Text className="text-sm mb-2">{task.title}</Text>
              <View className="flex-row justify-end items-center">
                {status !== "todo" && (
                  <TouchableOpacity
                    onPress={() =>
                      moveTask(
                        task.id,
                        status === "done" ? "in-progress" : "todo",
                      )
                    }
                    className="bg-gray-200 py-1 px-3 rounded-md mr-2"
                  >
                    <Text className="text-xs text-gray-700">←</Text>
                  </TouchableOpacity>
                )}
                {status !== "done" && (
                  <TouchableOpacity
                    onPress={() =>
                      moveTask(
                        task.id,
                        status === "todo" ? "in-progress" : "done",
                      )
                    }
                    className="bg-blue-600 py-1 px-3 rounded-md"
                  >
                    <Text className="text-xs text-white">→</Text>
                  </TouchableOpacity>
                )}
                <TouchableOpacity className="p-1">
                  <MoreVertical size={16} color="#666" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  };

  return (
    <View className="flex-1 bg-gray-100">
      <View className="p-5 pt-16 bg-white border-b border-gray-200">
        <Text className="text-2xl font-bold mb-4">Task Board</Text>
        <View className="flex-row gap-3">
          <TextInput
            className="flex-1 bg-gray-200 rounded-lg p-3 text-lg"
            value={newTask}
            onChangeText={setNewTask}
            placeholder="Add a new task..."
            onSubmitEditing={addTask}
          />
          <TouchableOpacity
            className="bg-blue-600 w-12 h-12 rounded-full justify-center items-center"
            onPress={addTask}
          >
            <Plus size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView horizontal className="flex-1 p-4">
        {renderColumn("todo", "To Do")}
        {renderColumn("in-progress", "In Progress")}
        {renderColumn("done", "Done")}
      </ScrollView>
    </View>
  );
}
