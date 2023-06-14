describe("ejemplo consulta BD", ()=>{
    it("ejemplo select",()=>{
        const query = 'SELECT name FROM Table WHERE condition';
        cy.task('queryDatabase', { query }).then((result) => {
            // Hacer aserciones sobre el resultado de la consulta
            cy.log(result.rows);
            cy.expect(result[0].name).to.not.equal('Jane');
            });
    })
})