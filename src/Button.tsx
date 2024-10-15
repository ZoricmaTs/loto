import {useRef} from 'react';
import {useSize} from './hooks/useSize';

export default function Button(props: {onClick: () => void}) {
  const refButton = useRef<HTMLButtonElement>(null);
  const size = useSize(refButton);
  const {width} = size || {width: 0, height: 0};
  const height = Math.trunc(width / 10);

  return <button onClick={props.onClick} style={{width: '70%', height, fontSize: Math.trunc(height/1.5), marginTop: height / 2}} ref={refButton}>{'Обновить карту'}</button>
}