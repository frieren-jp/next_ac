'use client';

import { useState } from 'react';

export default function AddToCartButton({ productName }: { productName: string }) {
  const [added, setAdded] = useState(false);
  return <><button onClick={() => setAdded(true)} disabled={added}>{added ? 'Добавлено!' : 'В корзину'}</button><p role="status">{added ? productName + ' добавлен в корзину.' : 'Учебный пример: состояние хранится до перезагрузки страницы.'}</p></>;
}
