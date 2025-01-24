import { model, Schema } from 'mongoose';
import { BikeModel, IBike } from './bike.interface';

const bikeSchema = new Schema<IBike, BikeModel>(
  {
    name: {
      type: String,
      required: [true, 'Please enter a bike name'],
      unique: true,
      trim: true,
    },
    brand: {
      type: String,
      required: [true, 'Please enter a brand name'],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, 'Price must be provided'],
      validate: {
        validator: (value: number) => value > 0,
        message: 'The bike price must be a positive number',
      },
    },
    model: {
      type: String,
      required: [true, 'Please enter a model name'],
      trim: true,
    },
    quantity: {
      type: Number,
      required: [true, 'Please the quantity of the bike'],
      validate: {
        validator: (value: number) => value >= 0,
        message: 'The bike quantity must be a non-negative number',
      },
    },
    stock: {
      type: Boolean,
      default: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

// check the user with the id
bikeSchema.statics.isBikeExistById = async function (id: string) {
  return await Bike.findById(id);
};

export const Bike = model<IBike, BikeModel>('Bike', bikeSchema);
