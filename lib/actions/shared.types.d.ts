export interface CreateUserParams {
  studentId: string;
  name: string;
  username: string;
  email: string;
  attendance: number;
  belt: string;
}

export interface CheckInParams {
  studentId: string;
}
