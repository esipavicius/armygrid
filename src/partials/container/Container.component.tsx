import * as React from 'react';
import { FC } from 'react';

type Props = {
    children: React.ReactNode;
    style?: React.CSSProperties;
    customClassName?: string;
};

export const Container: FC<Props> = ({ children, style, customClassName = null }) => {
    return (
        <div className={ customClassName ? customClassName + ' container ' : ' container ' } style={style}>{children}</div>
    );
};