import { StyleSheet, View } from 'react-native';
import styleValues, { defaultMargin } from '../../utils/enums/styleValues';
import Xml from '../../utils/svgs/Xml';
import styler from '../../../utilities/styler';
import Container from './Container';
import { memo } from 'react';
import CButton from '../../molecules/CButton';
import CSeprator from '../../atoms/CSeprator';
import CGap from '../../atoms/CGap';
import DirectedView from '../../../translation/directedView';

export interface IDoubleButtons {
  color?: string
  left?: IDoubleButtonsItem
  middle?: IDoubleButtonsItem
  right?: IDoubleButtonsItem
}

export interface IDoubleButtonsItem {
  func?: () => void;
  isDisabled?: boolean;
  label?: string
  icon?: ((color?: string | undefined) => string);
  position?: 'start' | 'end'
  textColor?: string;

}

export default memo(({ color, left, middle, right }: IDoubleButtons) => {

  return (
    <DirectedView style={[defStyle.main]} >
      <Container>
        {left && <CButton
          // onPress={left?.func}
          {...{
            onPress: left?.func,
            iText: { text: left?.label },
            style: [defStyle.inCommon, defStyle.left,],
            iIconSvg: {
              icon: { name: left?.icon!, size: 15 },
              position: left?.position || 'start'
            },
            textColor: left?.textColor

          }}
        />}
      </Container>
      {middle &&
        <>
          <Container>
            <CButton


              {...{
                disabled: middle?.isDisabled,
                onPress: middle?.func,
                buttonColor: color,
                iText: { text: middle?.label },
                mode: 'outlined',
                style: [defStyle.inCommon, defStyle.middle,],
                iIconSvg: {
                  icon: { name: middle?.icon!, size: 15 },
                  position: middle?.position || 'end'
                },
                textColor: middle?.textColor,
              }}
            />

          </Container>
        </>
      }
      <Container>
        <CButton


          {...{

            disabled: right?.isDisabled,
            onPress: right?.func,
            buttonColor: color,
            iText: { text: right?.label },
            mode: 'contained',
            style: [defStyle.inCommon, defStyle.right,],
            iIconSvg: {
              icon: { name: right?.icon!, size: 15 },
              position: right?.position || 'end'
            },
            textColor: right?.textColor,
          }}
        />
      </Container>

    </DirectedView>
  );
});
const defStyle = StyleSheet.create({
  main: {
    // width: styleValues.centeredItemsWidth,
    // alignSelf: 'center',
    // borderWidth: 1,


  },
  inCommon: {
    // minWidth: styleValues.doubleItemsWidth,
    flex: 1
  },
  right: {
    // width: '100%'
    // borderWidth: 1,
    // flex: 1

  },
  middle: { marginHorizontal: defaultMargin },
  left: {},

});
