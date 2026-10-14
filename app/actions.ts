'use server';

export async function greet(name: string) {
  if (typeof name !== 'string' || !name.trim() || name.trim().length > 80) {
    throw new Error('Имя должно содержать от 1 до 80 символов.');
  }
  const timestamp = new Date().toISOString();
  return `Привет, ${name.trim()}! Время на сервере: ${timestamp}`;
}
