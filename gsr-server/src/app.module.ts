import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';

import { TypeOrmModule } from '@nestjs/typeorm';
import { configService } from './config/config.service';
import { MissionModule } from './mission/mission.module';
import { MissionController } from './mission/mission.controller';
import { MissionService } from './mission/mission.service';
import { Mission } from './model/mission.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    // TypeOrmModule.forFeature([Mission]);
    MissionModule,
  ],
  controllers: [MissionController],
  providers: [MissionService],
})
export class AppModule {}
