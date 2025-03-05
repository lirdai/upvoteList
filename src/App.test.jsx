import React from 'react';
import { expect, test, vi } from 'vitest';
import { render } from 'vitest-browser-react';
import App from './App.jsx';

test('selection change', async () => {
    const mockLocalStorage = {
        getItem: vi.fn().mockReturnValue(undefined),
        setItem: vi.fn()
    }
    vi.stubGlobal('localStorage', mockLocalStorage);

    const screen = render(<App />);
    const button0 = screen.getByTestId("button_row0").getByRole("button").first();
    const button1 = screen.getByTestId("button_row1").getByRole("button").first();
    const button2 = screen.getByTestId("button_row2").getByRole("button").first();

    await expect.element(button0).toHaveStyle('background-color: #F4F6F8');
    await button0.click();
    await expect.element(button0).toHaveStyle('background-color: #E5E8FD');
    await expect.element(button1).toHaveStyle('background-color: #F4F6F8');
    await expect.element(button2).toHaveStyle('background-color: #F4F6F8');
});