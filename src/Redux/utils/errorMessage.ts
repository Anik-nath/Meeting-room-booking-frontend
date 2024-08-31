export const DisplayErrorMessage = (error: unknown): string => {
  return (
    (error as { data?: { message?: string } }).data?.message ||
    "Something went wrong!"
  );
};
