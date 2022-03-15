const { Schema, model } = require('mongoose');

const ThoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    userName: {
        type: String,
        required: true
    },
}, {
    toJSON: {
        virtuals: true
    },
    id: false
});

// ThoughtSchema.virtual('reactionCount').get(function () {
//     return this.reactions.length;
// });

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;