import Link from 'next/link';

const lessons = [
  ['/server-demo', '01', 'Server Component', 'Серверное время и выполнение кода на сервере.'],
  ['/client-demo', '02', 'Client Component', 'Интерактивный счётчик с useState и onClick.'],
  ['/greet-demo', '03', 'Server Action', 'Вызов серверной функции из браузера.'],
  ['/about', '04', 'Статическая страница', 'Фиксированный маршрут /about.'],
  ['/blog/nextjs-vvedenie', '05', 'Динамический блог', 'Параметр slug и предварительная генерация страниц.'],
  ['/products/1', '06', 'Страница товара', 'Серверные данные и клиентская кнопка корзины.'],
];

export default function Home() {
  return <><p className="eyebrow">ПРАКТИЧЕСКАЯ РАБОТА / 01</p><h1>Один проект.<br /><span>Две стороны React.</span></h1>
    <p className="lead">Изучаем App Router: от структуры маршрутов до взаимодействия сервера и браузера.</p>
    <div className="grid">{lessons.map(([href, number, title, description]) => <Link className="card" key={href} href={href}><span className="number">{number} ↗</span><h2>{title}</h2><p>{description}</p></Link>)}</div>
    <aside><strong>Ещё маршруты для проверки</strong><p><Link href="/blog/react-osnovy">React: основы</Link> · <Link href="/blog/my-post">Произвольный slug</Link> · <Link href="/products/2">Мышь</Link> · <Link href="/products/999">Несуществующий товар</Link></p></aside>
  </>;
}
