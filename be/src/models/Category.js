import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: String,
      required: true,
    },
    imageId: {
      type: String, 
      required: true,
    }

  
  },
  
  { timestamps: true } 
);

export default mongoose.model('Category', categorySchema);


