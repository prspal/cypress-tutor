// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('apiLogin', () => {
    cy.log('Logging in to AAF')
    cy.request({
        method: 'POST',
        url: Cypress.env('aaf_url'),
        // form: true, //for content-type application/x-www-form-urlencoded
        headers: {
            'content-type': 'application/x-www-form-urlencoded; charset=utf-8',
        },
        auth: {
            username: Cypress.env('clientId'),
            password: Cypress.env('clientSecret')
        },
        body: `grant_type=password&username=${Cypress.env('username')}&password=${Cypress.env('password')}`,

    }).then(({
        body
    }) => {
        const {
            access_token,
        } = body

        // cy.log(body.access_token);

        cy.request({
            method: 'GET',
            url: `${Cypress.env('baseUrl')}/mgmt/api/login`,
            headers: {
                Authorization: `Bearer ${access_token}`
            },
        }).then((resp) => {
            cy.log('autentication response', resp.headers)
            const sToken = resp.headers['set-cookie'][0].split(/[;=]/)[1]
            cy.log(sToken);
            
            document.cookie = `SESSIONTOKEN=${sToken};domain=${(new URL(Cypress.env('baseUrl'))).hostname};path=/`

        })
    })
})