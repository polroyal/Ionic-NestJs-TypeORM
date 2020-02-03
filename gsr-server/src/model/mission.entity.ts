import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'mission' })
export class Mission extends BaseEntity {

    @Column({ type: 'varchar', length: 50 })
    title: string;

    @Column({ type: 'int', width: 50 })
    reward: number;
}
