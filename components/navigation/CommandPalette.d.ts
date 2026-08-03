import * as React from "react";
/** Paleta de comandos con teclado (⌘K, ↑↓, ↵, Esc). Los identificadores de la lista van en MONO 1 (data: true). */
export interface CommandPaletteProps {
  open?: boolean;
  onClose?: () => void;
  items: Array<{ id?: string; label: string; hint?: string; icon?: string; data?: boolean; action?: string }>;
  onSelect?: (item: any) => void;
  placeholder?: string;
}
export function CommandPalette(props: CommandPaletteProps): JSX.Element | null;
