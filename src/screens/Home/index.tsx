import { Alert, FlatList, Text, TextInput, TouchableOpacity, View } from "react-native";
import { PlusCircle } from 'phosphor-react-native';
import uuid from 'react-native-uuid'

import { styles } from "./styles";

import Logo from "../../../assets/logoImage.svg"
import { TasksCouter } from "../../components/TasksCounter";
import { useState } from "react";
import { Task } from "../../components/Task";

export interface Tasks {
    id: string;
    title: string;
    isChecked: boolean;
}

export function Home() {
    const [tasks, setTasks] = useState<Tasks[]>([]);
    const [newTaskText, setNewTaskText] = useState('');

    const totalOfTasks = tasks.length;
    const doneTasks = tasks.filter(task => task.isChecked === true).length;

    function handleCreateNewTask() {

        if(newTaskText === "") {
            return Alert.alert("Campo vazio", "Para adicionar uma nova tarefa preencha o campo com a descrição! ✍️")
        }
    
        setTasks([...tasks, {
          id: String(uuid.v4()),
          title: newTaskText,
          isChecked: false,
        }]);
    
        setNewTaskText('');
    }

    function deleteTask(idTaskToDelete: string) {

        Alert.alert("Remover 🗑️", "Deseja remover a tarefa da lista?", [
            {
                text: 'Sim',
                onPress: () => {
                    const tasksWithoutDeletedOne = tasks.filter(({id}) => {
                        return id !== idTaskToDelete;
                    });
                
                    setTasks(tasksWithoutDeletedOne);
                }
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
        
    }

    function checkTask(idTaskToCheck: string) {
        const taskIndex = tasks.findIndex((task) => {
            return task.id === idTaskToCheck;
        });

        const atualTasks = [...tasks]

        atualTasks[taskIndex].isChecked = !atualTasks[taskIndex].isChecked;

        setTasks(atualTasks);
    }

    return (
        <View style={styles.constainer}>
            <View style={styles.logoContainer}>
                <Logo width={110} height={32} />
            </View>
            <View style={styles.listConteiner}>
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        placeholder="Adicione uma nova tarefa"
                        placeholderTextColor="#808080"
                        value={newTaskText}
                        onChangeText={setNewTaskText}
                    />
                    <TouchableOpacity style={styles.button} onPress={handleCreateNewTask}>
                        <PlusCircle size={16} color="#ffffff" />
                    </TouchableOpacity>
                </View>
                <View style={styles.countContainer}>
                    <TasksCouter 
                        text="Criadas"
                        counterNumber={totalOfTasks}
                    />
                    <TasksCouter 
                        text="Concluídas"
                        counterNumber={doneTasks}
                        type="purple"
                    />
                </View>
                <FlatList 
                    style={styles.flatList}
                    data={tasks}
                    keyExtractor={item => item.id}
                    renderItem={({item}) => 
                        <Task 
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            isChecked={item.isChecked}
                            setIsChecked={checkTask}
                            deleteTask={deleteTask}
                        />
                    }
                />
            </View>
        </View>
    )
}