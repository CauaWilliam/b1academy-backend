import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { YoutubeModule } from './youtube/youtube.module';
import { UsersModule } from './users/users.module';
import { DrizzleModule } from './db/drizzle/drizzle.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [YoutubeModule , ConfigModule.forRoot({ isGlobal: true }), YoutubeModule, UsersModule , DrizzleModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
