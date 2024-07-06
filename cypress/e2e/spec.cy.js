describe('My First Test', () => {
  it('validate guest user to see Fail message on click of favourite icon from homepage', () => {
    cy.visit('https://makyee.com')


    cy.get('#carousel3').scrollIntoView()
    cy.get('#carousel3 .owl-item.active .fav_icon__khaled_alam').first().click()

    cy.contains('Fail')
      .then(result => expect(result?.length).to.equal(1));
  })

  it('validate guest user to see Fail message on click of favourite icon from property details page', () => {
    cy.visit('https://makyee.com/off-plan/8301-burj.html')


    cy.get('.fav_icon__khaled_alam').first().scrollIntoView()
    cy.get('.fav_icon__khaled_alam').first().click()

    cy.contains('Fail')
      .then(result => expect(result?.length).to.equal(1));
  })
})