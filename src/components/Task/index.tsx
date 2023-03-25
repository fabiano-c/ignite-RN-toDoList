import { Trash } from "phosphor-react-native";
import { Text, TouchableOpacity, View } from "react-native";
import { Radio } from "../Radio";

import { styles } from "./styles";

interface TaskProps {
    id: string;
    title: string;
    isChecked: boolean;
    setIsChecked: (id: string) => void;
    deleteTask: (id: string) => void;
}

export function Task ({id, title, isChecked, setIsChecked, deleteTask}: TaskProps){
    return(
        <View style={styles.container}>
            <Radio id={id} isChecked={isChecked} setIsChecked={setIsChecked}/>
            <Text style={[
                styles.title,
                isChecked ? styles.crossedOutTitle : styles.normalTitle
            ]}>
                {title}
            </Text>
            <TouchableOpacity style={styles.deleteTaskButton} onPress={() => deleteTask(id)}>
                <Trash size={20} color="#808080" />
            </TouchableOpacity>
        </View>
    )
}