import MetaJson from "../../pages/docs/components/_meta.json";

describe("Docs", () => {
  it("loads homepage", () => {
    cy.visit("/");
  });

  const pages = Object.keys(MetaJson).map((meta) => meta);
  pages.forEach((page) => {
    if (page === "index") return;
    it(`loads ${page} page`, () => {
      cy.visit(`docs/components/${page}`);
      it("Should not contain NoDisplayName or <A>", () => {
        cy.contains("</NoDisplayName>").should("not.exist");
        cy.contains("<A>").should("not.exist"); // <A> can show up if you assign displayname to parent component but not subcomponents.
      });
    });
  });

  // it("loads all component pages", () => {
  //   const pages = Object.keys(MetaJson).map((meta) => meta);
  //   pages.forEach((page) => {
  //     if (page === "index") return;
  //     cy.visit(`docs/components/${page}`);

  //     cy.contains("NoDisplayName").should("not.exist");
  //   });
  // });

  it("theme generator generates can click through", () => {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit("http://localhost:3000/docs/theme");
    cy.get(":nth-child(1) > .justify-center > .group > .flex > .px-2").click();
    cy.get(".saturation-white").click();
    cy.get(".hidden.\\@\\[50px\\]\\:block > .text-sm").click();
    cy.get(".transition-all > .gap-4 > .items-center").click();
    cy.get(".transition-all > .gap-4 > .bg-primary").click();
    /* ==== End Cypress Studio ==== */
  });
});
