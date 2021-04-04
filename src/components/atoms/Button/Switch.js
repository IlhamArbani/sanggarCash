import React, {useState} from 'react'
import { StyleSheet, Switch, View } from 'react-native'
import { colors } from '../../../utils';

const SwitchBtn = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <View>
            <Switch trackColor={{ false: "#767577", true: colors.primary }}
        thumbColor={isEnabled ? colors.white : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}/>
        </View>
    )
}

export default SwitchBtn

const styles = StyleSheet.create({
    container:{
        flex: 1,
    alignItems: "center",
    justifyContent: "center"
    }
})
