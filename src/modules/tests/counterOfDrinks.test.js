import { counterOfDrinks } from '../data.js';

describe('count items', () => {
  const items = [
    {
      item_id: 'item7',
      likes: 1061,
    },

    {
      item_id: 'item8',
      likes: 1,
    },
    {
      item_id: 'item9',
      likes: 31,
    },
  ];

  const listItem = document.createElement('li');
  const textDescription = document.createElement('a');
  textDescription.textContent = 'some text';

  listItem.appendChild(textDescription);
  document.querySelector('body').appendChild(listItem);

  test('count items to be 3', () => {
    expect(counterOfDrinks(items, listItem)).toEqual(3);
  });
  test('text to be "some text (3)"', () => {
    expect(listItem.textContent).toBe('some text (3)');
  });
});