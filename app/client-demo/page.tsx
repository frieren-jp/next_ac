'use client';

import { useEffect, useState } from 'react';

export default function ClientDemo() {
  const [count, setCount] = useState(0);
  useEffect(() => { console.log('ClientDemo: это сообщение появится в консоли браузера'); }, []);
  return <section className="panel"><p className="eyebrow">02 / CLIENT COMPONENT</p><h1>Client Component</h1><p>Состояние и обработчик клика работают в браузере.</p><button onClick={() => setCount(value => value + 1)}>Кликов: {count}</button><p role="status">Текущее значение: {count}</p></section>;
}
