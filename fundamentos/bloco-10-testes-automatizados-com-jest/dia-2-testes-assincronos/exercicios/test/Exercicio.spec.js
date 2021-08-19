/* eslint-disable max-lines-per-function */
/* eslint-disable max-len */
const { uppercase, getUserName, getRepos } = require('../src/Exercicios');

describe('Exercise 1 test', () => {
  it('Function uppercase is defined', () => {
    expect(typeof uppercase).toBe('function');
  });

  it('Is uppercase transforming abacate in ABACATE', (done) => {
    uppercase('abacate', (str) => {
      try {
        expect(str).toBe('ABACATE');
        done();
      } catch (error) {
        done(error);
      }
    });
  });
});

describe('Exercise 2 test', () => {
  it('Function getUserName is defined', () => {
    expect(typeof getUserName).toBe('function');
  });

  // async and resolve
  describe('if the id exist', () => {
    it('return the user name', async () => {
      expect.assertions(1);
      await expect(getUserName(1)).resolves.toEqual('Mark');
    });
  });

  // so async pra capturar erro
  describe('if the id not exist', () => {
    it('return an error', async () => {
      expect.assertions(1);
      try {
        await getUserName(4);
      } catch (error) {
        expect(error).toEqual(new Error('User with 4 not found.'));
      }
    });
  });
});

describe('Exercise 4 test', () => {
  describe('if Project exist', () => {
    it('return repository Name', async () => {
      const url = 'https://api.github.com/orgs/tryber/repos';
     expect(await getRepos(url)).toContain('sd-01-week4-5-project-todo-list');
     await expect(getRepos(url)).resolves.toContain('sd-01-week4-5-project-meme-generator');
    });
  });
});
