/// <reference types="cypress" />

import { HomePage } from "../support/pages/homePage";
import {CarritoPage} from "../support/pages/carritoPage";
import  {ReciboPage} from "../support/pages/reciboPage";

describe("Crustopia Pizzeria - Testing E2E",()=>{
    let InputData;
    const homePage = new HomePage();
    const carritoPage= new CarritoPage();
    const reciboPage = new ReciboPage();

    before("Carga de los datos del Fixture data", ()=>{

        cy.fixture("data").then(data =>{
            InputData= data
        });
    });

    it("Testing E2E: Usuario selecciona los productos y realiza la compra",()=>{
        
        const sumTotal= `${InputData.producto.precio1 + InputData.producto.precio2}`
        
        cy.visit(" ");

        homePage.agregarProductos();
        homePage.clickCarritoCompras();
        
        
    });
});
