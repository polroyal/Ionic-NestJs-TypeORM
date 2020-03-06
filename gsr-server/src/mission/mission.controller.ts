import { Controller, Get, Post, Body } from '@nestjs/common';
import { MissionService } from './mission.service';
import { MissionDTO } from './dto/mission.dto';
import { User } from '../user.decorator';

@Controller('mission')
export class MissionController {
    constructor(private serv: MissionService) { }

    @Get()
    public async getAll(): Promise<MissionDTO[]> {
        return await this.serv.getAll();
    }

    @Post()
    public async post(@User() user: any, @Body() dto: MissionDTO): Promise<MissionDTO> {
    return this.serv.create(dto, user);
  }

}
