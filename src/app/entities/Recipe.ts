import {
    BaseEntity,
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
  } from "typeorm";
  
  @Entity()
  export class Recipe extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }