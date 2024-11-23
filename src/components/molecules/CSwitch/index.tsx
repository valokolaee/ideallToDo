import { memo, useState } from "react"
import { Switch } from "../../organisms/react-native-switch/lib"
import styleValues from "../../utils/enums/styleValues"


export default memo(() => {
    const [_value, set_value] = useState<boolean>(false)

    const _turn = () => { set_value(!_value) }


    return (<Switch
        value={_value}
        onValueChange={_turn}
        // disabled={false}
        // activeText={'On'}
        // inActiveText={'Off'}
        // circleSize={styleValues.p06}
        // barHeight={4}
        // circleBorderWidth={0}
        // backgroundActive={ColorSystem.Success}
        // backgroundInactive={ColorSystem.gray!(50)}
        // circleActiveColor={ColorSystem.Link}
        // circleInActiveColor={ColorSystem.Error}
        // renderInsideCircle={() => <CText text={'yes'} color={ColorSystem.White} />} // custom component to render inside the Switch circle (Text, Image, etc.)
        // changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
        // innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
        // outerCircleStyle={{ backgroundColor: 'white', width: "50%" }} // style for outer animated circle
        // renderActiveText={true}
        // // renderInActiveText={true}
        // switchLeftPx={-styleValues.p10} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
        // switchRightPx={-styleValues.p10} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
        switchWidthMultiplier={styleValues.p05} // multiplied by the `circleSize` prop to calculate total width of the Switch
    // switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
    />)
})