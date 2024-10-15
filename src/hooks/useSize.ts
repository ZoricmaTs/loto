import useResizeObserver from '@react-hook/resize-observer';
import React from 'react';

export const useSize = <T extends Element>(target: React.RefObject<T>) => {
  const [size, setSize] = React.useState<DOMRect>();

  useResizeObserver(target, (entry) => setSize(entry.contentRect));
  return size;
};
