// прописать import все файлы JS
import orderByProps from '../app';
// начать тесты
test('Сортировка вначале по массиву, потом по алфавиту name level', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const resFunc = orderByProps(obj, ['name', 'level']);
  const result = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(resFunc).toEqual(result);
});

test('Сортировка вначале по массиву, потом по алфавиту level', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const resFunc = orderByProps(obj, ['level']);
  const result = [
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'name', value: 'мечник' },
  ];
  expect(resFunc).toEqual(result);
});

test('Проверка на ошибку в добавлении ключей из arr', () => {
  const obj = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  expect(() => {
    orderByProps(obj, ['fd']);
  }).toThrow();
});
