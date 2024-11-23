import { memo } from "react";
import { StyleSheet, View } from "react-native";
import { IHeader } from "./interfaces/IHeader";



export default memo(({ }: IHeader) => {
    return (
        <View style={defStyl.main}>
        </View>)
})
const defStyl = StyleSheet.create({
    main: {
        flexDirection: 'row'
    },
    header: {



    },

});
