import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Project extends Document {
  @Prop({ required: true, trim: true })
  name: string;

  @Prop({ unique: true, required: true, trim: true })
  projectCode: string;

  @Prop({ required: true, trim: true })
  description: string;

  @Prop({
    required: true,
    enum: ['planning', 'active', 'completed', 'cancelled'],
    default: 'planning',
  })
  status: string;
}

export const ProjectSchema = SchemaFactory.createForClass(Project);
