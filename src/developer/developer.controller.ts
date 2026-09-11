import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { DeveloperService } from './developer.service';
import { CreateDeveloperDto } from './dto/create-developer.dto';

@Controller('developers')
export class DeveloperController {
  constructor(private readonly devService: DeveloperService) {}
  @Post()
  createDeveloper(@Body() dto: CreateDeveloperDto) {
    return this.devService.createDeveloper(dto);
  }

  @Get()
  getAllDevelopers() {
    return this.devService.findAllDevelopers();
  }

  @Get('devId')
  findDevById(@Param('devId') devId: string) {
    return this.devService.findDeveloperById(devId);
  }
}
