describe(`Search elements`, ()=> {
    
    // Se ejecyta antes de cada prueba
    beforeEach(()=> {

        // Va a la baseUrl que esta em cypress.json
        cy.visit(`/`);
    }) 

    // Primer Test
    it(`Search for elements with multiple results`, ()=> {
    
        // Invocar la pagina index con sus elementos que estan en la carpeta fixture
        cy.fixture(`index`).then((index)=>{
            cy.get(index.searchBox).type(`Dress`);
            cy.get(index.searchButtom).click();
        })

        // Invocar la pagina index con sus elementos que estan en la carpeta fixture
        cy.fixture(`SearchResult`).then((SearchResult)=>{
            cy.get(SearchResult.title).should(`contain`, `Dress`);
        })
    })
    
    // Segundo Test
    it(`Search for elements with NO results`, ()=> {

        // Invocar la pagina index con sus elementos que estan en la carpeta fixture
        cy.fixture(`index`).then((index)=>{
            cy.get(index.searchBox).type(`qwerty`);
            cy.get(index.searchButtom).click();
        })

        // Invocar la pagina index con sus elementos que estan en la carpeta fixture
        cy.fixture(`SearchResult`).then((SearchResult)=>{
            cy.get(SearchResult.alert).should(`contain`, `No results were found for your search`);
        })
    })
})