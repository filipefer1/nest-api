import { Column, Entity, JoinColumn, ObjectIdColumn, OneToOne } from 'typeorm';
import { ObjectID } from 'mongodb';
import { User } from 'src/modules/user/entities/user.entity';
import { Product } from 'src/modules/products/entities/products.entity';
@Entity()
export class Order {
  @ObjectIdColumn()
  _id: ObjectID;

  @Column()
  unitPrice: number;

  @Column()
  quantity: number;

  @Column()
  totalPrice: number;

  @OneToOne((type) => User)
  @JoinColumn()
  @ObjectIdColumn()
  userId: User;

  @OneToOne((type) => Product)
  @JoinColumn()
  @ObjectIdColumn()
  productId: Product;
}
