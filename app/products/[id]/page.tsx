import { notFound } from 'next/navigation';
import AddToCartButton from './add-to-cart-button';

// Имитация базы данных: функция вызывается только из Server Component.
async function getProduct(id: string) {
  const products = new Map([
    ['1', { name: 'Ноутбук', price: 75000 }],
    ['2', { name: 'Мышь', price: 1500 }],
  ]);
  return products.get(id) ?? null;
}

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await getProduct(id);
  if (!product) notFound();
  return <section className="panel"><p className="eyebrow">06 / SERVER + CLIENT</p><h1>{product.name}</h1><p className="price">Цена: {product.price} ₽</p><p>Данные товара получены на сервере. За интерактивность отвечает отдельный клиентский компонент.</p><AddToCartButton key={id} productName={product.name} /></section>;
}
