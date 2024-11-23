import React, { FC, memo, useRef } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { IBaseActivity } from '../utils/interfacesUI/IBaseActivity';
import CHeader from './CHeader';
import SideMenu from './SideMenu';
import LangChanger from '../../translation/langChanger';

const BaseActivity: FC<IBaseActivity> = React.forwardRef(({ children, title, style, bodyColorSet: backgroundColor, route }, ref) => {
  const refSideMenu = useRef<any>()
  const _openUpSideMenu = () => { refSideMenu.current._openUp() }

  // const { Route: { setRoute } } = useGlobalContext()

  // useFocusEffect(() => { setRoute(JsonHelper.getObjectValueByString(route, 'name')) })

  return (
    <SafeAreaView style={[defStyl.body, style, { backgroundColor: backgroundColor?.backGround }]}>
      <SideMenu ref={refSideMenu}
        drawerContent={<LangChanger whitLabel />}>
        <CHeader title={title} fireSideMenu={_openUpSideMenu} />
        {children}
      </SideMenu>
    </SafeAreaView>
  );
},
);
export default memo(BaseActivity);

const defStyl = StyleSheet.create({ body: { flex: 1, }, });
