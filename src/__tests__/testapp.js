import specialAttack from '../app';

test('Функции specialAttack, которая должна возвращать извлечённый массив из объектов с четыремя полями', () => {
  const expected = [
    {
      id: 8,
      name: 'Двойной выстрел',
      icon: 'http://...',
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      description: 'Описание недоступно',
    },
  ];
  const result = specialAttack();
  expect(result).toEqual(expected);
});
