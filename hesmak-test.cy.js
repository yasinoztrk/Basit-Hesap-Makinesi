describe("Calculator Test" , () => {

    beforeEach(() => {
        
        cy.visit("http://127.0.0.1:5500/Hesap%20Makinesi/index.html")

    })

    it(".click() - click on a DOM element" , () => {
        // Aritmetik operatörlerin tıklama testi
        cy.get(".arti-btn").click()   
        cy.get(".eksi-btn").click()
        cy.get(".times-btn").click()
        cy.get(".devide-btn").click()

        // Sayıların tıklama testi
        cy.get("#numzero-btn").click()
        cy.get("#numone-btn").click()
        cy.get("#numtwo-btn").click()
        cy.get("#numthree-btn").click()
        cy.get("#numfour-btn").click()
        cy.get("#numfive-btn").click()
        cy.get("#numsix-btn").click()
        cy.get("#numseven-btn").click()
        cy.get("#numeight-btn").click()
        cy.get("#numnine-btn").click()

        // Atama operatörünün tıklama testi
        cy.get(".esittir-isareti").click()

        // Nokta butonunun tıklama testi
        cy.get(".decimal-btn").click()

        // Temizleme butonunun tıklama testi
        cy.get(".clear-btn").click()
    })

    it(".should() - initial value check of a DOM element" , () => {
        cy.get(".hes-mak-input")
        .should("have.value" , "0")
    })

    it("çikarma işlemi kontrol testi" , () => {
        cy.get("#numtwo-btn").click()
        cy.get("#numzero-btn").click()
        cy.get("#numzero-btn").click()

        cy.get(".eksi-btn").click()

        cy.get("#numone-btn").click()
        cy.get("#numzero-btn").click()
        cy.get("#numzero-btn").click()

        cy.get(".esittir-isareti").click()

        cy.get(".hes-mak-input").should("have.value" , "100")
        
    })

    it("toplama işlemi kontrol testi" , () => {
        cy.get("#numone-btn").click()
        cy.get("#numzero-btn").click()

        cy.get(".arti-btn").click()

        cy.get("#numfive-btn").click()

        cy.get(".esittir-isareti").click()

        cy.get(".hes-mak-input").should("have.value" , "15")

    })

    it("çarpma islemi kontrol testi" , () => {
        cy.get("#numfive-btn").click()

        cy.get(".times-btn").click()

        cy.get("#numsix-btn").click()

        cy.get(".esittir-isareti").click()

        cy.get(".hes-mak-input").should("have.value" , "30")
    })

    it("bolme islemi kontrol testi" , () => {
        cy.get("#numsix-btn").click()

        cy.get(".devide-btn").click()

        cy.get("#numthree-btn").click()

        cy.get(".esittir-isareti").click()

        cy.get(".hes-mak-input").should("have.value" , "2")
    })

    it("decimal sayi işlem testi" , () => {
        cy.get("#numsix-btn").click()
        cy.get(".decimal-btn").click()
        cy.get("#numfive-btn").click()
        cy.get(".arti-btn").click() 
        cy.get("#numsix-btn").click()            //6.3 6.5
        cy.get(".decimal-btn").click()
        cy.get("#numthree-btn").click()
        cy.get(".esittir-isareti").click()
        cy.get(".hes-mak-input").should("have.value" , "12.8")

        cy.get("#numsix-btn").click()
        cy.get(".decimal-btn").click()
        cy.get("#numfive-btn").click()
        cy.get(".eksi-btn").click() 
        cy.get("#numsix-btn").click()
        cy.get(".decimal-btn").click()
        cy.get("#numthree-btn").click()
        cy.get(".esittir-isareti").click()
        cy.get(".hes-mak-input").should("have.value" , "0.2")

        cy.get("#numsix-btn").click()
        cy.get(".decimal-btn").click()
        cy.get("#numfive-btn").click()
        cy.get(".times-btn").click() 
        cy.get("#numsix-btn").click()
        cy.get(".decimal-btn").click()
        cy.get("#numthree-btn").click()
        cy.get(".esittir-isareti").click()
        cy.get(".hes-mak-input").should("have.value" , "40.95")

        cy.get("#numsix-btn").click()
        cy.get(".decimal-btn").click()
        cy.get("#numthree-btn").click()
        cy.get(".devide-btn").click() 
        cy.get("#numtwo-btn").click()
        cy.get(".decimal-btn").click()
        cy.get("#numone-btn").click()
        cy.get(".esittir-isareti").click()
        cy.get(".hes-mak-input").should("have.value" , "3")


    })

    it('atama operatörü kontrol testi', () => {
        cy.get("#numtwo-btn").click()
        cy.get(".arti-btn").click()
        cy.get("#numone-btn").click()
        cy.get(".esittir-isareti").click()

        cy.get(".hes-mak-input")
        .should("have.value" , "3")
 
      })

})