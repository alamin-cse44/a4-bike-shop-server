import { Document, Model } from 'mongoose';

export interface IBike {
  name: string;
  brand: string;
  price: number;
  // model: 'Mountain' | 'Road' | 'Hybrid' | 'Electric';
  model: string;
  stock: boolean;
  quantity: number;
  description?: string;
  image?: string;
}

export type BikeDocument = IBike & Document;

export interface BikeModel extends Model<IBike> {
  isBikeExistById(id: string): Promise<IBike>;
}
