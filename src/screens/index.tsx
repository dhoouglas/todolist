import { Alert, FlatList, Text, TextInput, View } from "react-native";
import { styles } from "./styles";
import Header from "@components/Header";
import Task from "@components/Task";
import { useRef, useState } from "react";
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
  const newTaskInputRef = useRef<TextInput>(null);

  function handleTaskAdd() {
    if (newTask !== "" && newTask.length >= 5) {
      setTasks((tasks) => [
        ...tasks,
        { id: uuid(), isCompleted: false, title: newTask.trim() },
      ]);

      setNewTask("");

      newTaskInputRef.current?.blur;
    }
  }

  function handleTaskDone(id: string) {
    setTasks((task) =>
      task.map((task) => {
        task.id === id ? (task.isCompleted = !task.isCompleted) : null;
        return task;
      })
    );
  }

  function handleTaskDeleted(id: string) {
    Alert.alert("Excluir tarefa", "Deseja excluir essa tarefa?", [
      {
        text: "sim",
        style: "default",
        onPress: () =>
          setTasks((task) => tasks.filter((task) => task.id !== id)),
      },

      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  const totalTasksCreated = tasks.length;
  const totalTaskCompleted = tasks.filter(
    ({ isCompleted }) => isCompleted
  ).length;

  return (
    <View style={styles.container}>
      <Header
        inputRef={newTaskInputRef}
        task={newTask}
        onChangeText={setNewTask}
        onPress={handleTaskAdd}
      />

      <View style={styles.tasksContainer}>
        <View style={styles.info}>
          <View style={styles.row}>
            <Text style={styles.tasksCreated}>Criadas</Text>
            <View style={styles.counterContainer}>
              <Text style={styles.counterText}>{totalTasksCreated}</Text>
            </View>
          </View>

          <View style={styles.row}>
            <Text style={styles.tasksDone}>Concluídas</Text>
            <View style={styles.counterContainer}>
              <Text style={styles.counterText}>{totalTaskCompleted}</Text>
            </View>
          </View>
        </View>

        <FlatList
          data={tasks}
          keyExtractor={(tasks) => tasks.id}
          renderItem={({ item }) => (
            <Task
              key={item.id}
              onTaskDone={() => handleTaskDone(item.id)}
              onTaskDeleted={() => handleTaskDeleted(item.id)}
              {...item}
            />
          )}
          ListEmptyComponent={<Empty />}
        />
      </View>
    </View>
  );
};

export default Home;
