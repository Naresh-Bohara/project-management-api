import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Developer } from './schemas/developer.schema';
import { Model } from 'mongoose';
import { CreateDeveloperDto } from './dto/create-developer.dto';

@Injectable()
export class DeveloperService {
  constructor(
    @InjectModel(Developer.name)
    private readonly developerModel: Model<Developer>,
  ) {}

  async createDeveloper(dto: CreateDeveloperDto): Promise<Developer> {
    return this.developerModel.create(dto);
  }

  async findAllDevelopers(): Promise<Developer[]> {
    return this.developerModel.find().exec();
  }

  async findDeveloperById(id: string): Promise<Developer> {
    const developer = await this.developerModel.findById(id);
    if (!developer) {
      throw new NotFoundException('Developer not Found!');
    }
    return developer;
  }
}
