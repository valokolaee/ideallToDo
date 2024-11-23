import { RealmProvider } from '@realm/react';
import React from 'react';
import schemas from './models';
import { isUnderDevelop } from '../../utilities/mrvLogs';





export const AppWrapperNonSync = ({ children }: { children: JSX.Element }) =>

  // TODO

  <RealmProvider
    closeOnUnmount={false}
    schema={schemas}
    schemaVersion={1}
    deleteRealmIfMigrationNeeded={isUnderDevelop}
  // path='./root'
  >
    {children}
  </RealmProvider>



