import { EntityRepository } from 'typeorm';
import { ObjectID } from 'mongodb';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { ProductDto } from '../dto/product.dto';
import { Product } from '../entities/products.entity';

@EntityRepository(Product)
export class ProductRepository extends BaseRepository<Product> {
  async getAllProducts() {
    return this.find();
  }

  async createProduct(product: ProductDto) {
    const newProduct = this.create(product);

    const createdProduct = await this.save(newProduct);
    return createdProduct;
  }

  async getById(id: ObjectID) {
    const product = await this.findOne({
      where: {
        _id: new ObjectID(id),
      },
    });
    return product;
  }
}
