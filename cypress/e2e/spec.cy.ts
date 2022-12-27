/// <reference types="cypress" />
// import Chance from 'chance';
// const chance = new Chance();

describe('My First Test', () => {
  // const place = chance.name();
  // const column = chance.number({ min: 1, max: 10 });
  // const row = chance.number({ min: 1, max: 10 });
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  })
  it('has a title', () => {
    cy.contains('Home Page');
    cy.contains('This is the place where you can see all your personal weather widgets. to make your own weather widgets, you first have to create an account. You can do that in the account section.')
  })

  it ('can login', () => {
    cy.get('a').contains('Account').click();
    cy.wait(1000);
    cy.get('#f')
    cy.visit('http://localhost:4200/signin/69')
    cy.contains('User Information');
    cy.contains('Sign out');
  })

  it ('can add three widget', () => {
    cy.visit('http://localhost:4200/signin/69');
    cy.wait(1000);
    cy.get('a').contains('Add Widget').click();
    cy.get('#place').type('New York');
    cy.get('#column').type('4');
    cy.get('#row').type('1');
    cy.get('button').contains('send').click();
    cy.get('a').contains('Add Widget').click();
    cy.get('#place').type('London');
    cy.get('#column').type('4');
    cy.get('#row').type('2');
    cy.get('button').contains('send').click();
    cy.get('a').contains('Add Widget').click();
    cy.get('#place').type('Tokyo');
    cy.get('#column').type('4');
    cy.get('#row').type('3');
    cy.get('button').contains('send').click();
    cy.contains('New York');
    cy.contains('London');
    cy.contains('Tokyo');
  })
  it('can delete a widget', () => {
    cy.visit('http://localhost:4200/signin/69');
    cy.wait(1000);
    cy.get('a').contains('Home').click();
    cy.wait(1000);
    cy.get('.widget').contains('London').click('topLeft');
    cy.wait(1000);
    cy.get('.widget').contains('New York').click('topLeft');
    cy.wait(1000);
  })
  it('can edit a widget', () => {
    cy.visit('http://localhost:4200/signin/69');
    cy.wait(1000);
    cy.get('a').contains('Home').click();
    cy.wait(1000);
    cy.get('.widget').contains('Tokyo').click('topRight');
    cy.wait(1000);
    cy.get('#place').clear();
    cy.get('#column').clear();
    cy.get('#row').clear();
    cy.get('#place').type('Beijing');
    cy.get('#column').type('4');
    cy.get('#row').type('1');
    cy.get('button').contains('send').click();
    cy.contains('Beijing');
    cy.wait(1000);
    cy.get('.widget').contains('Beijing').click('topLeft');
    cy.wait(1000);
  })
  it('can logout', () => {
    cy.visit('http://localhost:4200/signin/69');
    cy.wait(1000);
    cy.get('a').contains('Account').click();
    cy.wait(1000);
    cy.get('button').contains('Sign out').click();
    cy.contains('Social sign in');
  })

});
