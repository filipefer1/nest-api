import { Injectable } from '@nestjs/common';
import { ObjectID } from 'typeorm';
import { ProductDto } from '../dto/product.dto';
import { ProductRepository } from '../repositories/products.repository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async getAllProducts() {
    return this.productRepository.getAllProducts();
  }

  async createProduct(product: ProductDto) {
    return this.productRepository.createProduct(product);
  }

  async getSingleProduct(id: ObjectID) {
    return this.productRepository.getById(id);
  }
}
