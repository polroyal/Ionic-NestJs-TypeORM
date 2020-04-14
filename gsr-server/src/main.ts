import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { configService } from './config/config.service';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    if (!configService.isProduction()) {
    const options = SwaggerModule.createDocument(app, new DocumentBuilder()
    .setTitle('Mission API')
    .setDescription('My Missions')
    .setVersion('1.0')
    .addTag('missions')
    .build());

    const document = SwaggerModule.createDocument(app, options);

    SwaggerModule.setup('api', app, document);
  }

    app.enableCors();
    await app.listen(3000);
}
bootstrap();
