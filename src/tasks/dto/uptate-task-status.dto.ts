import { IsEnum } from 'class-validator';
import { TaskStatus } from '../tasks.model';

export class UpdateTaskStatusDot {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
