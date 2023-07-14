// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
    try {
        const response = await fetch('https://hot-api.zhaoyeqing.cn/36kr/');
        const data = await response.json();

        res.status(200).json(data);
      } catch (error) {
        res.status(500).json({ message: 'An error occurred' });
      }
}
