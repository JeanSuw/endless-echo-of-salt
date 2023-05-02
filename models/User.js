const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        userName: 
        {
            type: String,
            unique: true,
            trim: true,
            required: true,
        },
        email: 
        {
            type: String,
            unique: true,
            required: true,
            // how to match?
        },
        thoughts:{
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        },
        users:{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    },
    {
        toJSON: {
        virtuals: true,
        },
        id: false,
    }
);

module.exports = User;