import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mission } from '../model/mission.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MissionService {
    constructor(@InjectRepository(Mission) private readonly repo: Repository<Mission>,
    ) { }

    public async getAll() {
        return await this.repo.find();
    }
}
