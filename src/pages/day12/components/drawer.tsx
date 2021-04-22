import React, { CSSProperties, FC } from "react";
import RcDrawer from "rc-drawer";
import classnames from "classnames";

export interface BaseProps {
  style?: CSSProperties;
  className?: any;
  id?: string;
}

export interface DrawerProps extends BaseProps {
  width: string | number;
  height: string | number;
  children: React.ReactNode;
  [name:string]:any
}

export const Drawer: FC<DrawerProps> = ({
  children,
  ...restProps
}) => {
  return (
    <RcDrawer {...restProps}>
      {children}
    </RcDrawer>
  );
};
