import { ObjectId } from 'mongodb';
import { connectToDatabase } from './dbConnect';

export const getProducts = async (limit = 0) => {
  const { db } = await connectToDatabase();
  const products = await db
    .collection('products')
    .find({})
    .limit(limit)
    .toArray();
  return products;
};

export const getProductById = async (id: string) => {
  const { db } = await connectToDatabase();
  const products = await db
    .collection('products')
    .findOne({ _id: new ObjectId(id) });
  return products;
};

export const getProductByCategory = async (category: string) => {
  const { db } = await connectToDatabase();
  const products = await db
    .collection('products')
    .find({ category: { $regex: category, $options: 'i' } })
    .toArray();
  return products;
};

export const getCategories = async () => {
  const { db } = await connectToDatabase();
  const categories = await db.collection('products').distinct('category');
  return categories;
};
