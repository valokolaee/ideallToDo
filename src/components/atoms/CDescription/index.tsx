import { StyleSheet, View } from "react-native"
import { TextInput } from "react-native-paper"
import { heightPercentageToDP } from "react-native-responsive-screen"
import ColorSystem from "../../../configs/color/ColorSystem"
import CTitleMinor from "../CTitleMinor"
import langService from "../../../translation/lang/lS"

export default ({ onChangeText, desc }: { onChangeText?: ((text: string) => void) | undefined; desc?: string }) => <View>
    <CTitleMinor txt={`${langService().Description} ${langService().Optional}:`} />
    <TextInput
        mode="outlined"
        onChangeText={onChangeText}
        style={[defStyle.txt]}
        placeholderTextColor={ColorSystem.Border}
        placeholder={langService().Massages.Start_typing_to_add_a_caption}
        textAlignVertical="top"
        numberOfLines={5}
        value={desc}


        multiline
    />
</View>





const defStyle = StyleSheet.create({
    main: {
    },
    photo: {},
    txt: {
        height: heightPercentageToDP(18),
        // padding: styleValues.p03,
        // color: ColorSystem.Black,
        // flexWrap: 'wrap',
        // borderRadius: styleValues.r10,
    }
})