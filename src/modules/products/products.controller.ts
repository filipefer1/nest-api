import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ObjectID } from 'typeorm';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ProductDto } from './dto/product.dto';
import { ProductService } from './services/products.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAllProducts() {
    return this.productService.getAllProducts();
  }

  @Get(':id')
  async getSingleProduct(@Param('id') id: string) {
    return this.productService.getSingleProduct(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  async createProduct(@Body() product: ProductDto) {
    return this.productService.createProduct(product);
  }
}
