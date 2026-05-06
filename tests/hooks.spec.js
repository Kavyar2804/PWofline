


import{test} from '@playwright/test'


test.beforeAll('', async({browser}) => {

    await browser.newContext()

    console.log('before all'); // data base connection
    
});

test.beforeEach('', () => {

     console.log('before each'); //login
    
});

test.afterEach('', () => {
       console.log('after each'); //logout
    
});
test.afterAll('', () => {

       console.log('after all'); // terminate database connection
    
});

test('test1', () => {
    console.log('test1');
    
    
});
test('test2', () => {
    console.log('test2');
    
    
});

