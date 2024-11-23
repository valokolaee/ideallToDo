import { memo, useRef } from "react";
import { TextInput } from "react-native-paper";
import Filter from ".";
import DirectedView from "../../../translation/directedView";
import styler from "../../../utilities/styler";
import CGap from "../../atoms/CGap";
import CIconButton from "../../molecules/CIconButton";
import { defaultMargin, defaultPadding } from "../../utils/enums/styleValues";
import Xml from "../../utils/svgs/Xml";
import SideMenu from "../SideMenu";
import { IFilter } from "./IFilter";

export default memo((iFilter: IFilter) => {
    const refSideMenu = useRef<any>()

    const { apply, children, reset, dataModel, search } = iFilter

    const _openUpSideMenu = () => { refSideMenu.current._openUp() }
    const _search = (txt: string) => {
        search!(txt)
    }
    return (
        <SideMenu
            ref={refSideMenu}
            drawerContent={<Filter apply={apply} reset={reset} dataModel={dataModel} />}
            donNotCloseOnAnyClick
        >
            <DirectedView style={styler({ marginTop: defaultMargin, marginBottom: defaultPadding * 2 })}>
                <CIconButton iIconSvg={{ icon: { name: Xml.filter } }} onPress={_openUpSideMenu} />
                <CGap />
                <TextInput mode="outlined" style={styler({ flex: 1 })} onChangeText={_search} />
            </DirectedView>
            {children}
        </SideMenu>)
})



