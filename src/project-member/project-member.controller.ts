import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProjectMemberService } from './project-member.service';
import { AddProjectMemberDto } from './dto/add-project-member.dto';

@Controller('project-members')
export class ProjectMemberController {
  constructor(private readonly projectMembService: ProjectMemberService) {}
  @Post()
  assignDeveloperToProject(@Body() dto: AddProjectMemberDto) {
    return this.projectMembService.assignDeveloperToProject(dto);
  }

  @Get('developer/:devId/projects')
  findDeveloperProjects(@Param('devId') devId: string) {
    return this.projectMembService.findDeveloperProjects(devId);
  }

  @Get('project/:projectId/developers')
  findProjectDevelopers(@Param('projectId') projectId: string) {
    return this.projectMembService.findProjectDevelopers(projectId);
  }
}
