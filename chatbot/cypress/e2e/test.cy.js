/* eslint-disable no-undef */
/// <reference types="cypress" />

describe("Welcome page, get started", () => {
  it("Button get started works", () => {
    cy.visit("http://localhost:3000/");
    cy.title().should("eq", "Chatbot");
    cy.get("[data-testid=logomain]").should("exist");
    cy.get("[data-testid=picturemain]").should("exist");
    cy.contains("Chatbot");
    cy.get("[data-testid=getstarted]").should("exist");
    cy.get("[data-testid=getstarted]").click();
    cy.url().should("include", "/chatbot");
  });
});

describe("Chatbot page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/chatbot");
    cy.contains("Hello 👋 , welcome to chatbot.");
  });
  it("Chatbot contains all elements", () => {
    cy.contains("Chatbot");
    cy.title().should("eq", "Chatbot");
    cy.get("[data-testid=logochatbot]").should("exist");
    cy.get("[data-testid=messageinput]").should("exist");
    cy.get("[data-testid=microphone]").should("exist");
    cy.get("[data-testid=emojiclosed]").should("exist");
  });
  it("Emoji button works", () => {
    cy.get("[data-testid=emojiclosed]").click();
    cy.get("[data-testid=emojiopend]").should("exist").click();
  });
  it("Microphone button works", () => {
    cy.get("[data-testid=microphone]").click();
    cy.wait(2000);
    cy.get("[data-testid=microphone]").click();
  });

  it("User can send text messages", () => {
    cy.get("[data-testid=messageinput]").type("hello");
    cy.get("[data-testid=sendbutton").click();
  });
  it("User gets weather response", () => {
    cy.get("[data-testid=messageinput]").type("show me the weather in Gdynia");
    cy.get("[data-testid=sendbutton]").click();
    cy.get("[data-testid=weather]").should("exist");
  });
  it("User gets news response", () => {
    cy.get("[data-testid=messageinput]").type("show me latest news");
    cy.get("[data-testid=sendbutton]").click();
    cy.get("[data-testid=botcard]").should("exist");
  });
  it("User gets gif response", () => {
    cy.get("[data-testid=messageinput]").type("gif hi");
    cy.get("[data-testid=sendbutton]").click();
    cy.get("[data-testid=botimage]").should("exist");
  });
  it("User gets youtube response", () => {
    cy.get("[data-testid=messageinput]").type("youtube learn react");
    cy.get("[data-testid=sendbutton]").click();
    cy.get("[data-testid=botyoutube]").should("exist");
  });
  it("User gets cannot find weather response", () => {
    cy.get("[data-testid=messageinput]").type(
      "show me the weather in sauihisauhidhah"
    );
    cy.get("[data-testid=sendbutton").click();
    cy.wait(2000);
    cy.contains("🔍 I can't find this city 🌆. Ask again. 🙂");
  });
  it("User gets cannot find gif response", () => {
    cy.get("[data-testid=messageinput]").type("gif gdtyybhlihuh");
    cy.get("[data-testid=sendbutton").click();
    cy.contains("🔍 I can't find this GIF 🎞. Try again 😉");
  });
});
