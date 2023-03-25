import { useState } from "react";
import { TouchableOpacity, View} from "react-native";
import { Check } from "phosphor-react-native";

import { styles } from "./styles";

interface RadioProps {
    id: string;
    isChecked: boolean;
    setIsChecked: (id: string) => void;
}

export function Radio({id,isChecked, setIsChecked}: RadioProps){
    const [isRadioChecked, setIsRadioChecked] = useState(isChecked);

    function handleRadioPress(){
        setIsRadioChecked(!isRadioChecked);
        setIsChecked(id);
    }

    return (
        <TouchableOpacity 
            style={[
                styles.radioContainer,
                isRadioChecked ? styles.radioContainerCheckedTrue : styles.radioContainerCheckedFalse
            ]}
            onPress={handleRadioPress}
        >
            <Check style={ !isRadioChecked && styles.invisible } size={14} color="#fff" weight="bold" />
        </TouchableOpacity>
    )
}