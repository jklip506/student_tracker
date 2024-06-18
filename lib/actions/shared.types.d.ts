export interface CreateUserParams {
  studentId: string;
  name: string;
  username: string;
  email: string;
  attendance?: [Date];
  belt: string;
}

export interface CheckInParams {
  studentId: string;
}
