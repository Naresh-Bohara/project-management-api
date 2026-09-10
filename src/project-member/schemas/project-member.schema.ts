/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema, Types } from 'mongoose';
import { Developer } from 'src/developer/schemas/developer.schema';
import { Project } from 'src/project/schemas/project.schema';

@Schema({ timestamps: true })
export class ProjectMember extends Document {
  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: Developer.name,
    required: true,
  })
  developer: Types.ObjectId;

  @Prop({
    type: MongooseSchema.Types.ObjectId,
    ref: Project.name,
    required: true,
  })
  project: Types.ObjectId;

  @Prop({ required: true, trim: true })
  role: string;

  @Prop({ required: true, enum: ['active', 'inactive'], default: 'active' })
  status: string;

  @Prop({ required: true, min: 0, max: 100 })
  allocation: number;
}

export const ProjectSchemaMember = SchemaFactory.createForClass(ProjectMember);

ProjectSchemaMember.index(
  {
    developer: 1,
    project: 1,
  },
  {
    unique: true,
  },
);
