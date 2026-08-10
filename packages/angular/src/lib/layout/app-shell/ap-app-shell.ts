import { ChangeDetectionStrategy, Component } from "@angular/core";

/**
 * Armazon de la aplicacion: barra superior opcional, navegacion lateral y area principal.
 * Es estructura: aparece instantanea, nunca se anima al cargar.
 */
@Component({
  selector: "ap-app-shell",
  templateUrl: "./ap-app-shell.html",
  styleUrl: "./ap-app-shell.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApAppShell {}
