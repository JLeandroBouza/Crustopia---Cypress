/// <reference types="cypress" />

import { HomePage } from "../support/pages/homePage";
import {CarritoPage} from "../support/pages/carritoPage";
import  {ReciboPage} from "../support/pages/reciboPage";

describe("Crustopia Pizzeria - Testing E2E",()=>{

    const homePage = new HomePage();
    const carritoPage= new CarritoPage();
    const reciboPage = new ReciboPage();

    it("Testing E2E: Usuario selecciona los productos y realiza la compra",()=>{
        cy.visit(" ");
    });
});
