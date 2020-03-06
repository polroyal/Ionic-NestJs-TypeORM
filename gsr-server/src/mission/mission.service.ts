import { Injectable, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Mission } from '../model/mission.entity';
import { Repository } from 'typeorm';
import { MissionDTO } from './dto/mission.dto';
import { User } from '../user.decorator';

@Injectable()
export class MissionService {
    constructor(@InjectRepository(Mission) private readonly repo: Repository<Mission>,
    ) { }

    // public async getAll() {
    //     return await this.repo.find();
    // }

   public async getAll(): Promise<MissionDTO[]> {
       return await this.repo.find()
       .then(missions => missions.map(e => MissionDTO.fromEntity(e)));
   }

    public async create(dto: MissionDTO, user: any ): Promise<MissionDTO> {
        return this.repo.save(dto.toEntity(user))
        .then(e => MissionDTO.fromEntity(e));
    }
}
