import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { Usuario } from "../../usuario/entities/usuario.entity";

@Entity({name: "tb_produtos"})
export class Produto {

    @PrimaryGeneratedColumn()    
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    nome_produto: string
    
    @IsNotEmpty()
    @Column({type: 'decimal', precision: 10, scale: 2})
    preco: number

    @IsNotEmpty()
    @Column({length: 1000, nullable: false})
    descricao: string

    @IsNotEmpty()
    @Column({length: 5000, nullable: false})
    foto: string

    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
    onDelete: 'CASCADE',
  })
    categoria: Categoria

    @ManyToOne(() => Usuario, (usuario) => usuario.produto, {
      onDelete: "CASCADE"
    })
    usuario: Usuario
}