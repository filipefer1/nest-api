import { Injectable } from '@nestjs/common';
import { objectId } from 'mongodb';
import { ProductService } from 'src/modules/products/services/products.service';
import { OrderDto } from '../dto/order.dto';
import { OrderRepository } from '../repositories/order.repository';

@Injectable()
export class OrderService {
  constructor(
    private readonly orderRepository: OrderRepository,
    private readonly productService: ProductService,
  ) {}

  async createOrder({ productId, quantity }: OrderDto, userId: string) {
    const product = await this.productService.getSingleProduct(productId);
    const unitPrice = product.price;
    const totalPrice = unitPrice * quantity;
    const order = {
      unitPrice,
      quantity,
      totalPrice,
      userId,
      productId,
    };
    return this.orderRepository.createOrder(order);
  }

  async getAllOrdered(userId: string) {
    return this.orderRepository.getAllOrdered(userId);
  }
}
