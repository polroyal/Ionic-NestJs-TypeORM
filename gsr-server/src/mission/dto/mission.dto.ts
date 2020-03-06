import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, IsNumber } from 'class-validator';
import { Mission } from '../../model/mission.entity';
// import { User } from '../user.decorator';

export class MissionDTO implements Readonly<MissionDTO> {
    @ApiProperty({ required: true})
    @IsUUID()
    id: string;

    @ApiProperty({ required: true})
    @IsString()
    title: string;

    @ApiProperty({ required: true})
    @IsNumber()
    reward: number;

    public static from(dto: Partial<MissionDTO>) {
        const ms = new MissionDTO();
        ms.id = dto.id;
        ms.title = dto.title;
        ms.reward = dto.reward;
        return ms;
    }

    public static fromEntity(entity: Mission) {
        return this.from({
            id: entity.id,
            title: entity.title,
            reward: entity.reward,
        });
    }

    public toEntity(user: any = null) {
        const ms = new Mission();
        ms.id = this.id;
        ms.title = this.title;
        ms.reward = this.reward;
        ms.createDateTime = new Date();
        ms.createdBy = user ? user.id : null;
        ms.lastChangedBy = user ? user.id : null;
        return ms;
    }
}
