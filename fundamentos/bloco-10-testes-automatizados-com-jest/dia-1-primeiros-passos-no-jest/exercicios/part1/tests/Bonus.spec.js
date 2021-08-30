const searchEmployee = require('../src/Bonus');

describe('Function searchEmployee', ()=> {
  it('Verify function searchEmployee', ()=> {
    expect(typeof searchEmployee).toBe('function');
  });

  it('Verify function searchEmployee("1256-4", "firstName") return Linda', () => {
    expect(searchEmployee('1256-4', 'firstName')).toBe('Linda');
  });

  it('Verify function searchEmployee("0000", "firstName") return "ID não identificada"', () => {
    expect(() => searchEmployee('0000', "firstName")).toThrow('ID não identificada')
  });

  it('Verify function searchEmployee("1256-4", "name") return "Informação indisponível"', () => {
    expect(() => searchEmployee('1256-4', 'name')).toThrowError(new Error('Informação indisponível'));
  })
})

