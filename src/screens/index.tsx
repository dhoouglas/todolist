import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import Header from "@components/Header";
import Task from "@components/Task";
import { useState } from "react";
import { TaskDTO } from "@dtos/TaskDTO";
import Empty from "@components/Empty";
import { uuid } from "@utils/uuid";

const Home = () => {
  const [tasks, setTasks] = useState<TaskDTO[]>([
    // { id: "1", isCompleted: true, title: "Estudar JavaScript" },
    // { id: "2", isCompleted: false, title: "Estudar React" },
    // { id: "3", isCompleted: false, title: "Estudar React Native" },
  ]);

  const [newTask, setNewTask] = useState("");

  function handleAddTask() {
    if (newTask !== "" && newTask.length >= 5) {
      setTasks((tasks) => [
        ...tasks,
        { id: uuid(), isCompleted: false, title: newTask.trim() },
      ]);
    }
  }

  return (
    <View style={styles.container}>
      <Header
        task={newTask}
        onChangeText={setNewTask}
        onPress={handleAddTask}
      />

      <View style={styles.tasksContainer}>
        <View style={styles.info}>
          <View style={styles.row}>
            <Text style={styles.tasksCreated}>Criadas</Text>
            <View style={styles.counterContainer}>
              <Text style={styles.counterText}>0</Text>
            </View>
          </View>

          <View style={styles.row}>
            <Text style={styles.tasksDone}>Concluídas</Text>
            <View style={styles.counterContainer}>
              <Text style={styles.counterText}>0</Text>
            </View>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Task key={item.id} />}
          ListEmptyComponent={<Empty />}
        />
      </View>
    </View>
  );
};

export default Home;
