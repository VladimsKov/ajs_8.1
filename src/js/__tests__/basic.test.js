import Team from '../basic';
import Character from '../character';

const team = new Team();
const character1 = new Character('Мечник');
const character2 = new Character('Лучник');
const character3 = new Character('Маг');

test('new Team - add(newElem)', () => {
  team.members.clear();
  team.add(character1);
  expect(Array.from(team.members)).toEqual([{
    name: 'Мечник',
    health: 100,
  }]);
});

test('new Team - add(sameElem)', () => {
  team.members.clear();
  team.add(character1);
  expect(() => team.add(character1)).toThrowError('Персонаж не добавлен - уже есть в команде');
});

test('new Team - addAll(elems)', () => {
  team.members.clear();
  team.addAll(character1, character2, character3, character1);
  expect(Array.from(team.members)).toEqual([
    {
      name: 'Мечник',
      health: 100,
    },
    {
      name: 'Лучник',
      health: 100,
    },
    {
      name: 'Маг',
      health: 100,
    },
  ]);
});

test('new Team - toArray()', () => {
  team.members.clear();
  team.addAll(character1, character2, character3);
  expect(team.toArray()).toEqual([
    {
      name: 'Мечник',
      health: 100,
    },
    {
      name: 'Лучник',
      health: 100,
    },
    {
      name: 'Маг',
      health: 100,
    },
  ]);
});
