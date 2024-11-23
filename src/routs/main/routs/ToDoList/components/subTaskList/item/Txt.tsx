import { memo } from "react";
import { CText } from "../../../../../../../components/atoms/Ctext";
import { EnumFontSize } from "../../../../../../../components/utils/enums/EnumFontSize";
import { defaultMargin } from "../../../../../../../components/utils/enums/styleValues";
import styler from "../../../../../../../utilities/styler";

export default memo(({ text, bold }: { text?: string, bold?: boolean }) => <CText text={text} bold={bold} holderStyle={bold ? styler({ flex: 1, marginBottom: defaultMargin }) : {}} fontSize={EnumFontSize.h6} />)


