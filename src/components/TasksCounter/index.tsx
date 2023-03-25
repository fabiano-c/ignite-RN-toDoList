import { Text, View } from "react-native";
import { styles } from "./styles";

interface TaskCoaunterProps {
    text: string;
    counterNumber: number;
    type?: 'blue' | 'purple';
}

export function TasksCouter({text, counterNumber = 0, type = "blue"}: TaskCoaunterProps) {
    return (
        <View style={styles.container}>
            <Text style={[styles.tagText, type !== "blue" ? styles.purple : styles.blue]}>{text}</Text>
            <Text style={styles.counterText}>{counterNumber}</Text>
        </View>
    )
}