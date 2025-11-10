import { IsEmail, IsNotEmpty, MinLength } from "class-validator"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Produto } from "../../produto/entities/produto.entity"
import { ApiProperty } from "@nestjs/swagger"

@Entity({name: "tb_usuarios"})
export class Usuario {

    @PrimaryGeneratedColumn() 
    id: number

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    @ApiProperty() 
    nome: string

    @IsEmail()
    @IsNotEmpty()
    @Column({length: 255, nullable: false })
    @ApiProperty({example: "email@email.com.br"}) 
    usuario: string

    @MinLength(8)
    @IsNotEmpty()
    @Column({length: 255, nullable: false })
    @ApiProperty()  
    senha: string

    @IsNotEmpty()
    @Column({length: 255, nullable: true })
    @ApiProperty()  
    endereco: string

    @ApiProperty() 
    @OneToMany(() => Produto, (produto) => produto.usuario)
    produto: Produto[]

}