import { ReactNode } from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import DirectedView from "../../../translation/directedView";

interface model {
    children: ReactNode;

}
export default ({ children }: model) => <DirectedView style={defStyle}>{children}</DirectedView>
const defStyle: ViewStyle = StyleSheet.create({
    def: {

        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // borderWidth: 1,
        // alignContent: 'center',
    }
}).def