import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World! - from Raju(Northwest Missouri State University)';
  }
}
