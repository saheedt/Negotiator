// https://docs.cypress.io/api/introduction/api.html
const visit = (location) => cy.visit(location);

describe('Negotiator', () => {
  beforeEach(() => {
    visit('/');
  });

  it('loads the application', () => {
    cy.get('header').should('be.visible');
    cy.get('.tab-buttons-holder').find('button').should('have.length', 2);
    cy.get('.tab-buttons-holder').find('button.active').should('have.length', 1);
  });

  it('renders Employer-tab and Employer component correctly', () => {
    const maxOffer = 202.50;
    const maxOfferInput = cy.get('input[type=number]');
    maxOfferInput.type(maxOffer);
    maxOfferInput.should('have.value', `${maxOffer}`);
    cy.get('input[type=submit]').click();
    cy.get('input[type=number]').should('not.exist');
    cy.get('input[type=submit]').should('be.disabled');
  });

  it('renders Employee-tab and Employee component correctly', () => {
    const minSalary = 300.20;
    const employeeTab = cy.get('.tab-buttons-holder').find('button').contains('Employee-Tab');
    employeeTab.click();
    const minSalaryInput = cy.get('input[type=number]');
    minSalaryInput.type(minSalary);
    minSalaryInput.should('have.value', `${minSalary}`);
    cy.get('input[type=submit]').click();
    cy.get('input[type=number]').should('not.exist');
    cy.get('input[type=submit]').should('be.disabled');
  });

  it('should render modal correctly when negotiation conditions are met', () => {
    const maxOffer = 202.50;
    const minSalary = 300.20;
    cy.get('input[type=number]').type(maxOffer);
    cy.get('input[type=submit]').click();
    cy.get('.tab-buttons-holder').find('button').contains('Employee-Tab').click();
    cy.get('input[type=number]').type(minSalary);
    cy.get('input[type=submit]').click();
    cy.get('.modal-container').should('be.visible');
    cy.get('.modal-container').find('.modal-header').should('contain', 'Failure!');
    cy.get('.modal-container').find('.modal-body').should('contain', `Maximum offer was: ${maxOffer}`);
    cy.get('.modal-container').find('.modal-body').should('contain', `Minimum expected salary was: ${minSalary}`);
  });
});
