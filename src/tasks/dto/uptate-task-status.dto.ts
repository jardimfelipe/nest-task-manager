import { IsEnum } from 'class-validator';
import { TaskStatus } from '../tasks-status.enum';

export class UpdateTaskStatusDot {
  @IsEnum(TaskStatus)
  status: TaskStatus;
}
