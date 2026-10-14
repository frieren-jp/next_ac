import Link from 'next/link';
export default function ProductNotFound() {
  return <section className="panel"><p className="eyebrow">404</p><h1>Товар не найден</h1><p>В учебном каталоге доступны товары с ID 1 и 2.</p><Link href="/products/1">Открыть ноутбук →</Link></section>;
}
