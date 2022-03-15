const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema({
    userName: {
        type: String,
        unique: [true, 'This user exists already'],
        required: true,
        trim: true
    },
    // from stackoverflow user Harsha M V example 
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: [true, 'Email address is required'],
        unique: true,
        match: [
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please add a valid email address'
        ],
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (createdAtVal) => dateFormat(createdAtVal)
    },
    thoughts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Thought'
        }
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User'
        }
    ]   
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
    },
    id: false
    }
);

// get total count of thoughts and replies on retrieval
UserSchema.virtual('thoughtCount').get(function() {
    return this.thoughts.length;
});

// get total count of friends and replies on retrieval
UserSchema.virtual('friendCount').get(function() {
    return this.friends.length;
});

// create the User model using the UserSchema
const User = model('User', UserSchema);

// export the User model
module.exports = User;