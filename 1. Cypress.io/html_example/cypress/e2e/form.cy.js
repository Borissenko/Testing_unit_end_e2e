describe("Form test", () => {
  it("Can fill the form", () => {
    cy.visit("/")
    cy.get("form")   //метод выбора элементов на странице



    cy.get('input[name="name"]')
      .type("Molly")         //в инпут "вбили" 'Molly'
      .should("have.value", "Molly")    //проверили - в инпуре д.б. вбито 'Molly'.


    cy.get('input[name="email"]')
      .type("molly@dev.dev")
      .should("have.value", "molly@dev.dev")

    cy.get("textarea")
      .type("go")
      .should("have.value", "go");



    cy.server()          //запускаем «виртуальный» сервер
    cy.route({           // поддельная конечная точка API
      url: "/users/**",
      method: "POST",
      response: { status: "Saved", code: 201 }    //stub-ответ
    });

    cy.get("form").submit()

    cy.contains("Saved")   // проверяем, какой ответ получен.

  })
})