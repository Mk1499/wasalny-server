import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RouteService } from './route.service';
import { CreateLineDto } from './dto/create-line.dto';
import { UpdateLineDto } from './dto/update-line.dto';

@Controller('route')
export class RouteController {
  constructor(private readonly routeService: RouteService) {}

  @Post()
  create(@Body() createLineDto: CreateLineDto) {
    return this.routeService.create(createLineDto);
  }

  @Get()
  findAll() {
    return this.routeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.routeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLineDto: UpdateLineDto) {
    return this.routeService.update(+id, updateLineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.routeService.remove(+id);
  }
}
