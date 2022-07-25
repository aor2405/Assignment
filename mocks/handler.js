import { rest } from 'msw';

const handler = [
  rest.get('/api/workStationData', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          deskNumber: 1,
          id: 109,
          reseveredStatus: true,
        },
      ])
    );
  }),
];

export { handler, rest };
