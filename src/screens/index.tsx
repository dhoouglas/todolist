import { FlatList, Text, View } from "react-native";
import { styles } from "./styles";
import Header from "@components/Header";
import Task from "@components/Task";
import { useState } from "react";
import { TaskDTO } from "@dtos/TaskDTO";
import Empty from "@components/Empty";

const Home = () => {
  const [tasks, setTasks] = useState<TaskDTO[]>([
    // { id: "1", isCompleted: true, title: "Estudar JavaScript" },
    // { id: "2", isCompleted: false, title: "Estudar React" },
    // { id: "3", isCompleted: false, title: "Estudar React Native" },
  ]);

  return (
    <View style={styles.container}>
      <Header />

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
