import { MinLength } from "class-validator";


export class ProductDto {
    categoryId?: number;
    @MinLength(5)
    productName?: string;
    proce?: number;
}