'use client';

import { useState } from 'react';
import { greet } from '../actions';

export default function GreetDemo() {
  const [name, setName] = useState('Студент');
  const [message, setMessage] = useState('');
  const [pending, setPending] = useState(false);
  async function sayHello() {
    setPending(true);
    setMessage('');
    try { setMessage(await greet(name)); }
    catch { setMessage('Не удалось получить ответ. Проверьте имя и попробуйте ещё раз.'); }
    finally { setPending(false); }
  }
  return <section className="panel"><p className="eyebrow">03 / USE SERVER</p><h1>Приветствие с сервера</h1><p>Клиент отправляет имя, сервер возвращает приветствие и своё время.</p>
    <form onSubmit={event => { event.preventDefault(); void sayHello(); }}><label htmlFor="name">Ваше имя</label><input id="name" value={name} onChange={event => setName(event.target.value)} required maxLength={80} />
    <button disabled={pending || !name.trim()} type="submit">{pending ? 'Отправляем…' : 'Поздороваться'}</button></form><p role="status" aria-live="polite">{message}</p>
  </section>;
}
