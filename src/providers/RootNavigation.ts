import * as React from 'react';

export const navigationRef: any = React.createRef();

const navigate = (name: string, params?: any) => {
  navigationRef.current?.navigate(name, params);
};

const goBack = () => {
  if (navigationRef?.current?.canGoBack()) {
    navigationRef.current?.goBack();
  }
};

const navigationReset = (name: string, params?: any) => {
  navigationRef.current?.reset({
    index: 0,
    routes: [{name, params}],
  });
};

export default {
  navigate,
  goBack,
  navigationReset,
};
