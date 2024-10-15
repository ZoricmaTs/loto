import {useRef} from 'react';
import {useSize} from './hooks/useSize';

export function Card(props: {items: (number | null)[][]}) {
  const refCard = useRef<HTMLDivElement>(null);
  const size = useSize(refCard);
  const {width} = size || {width: 0, height: 0};
  const height = Math.trunc(width/9);

  return <div style={{width: '100%', border: '3px solid black', borderRadius: 3, display: 'flex', flexDirection: 'column'}} ref={refCard}>
    {props.items.map((list: (number | null)[]) => {
      return <div style={{width: '100%', display: 'flex', flexDirection: 'row'}}>
        {list.map((item: number | null) => <div style={{width: '100%', border: '1px solid black', height, fontSize: Math.trunc(height/ 1.5)}}>{item}</div>)}
      </div>
    })}
  </div>
}