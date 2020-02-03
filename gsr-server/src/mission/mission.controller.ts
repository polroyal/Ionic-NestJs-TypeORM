import { Controller, Get } from '@nestjs/common';
import { MissionService } from './mission.service';

@Controller('mission')
export class MissionController {
    constructor(private serv: MissionService) { }

    @Get()
    public async getAll() {
        return await this.serv.getAll();
    }
}
