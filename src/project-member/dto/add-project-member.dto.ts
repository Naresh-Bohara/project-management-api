import {
  IsInt,
  IsMongoId,
  IsNotEmpty,
  IsString,
  Max,
  Min,
} from 'class-validator';

export class AddProjectMemberDto {
  @IsNotEmpty({ message: 'Developer ID is required!' })
  @IsMongoId({ message: 'Developer ID must be a valid MongoDB ID!' })
  developerId: string;

  @IsNotEmpty({ message: 'Project ID is required!' })
  @IsMongoId({ message: 'Project ID must be a valid MongoDB ID!' })
  projectId: string;

  @IsNotEmpty({ message: 'Role is required!' })
  @IsString({ message: 'Role must be a string!' })
  role: string;

  @IsInt({ message: 'Allocation must be an integer!' })
  @Min(0, { message: "Allocation can't be less than 0!" })
  @Max(100, { message: "Allocation can't be greater than 100!" })
  allocation: number;
}
