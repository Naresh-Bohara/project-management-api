import { Module } from '@nestjs/common';
import { ProjectMemberController } from './project-member.controller';
import { ProjectMemberService } from './project-member.service';
import { MongooseModule } from '@nestjs/mongoose';
import {
  ProjectMember,
  ProjectMemberSchema,
} from './schemas/project-member.schema';
import {
  Developer,
  DeveloperSchema,
} from 'src/developer/schemas/developer.schema';
import { Project, ProjectSchema } from 'src/project/schemas/project.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ProjectMember.name, schema: ProjectMemberSchema },
      { name: Developer.name, schema: DeveloperSchema },
      { name: Project.name, schema: ProjectSchema },
    ]),
  ],
  controllers: [ProjectMemberController],
  providers: [ProjectMemberService],
})
export class ProjectMemberModule {}
