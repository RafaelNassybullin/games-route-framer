import mongoose, { Schema } from 'mongoose';
import { ICards, ISysReq } from '../interface';

const SystemRequirements: Schema<ISysReq> = new Schema(
    {
        developper: { type: String, required: true },
        genre: { type: String, required: true },
        platform: { type: String, required: true },
        os: { type: String, required: true },
        ram: { type: String, required: true },
        directX: { type: String, required: true },
        space: { type: String, required: true },
        cpu: { type: String, required: true },
        gpu: { type: String, required: true }
    }
);

const CardSchema: Schema<ICards> = new Schema(
    {
        title: { type: String, required: true },
        description: { type: String, required: true },
        image: { type: String, required: true },
        trailerLink: { type: String, required: true },
        galeryImages: { type: [String], required: true },
        category: { type: String, required: true },
        systemRequirement: SystemRequirements
    },
    {
        timestamps: true
    }
);

export default mongoose.model<ICards>('Card', CardSchema);