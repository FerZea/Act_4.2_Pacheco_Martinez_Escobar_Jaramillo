import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';
import App from './App';
import './setupTests';

describe('App', () => {
  test('permite navegar del inicio al registro de clase', async () => {
    const user = userEvent.setup();

    render(<App />);

    expect(screen.getByText('Grupos del semestre actual')).toBeInTheDocument();

    await user.click(screen.getAllByRole('button', { name: /registrar sesión/i })[0]);

    expect(screen.getByText('Registro de clase')).toBeInTheDocument();
  });
});
