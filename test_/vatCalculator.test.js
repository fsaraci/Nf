const vatCalculator  = require('../src/utilities/vatCalculator')

describe("VAT calculator", ()=>{
    test("Should return the correct VAT excluded amount for 20% VAT",()=>{
        //arrange and act
        const result =  vatCalculator.calculateVAT(16.67)
        //assert
        expect(result).toBe(3.33)
    })
    
    test("Should return the correct gross amount for 20% VAT",()=>{
        //arrange and act
        const result = vatCalculator.calculateGrossAmount(16.67)
        //assert
        expect(result).toBe(20)
    })

    test("Should return the correct net amount for 20% VAT",()=>{
        //arrange and act
        const result = vatCalculator.calculateNetAmount(20)
        //assert
        expect(result).toBe(16.67)
    })
    test("Should delete an item", async () => {

        const response = await app.inject({
    
          method: "DELETE",
    
          url: "/v2/items/6",
    
        });
    
    
    
        expect(response.statusCode).toBe(200);
    
        expect(response.json()).toMatchObject({
    
          message: "Item 6 deleted succesfully!",
    
        });
    
      });

      test("Should update an item", async () => {

        const item = {
    
          name: "Updated name",
    
          description: "Go to park",
    
        };
    
        const response = await app.inject({
    
          method: "PUT",
    
          url: "/v2/items/5",
    
          payload: item,
    
        });
    
    
    
        expect(response.statusCode).toBe(200);
    
        expect(response.json()).toEqual(expect.objectContaining(item));
    
      });
      
})