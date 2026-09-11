import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectMemberModule } from './project-member/project-member.module';
import { ProjectModule } from './project/project.module';
import { DeveloperModule } from './developer/developer.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGODB_URL!),
    ProjectMemberModule,
    ProjectModule,
    DeveloperModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
