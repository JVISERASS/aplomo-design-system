import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import {
  ApBadge,
  ApButton,
  ApDataValue,
  ApIcon,
  ApInput,
  ApPanel,
  ApChip,
  ApList,
  ApSkeleton,
} from '@jviserass/aplomo-angular';

@Component({
  selector: 'app-root',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ApBadge,
    ApButton,
    ApDataValue,
    ApIcon,
    ApInput,
    ApPanel,
    ApChip,
    ApList,
    ApSkeleton,
  ],
  template: `
    <ap-panel title="Consumo real del paquete publicado">
      <!-- selector de atributo: el host ES el <button> -->
      <button apButton variant="primary">Acción principal</button>
      <button apButton variant="danger" solid>Retirar</button>
      <button apButton variant="ghost" size="sm" disabled>Deshabilitado</button>

      <!-- ControlValueAccessor con ngModel y con formControl -->
      <ap-input label="Referencia" icon="search" [(ngModel)]="ref" />
      <ap-input label="Región" [formControl]="region" />

      <!-- two-way propio del port -->
      <ap-input label="Notas" [(value)]="notas" />

      <!-- firma de movimiento y tokens -->
      <ap-data-value [value]="ref" tone="ok" />
      <ap-data-value value="0" loading />

      <ap-badge tone="warn">Degradado</ap-badge>
      <ap-chip data showRemove>eu-central-1</ap-chip>
      <ap-icon name="search" [size]="16" />
      <ap-skeleton width="180" height="12" />

      <ap-list [items]="items" selectable selectedId="a" />
    </ap-panel>
  `,
})
export class App {
  protected ref = 'svc-4831';
  protected readonly region = new FormControl('eu-central-1');
  protected readonly notas = signal('');
  protected readonly items = [
    { id: 'a', title: 'gateway', subtitle: 'api pública', ref: '4.18.2', tone: 'ok' as const },
    { id: 'b', title: 'ledger', subtitle: 'contabilidad', ref: '2.7.0', tone: 'warn' as const },
  ];
}
