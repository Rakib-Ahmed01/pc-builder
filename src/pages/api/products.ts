import { connectToDatabase } from '@/util/dbConnect';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { db } = await connectToDatabase();
  const products = await db.collection('products').find({}).toArray();

  res.status(200).json(products);
}
