import mongoose from "mongoose";

function randomJoinYear() {
    const startYear = 2008;
    const endYear = 2025;
    return Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;
  }

const UserSchema = new mongoose.Schema({
	externalId: {
		type: Number,
		required: true,
	},
	internalId: {
		type: Number,
		required: true,
		unique: true,
	},
	firstName: {
		type: String,
	},
	lastName: {
		type: String,
	},
	email: { type: String },
	username: {
		type: String,
	},
	password: {
		type: String,
	},
	birthDate: {
		type: String,
	},
    joinedAt: { 
        type: Number, 
        default: () => randomJoinYear() 
    },
	image: {
		type: String,
	},
	university: {
		type: String,
	},
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
