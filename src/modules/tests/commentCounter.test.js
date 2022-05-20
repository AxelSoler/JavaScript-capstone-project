import { commentCounter } from '../details.js';

describe('count comments of an item', () => {
  const comments = [
    {
      item_id: 1,
      username: 'Amedzro Elikplim',
      comments: 'This is a comment',
    },
    {
      item_id: 2,
      username: 'Axel Soler',
      comments: 'This is a comment',
    },
    {
      item_id: 3,
      username: 'Firdavs Farrux',
      comments: 'This is a comment',
    },
    {
      item_id: 4,
      username: 'jose Ramon',
      comments: 'This is a comment',
    },
  ];

  test('comments count of 4 comments', () => {
    expect(commentCounter(comments)).toEqual(4);
  });
});