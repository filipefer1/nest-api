import {
  Body,
  Controller,
  Get,
  Header,
  Post,
  Request,
  UseGuards,
  Headers,
} from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { JwtService } from '@nestjs/jwt';
import { OrderDto } from './dto/order.dto';
import { OrderService } from './services/order.service';
import { AuthService } from '../auth/auth.service';

@Controller('order')
export class OrderController {
  constructor(
    private readonly orderService: OrderService,
    private readonly authService: AuthService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createOrder(@Body() orderDto: OrderDto, @Headers() headers) {
    const token = headers.authorization.split('Bearer')[1].trim();

    const payload = await this.authService.decode(token);
    console.log(payload);
    return this.orderService.createOrder(orderDto, payload.sub);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllOrdered(@Headers() headers) {
    const token = headers.authorization.split('Bearer')[1].trim();

    const payload = await this.authService.decode(token);
    return this.orderService.getAllOrdered(payload.sub);
  }
}
