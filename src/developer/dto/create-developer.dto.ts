import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateDeveloperDto {
  @IsNotEmpty({ message: 'Developer name is required!' })
  @IsString({ message: 'Developer name must be a string!' })
  name: string;

  @IsNotEmpty({ message: 'Developer Email is required!' })
  @IsEmail({}, { message: 'Developer Email must be valid email!' })
  email: string;

  @IsNotEmpty({ message: 'EmpId is required!' })
  empId: string;

  @IsNotEmpty({ message: 'Primary skill is required' })
  @IsString({ message: 'Primary skill must be a string' })
  primarySkill: string;
}
