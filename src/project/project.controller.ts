import { Controller, Get, Param, Post } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  createProject(dto: CreateProjectDto) {
    return this.projectService.createProject(dto);
  }

  @Get()
  findAllProjects() {
    return this.projectService.findAllProjects();
  }
  @Get('pid')
  findProjectById(@Param('pid') pid: string) {
    return this.projectService.finProjectById(pid);
  }
}
