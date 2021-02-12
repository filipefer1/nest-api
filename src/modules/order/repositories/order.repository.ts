import { EntityRepository } from 'typeorm';
import { BaseRepository } from 'typeorm-transactional-cls-hooked';
import { ObjectID } from 'mongodb';
import { Order } from '../entities/order.entity';

@EntityRepository(Order)
export class OrderRepository extends BaseRepository<Order> {
  async createOrder(order: any) {
    const newOrder = this.create({
      ...order,
      productId: order.productId,
      userId: order.userId,
    });
    const ordered = await this.save(newOrder);
    return ordered;
  }

  async getAllOrdered(userId: string) {
    const ordered = await this.find({
      where: {
        userId,
      },
    });
    return ordered;
  }
}
