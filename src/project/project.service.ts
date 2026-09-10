import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Project } from './schemas/project.schema';
import { Model } from 'mongoose';
import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name) private readonly projectModel: Model<Project>,
  ) {}

  async createProject(dto: CreateProjectDto): Promise<Project> {
    return this.projectModel.create(dto);
  }

  async findAllProjects(): Promise<Project[]> {
    return this.projectModel.find();
  }

  async finProjectById(pid: string): Promise<Project> {
    const project = await this.projectModel.findById(pid);
    if (!project) {
      throw new NotFoundException('Project not found!');
    }

    return project;
  }
}
