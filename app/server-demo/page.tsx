// Без use client: этот компонент выполняется на сервере.
export const dynamic = 'force-dynamic';

export default async function ServerDemo() {
  const time = new Date().toISOString();
  console.log('ServerDemo: это сообщение выполняется на сервере', time);
  return <section className="panel"><p className="eyebrow">01 / SERVER COMPONENT</p><h1>Server Component</h1><p>Время на сервере:</p><time className="value" dateTime={time}>{time}</time><p>Обновите страницу, чтобы получить новое время. force-dynamic включает рендеринг на каждый запрос.</p></section>;
}
