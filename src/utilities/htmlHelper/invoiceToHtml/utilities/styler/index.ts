import JsonHelper from "../../../utilities/JsonHelper";
import mrvTxtTest from "../../../utilities/mrvTxtTest";
import percenter from "../percenter";
import borderer from "./borderer";
import bordererSider from "./bordererSider";
import IStyler from "./interface/Istyler";
import undefiner from "./undefiner";

export default (props: IStyler) => {

    // const width = props?.width
    // const display = props?.display
    // const border = props?.border
    // const font_size = props?.font_size



    // const borderSideBot = props?.borderSideBot
    // const borderSideLeft = props?.borderSideLeft
    // const borderSideRight = props?.borderSideRight
    // const borderSideTop = props?.borderSideTop





    const width = props?.width
    const height = props?.height
    const display = props?.display
    const font_size = props?.font_size


    const right = props?.right
    const left = props?.left
    const background_color = props?.background_color

    const padding = props?.padding
    const padding_top = props?.padding_top
    const padding_right = props?.padding_right
    const padding_bottom = props?.padding_bottom
    const padding_left = props?.padding_left
    const margin = props?.margin
    const margin_top = props?.margin_top
    const margin_right = props?.margin_right
    const margin_bottom = props?.margin_bottom
    const margin_left = props?.margin_left
    const max_width = props?.max_width
    const min_height = props?.min_height
    const text_align = props?.text_align
    const align_items = props?.align_items
    const align_self = props?.align_self

    const border = props?.border
    const borderSideTop = props?.borderSideTop
    const borderSideRight = props?.borderSideRight
    const borderSideBot = props?.borderSideBot
    const borderSideLeft = props?.borderSideLeft



    const stl = `
            style="
${undefiner(Object.keys({ width })[0], percenter(width!))}
${undefiner(Object.keys({ height })[0], percenter(height!))}
${undefiner(Object.keys({ background_color })[0], background_color)}

${undefiner(Object.keys({ font_size })[0], percenter(font_size!))}
${undefiner(Object.keys({ display })[0], (display!))}







${undefiner(Object.keys({ right })[0], percenter((right!)))}
${undefiner(Object.keys({ left })[0], percenter((left!)))}


${undefiner(Object.keys({ padding })[0], percenter((padding!)))}
${undefiner(Object.keys({ padding_bottom })[0], percenter((padding_bottom!)))}
${undefiner(Object.keys({ padding_left })[0], percenter((padding_left!)))}
${undefiner(Object.keys({ padding_right })[0], percenter((padding_right!)))}
${undefiner(Object.keys({ padding_top })[0], percenter((padding_top!)))}
${undefiner(Object.keys({ margin })[0], percenter((margin!)))}
${undefiner(Object.keys({ margin_bottom })[0], percenter((margin_bottom!)))}
${undefiner(Object.keys({ margin_left })[0], percenter((margin_left!)))}
${undefiner(Object.keys({ margin_right })[0], percenter((margin_right!)))}
${undefiner(Object.keys({ margin_top })[0], percenter((margin_top!)))}
${undefiner(Object.keys({ max_width })[0], percenter((max_width!)))}
${undefiner(Object.keys({ min_height })[0], percenter((min_height!)))}
${undefiner(Object.keys({ text_align })[0], (text_align!))}
${undefiner(Object.keys({ align_items })[0], (align_items!))}
${undefiner(Object.keys({ align_self })[0], (align_self!))}









${borderer(border!)}
${bordererSider(borderSideBot!, 'bottom')}
${bordererSider(borderSideLeft!, 'left')}
${bordererSider(borderSideRight!, 'right')}
${bordererSider(borderSideTop!, 'top')}
            
            
            
 "`


    return stl
}

