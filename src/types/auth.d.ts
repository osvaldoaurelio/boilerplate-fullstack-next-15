type ActionState<T> = {
  data: T,
  message: string | null,
  errors: ZodError<T> | null,
};

type CreateUserDto = {
  name: string;
  email: string;
  password: string;
}

export type { ActionState, CreateUserDto };
