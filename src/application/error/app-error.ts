export class AppError {
  constructor(public statusCode: number, public message: string) {
    this.statusCode = statusCode;
    this.message = message;
  }
}
