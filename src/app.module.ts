import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProjectMemberModule } from './project-member/project-member.module';
import { ProjectModule } from './project/project.module';
import { DeveloperModule } from './developer/developer.module';

@Module({
  imports: [ProjectMemberModule, ProjectModule, DeveloperModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
