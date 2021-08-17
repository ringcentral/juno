import { text } from '@storybook/addon-knobs';

export function switchToControlKnobs() {
  const Controls = text(
    'New component please use Controls or Docs 👆',
    'Please use right hand side Controls or Docs 👉',
  );
  return {
    Controls,
  };
}
