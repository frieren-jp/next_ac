export async function generateStaticParams() {
  return [{ slug: 'nextjs-vvedenie' }, { slug: 'react-osnovy' }];
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <article className="panel"><p className="eyebrow">05 / ДИНАМИЧЕСКИЙ МАРШРУТ</p><h1>Статья: {slug}</h1><p>Параметр slug получен из URL на сервере через await params.</p><p>nextjs-vvedenie и react-osnovy генерируются при сборке. Другие значения обрабатываются по запросу.</p></article>;
}
