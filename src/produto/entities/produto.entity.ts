import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";
import { ApiProperty } from "@nestjs/swagger";

@Entity({name: "tb_produtos"})
export class Produto {

    @ApiProperty()
    @PrimaryGeneratedColumn()    
    id: number

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    nome_produto: string
    
    @ApiProperty()
    @IsNotEmpty()
    @Column({type: 'decimal', precision: 10, scale: 2})
    preco: number

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    descricao: string

    @ApiProperty()
    @IsNotEmpty()
    @Column({length: 5000, nullable: false})
    foto: string

    @ApiProperty({ type: () => Categoria })
    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
    onDelete: 'CASCADE',
  })
    categoria: Categoria

    @ApiProperty({ type: () => Usuario })
    @ManyToOne(() => Usuario, (usuario) => usuario.produto, {
      onDelete: "CASCADE"
    })
    usuario: Usuario
}