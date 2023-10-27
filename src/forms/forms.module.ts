import { MiddlewareConsumer, Module } from '@nestjs/common';
import { ColetaController } from './coleta/coleta.controller';
import { ColetaService } from './coleta/coleta.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { CatadorService } from 'src/catador/catador.service';
import { VendaController } from './venda/venda.controller';
import { VendaService } from './venda/venda.service';

@Module({
  controllers: [ColetaController, VendaController],
  providers: [ColetaService, PrismaService, CatadorService, VendaService]
})
export class FormsModule {
 

}
