import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Mission {
    @PrimaryGeneratedColumn()
    id?: number;

    @Column({ length: 50 })
    title: string;

    @Column()
    reward: number;

    @Column()
    active: boolean;

    @Column() createdAt: Date = new Date();
    @Column() createdBy: string = 'user';
    @Column() isDeleted: boolean = false;
}