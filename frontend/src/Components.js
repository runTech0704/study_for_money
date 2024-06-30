import React from 'react';

import WalletComponent from './wallet/walletComponent';
import StudyLabelComponent from './study_label/study_label.component';
import UserComponent from './user/userComponent';

const Components = () => {
  return (
    <div name="components">
        <StudyLabelComponent />
        <UserComponent />
        <WalletComponent/>
    </div>
  );
};

export default Components;
