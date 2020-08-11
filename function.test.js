const functions = require('./functions');
//you can consult something before
const nameCheck = () => console.log('Checking Name....');

describe('Checking Names', () => {
  beforeEach(() => nameCheck());

  test('User is Jeff', () => {
    const user = 'Jeff';
    expect(user).toBe('Jeff');
  });

  test('User is Karen', () => {
    const user = 'Karen';
    expect(user).toBe('Karen');
  });
});
//toBe
test ('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});
//not.toBe
test ('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});
//toBeNull
test ('should be null', () => {
    expect(functions.isNull()).toBeNull();
});
//toBeFalsy
test ('should be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});
//toBeFalsy
test ('should be falsy', () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});
//toBeFalsy
test ('should be falsy', () => {
    expect(functions.checkValue(0)).toBeFalsy();
});
//toBeThruty
test('if people are such a dick', () => {
    const people = 'dick';
    console.log('then keep doing your live and never look back');
    expect(people).toBeTruthy();
});
//toEqual if for look into objects
test ('user should be Brad Traversy object', () => {
    expect(functions.createUser()).toEqual({ firstName: 'Brad', lastName: 'Traversy'});
});
//less than and greater than or equal
test('should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
});
//orEqual
test('should be under 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});
//Regex
test('there is no I in team', () => {
    expect('team').not.toMatch(/I/);
});
//Arrays
test('Admin should be in usernames', () => {
    usernames = ['Jhon', 'Karen', 'admin'];
    expect(usernames).toContain('admin');
});
//promise
test('user fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fecthUser().then(data => {
            expect(data.name).toEqual("Leanne Graham");
        });
});
/*
test('user fetched name should be Leanne Graham', () => {
    functions.fecthUser().then(data => {
        expect(data.name).toEqual("Leanne Graham");
        });
});*/
//async await
test('user fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fecthUser()
    expect(data.name).toEqual("Leanne Graham");
});