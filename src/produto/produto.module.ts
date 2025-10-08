import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoService } from './services/produto.service';
import { ProdutoController } from './controllers/produto.controller';
import { Produto } from './entities/produto.entity';
import { CategoriaModule } from '../categoria/categoria.module'; 

@Module({
  imports: [
    TypeOrmModule.forFeature([Produto]),
    CategoriaModule, 
  ],
  controllers: [ProdutoController],
  providers: [ProdutoService],
  exports: [ProdutoService], 
})
export class ProdutoModule {}