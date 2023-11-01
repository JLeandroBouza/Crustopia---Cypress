export class HomePage{

    constructor(){
        this.agregarPizzaButton = "#root > div:nth-child(1) > div > main:nth-child(7) > section > div > div:nth-child(1) > button.tarjeta-producto_btn-comprar";
        this.agregarBebidaButton = "#root > div:nth-child(1) > div > main:nth-child(10) > section > div > div:nth-child(2) > button.tarjeta-producto_btn-comprar";
        this.clickCarritoCompras= "//*[@class='home_btn-mostrar-factura']";
    };

    agregarProductos (){
        cy.get(this.agregarPizzaButton).click();
        cy.get(this.agregarBebidaButton).click();

    };

    clickCarritoCompras(){
        cy.get(this.clickCarritoCompras).click();
    };

};