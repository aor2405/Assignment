import React from 'react';
import {
  render,
  screen,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

import WorkStation from './WorkStation';
import { handler } from '../mocks/handler';

const server = setupServer(...handler);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('Tests mock API call and renders the card component', async () => {
  render(<WorkStation />);

  const deskNumber = await screen.findByTestId('desk-number');
  expect(deskNumber).toBeTruthy;
});

test('Shows error if there is a network issue', async () => {
  server.use(
    rest.get('/api/workStationData', async (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );
  render(<WorkStation />);
  await waitForElementToBeRemoved(() => screen.getByText(/loading/i));
  const element = await screen.findByText('500 Server Error');
  expect(element).toBeTruthy();
});

test('Tests for current availability status', async () => {
  render(<WorkStation />);

  const currentAvailability = await screen.findByText('Currently available');
  expect(currentAvailability).toBeTruthy;
});
