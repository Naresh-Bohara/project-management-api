import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Developer extends Document {
  @Prop({ required: true, trim: true })
  name: string;

  @Prop({ unique: true, required: true, lowercase: true, trim: true })
  email: email;

  @Prop({ unique: true, required: true, trim: true })
  empId: string;

  @Prop({ required: true, tim: true })
  primarySkill: string;
}

export const DeveloperSchema = SchemaFactory.createForClass(Developer);
