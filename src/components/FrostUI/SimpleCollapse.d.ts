import { ElementType, FC } from 'react';
interface CollapseProps {
    open: boolean;
    children: any;
    classNames?: string;
    as?: ElementType;
}
declare const SimpleCollapse: FC<CollapseProps>;
export default SimpleCollapse;
