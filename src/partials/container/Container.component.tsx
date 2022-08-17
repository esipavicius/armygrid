import * as React from 'react';
import { FC } from 'react';

type Props = {
    children: React.ReactNode;
    style?: React.CSSProperties;
};

export const Container: FC<Props> = ({ children, style }) => {
    return (
        <div className="container" style={style}>{children}</div>
    );
};