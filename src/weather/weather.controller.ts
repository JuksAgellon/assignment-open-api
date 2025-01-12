import { Controller, Get, Param } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('city/:city/:lang')
  async getWeatherByCity(@Param('city') city: string, @Param('lang') lang: string) {
    return this.weatherService.getWeatherByCity(city, lang);
  }
}
