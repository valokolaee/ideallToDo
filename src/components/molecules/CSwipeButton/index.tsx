import React, { useState } from 'react';
import SwipeButton from 'rn-swipe-button';
import ColorSystem from '../../../configs/color/ColorSystem';
import styleValues from '../../utils/enums/styleValues';
import CheckoutButton, { ICSwipeButtonText, _reversText } from './CheckoutButton';

export default ({ buttonText, onChange }: ICSwipeButton) => {
  const [_done, set_done] = useState<boolean>(false)


  return (
    <SwipeButton
      // containerStyles={{ alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}
      // // thumbIconStyles={{ borderRadius: undefined }}
      height={30}
      onSwipeFail={() => set_done!(false)}
      onSwipeStart={() => { }}
      onSwipeSuccess={() => set_done!(true)}
      railBackgroundColor={ColorSystem.drivingStopColors?.body?.backGround!}
      thumbIconBackgroundColor={ColorSystem.drivingColors?.header?.backGround}
      thumbIconComponent={() => <CheckoutButton {...buttonText} state={!_done} />}
      railFillBackgroundColor='transparent'
      railBorderColor='transparent'
      thumbIconBorderColor='transparent'
      railFillBorderColor='transparent'
      thumbIconWidth={150}
      title={_reversText({ ...buttonText, state: _done })}
      titleStyles={{ alignSelf: !_done ? 'flex-end' : 'flex-start', paddingHorizontal: styleValues.p10 }}


    />
  );
};
export interface ICSwipeButton {
  buttonText: ICSwipeButtonText;
  onChange?: (value: boolean) => void
}
