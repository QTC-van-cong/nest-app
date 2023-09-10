import { Injectable } from "@nestjs/common";
import { ProductDto } from "src/dto/product.dto";
import { Product } from "src/models/producr.model";

@Injectable()
export class ProductService{

    private products: Product[] = [
        {
            id: 1,
            categoryId: 2,
            productName: "keyboard",
            price: 80000
        },
        {
            id: 2,
            categoryId: 3,
            productName: "mouse",
            price: 90000
        },
        {
            id: 3,
            categoryId: 2,
            productName: "micro",
            price: 100000
        }
    ]

    getProducts():Product[]{
        return this.products;
    }

    createProduct(productDto: ProductDto):ProductDto{
        const product: Product = {
            id: Math.random(),
            ...productDto
        }
        this.products.push(product)
        return productDto; 
    }

    detailProduct(id):Product{
        return this.products.find(item => item.id === Number(id));
    }

    updateProduct(): string{
        return "update product";
    }

    deleteProduct():string{
        return "Delete product";
    }
}