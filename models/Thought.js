const { Schema, model } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: function () { 
                return new Types.ObjectId(); // Default value is set to a new ObjectId
            }
        },
        reactionbody: {
            type: String,
            required: true,
            maxLength: 280
        },
        userName: {
            type: String,
            required: true
        },
        createdAt:{
            type: Date,
            default: Date.now,
            // Use a getter method to format the timestamp on query
        }
    },
    {
        toJSON: {
        virtuals: true,
        },
        id: false,
    }
);


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
            default: Date.now,
            // getters method for date
            get: getTime 
        },
        userName:{
            type: String,
            required: true
        },
        reactionList: [reactionSchema], // Array of nested documents created with the reactionSchema
    },
    
    {
        toJSON: {
        virtuals: true,
        },
        id: false,
    }
);

function getTime(whatDate){
    return ''; // 
}

thoughtSchema.virtuals().get(function (){
    return this.reactionList.length;
});

const Thought = model();

module.exports = Thought;