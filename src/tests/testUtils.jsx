import { render } from '@testing-library/react';

// Custom render function that can be extended later
export function customRender(ui, options = {}) {
  return render(ui, { ...options });
}

// Re-export everything from testing-library
export * from '@testing-library/react';
export { customRender as render };

