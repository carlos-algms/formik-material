import type { ReactNode } from 'react';

export default interface PropsBase<ChildrenProps = any> {
  [prop: string]: any;
  children?: ((props?: ChildrenProps) => ReactNode) | ReactNode;
  className?: string;
}
