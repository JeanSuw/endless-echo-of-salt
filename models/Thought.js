const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
    {
        thoughtText: 
        {
            type: String,
            required: true,
            maxLength: 280
        },
        createdAt: 
        {
            type: Date,
            default: Date.now
            // getters method for date
        },
        userName:{
            type: String,
            required: true
        },
        reaction: [], // Array of nested documents created with the reactionSchema
    },
    

    {
        toJSON: {
        virtuals: true,
        },
        id: false,
    }
);

module.exports = Thought;