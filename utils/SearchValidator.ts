import { expect } from "@playwright/test";

export function verifyProductNames(productNames: string[], keyword: string){
    for(const productName of productNames){
        expect(productName.toLowerCase()).toContain(keyword.toLowerCase())
    }
}