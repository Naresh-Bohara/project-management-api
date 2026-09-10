import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ProjectMember } from './schemas/project-member.schema';
import { Model } from 'mongoose';
import { Developer } from 'src/developer/schemas/developer.schema';
import { Project } from 'src/project/schemas/project.schema';
import { AddProjectMemberDto } from './dto/add-project-member.dto';

@Injectable()
export class ProjectMemberService {
  constructor(
    @InjectModel(ProjectMember.name)
    private readonly projectMembModel: Model<ProjectMember>,
    @InjectModel(Developer.name) private readonly devModel: Model<Developer>,
    @InjectModel(Project.name) private readonly projectModel: Model<Project>,
  ) {}

  async assignDeveloperToProject(
    dto: AddProjectMemberDto,
  ): Promise<ProjectMember> {
    const developer = await this.devModel.findById(dto.developerId);
    if (!developer) {
      throw new NotFoundException('Developer not found!');
    }

    const project = await this.projectModel.findById(dto.projectId);
    if (!project) {
      throw new NotFoundException('Project not found!');
    }

    const alreadyAssigned = await this.projectMembModel.findOne({
      developer: dto.developerId,
      projecct: dto.projectId,
    });

    if (alreadyAssigned) {
      throw new ConflictException(
        'Developer already assigned to this project!',
      );
    }

    return this.projectMembModel.create({
      developer: dto.developerId,
      project: dto.projectId,
      role: dto.role,
      allocation: dto.allocation,
    });
  }

  async findDeveloperProjects(devId: string): Promise<ProjectMember[]> {
    return this.projectMembModel
      .find({ developer: devId })
      .populate('project')
      .exec();
  }

  findProjectDevelopers(projectId: string): Promise<ProjectMember[]> {
    return this.projectMembModel
      .find({ project: projectId })
      .populate('developer')
      .exec();
  }
}
