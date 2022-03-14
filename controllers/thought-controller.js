const { Thought, User } = require('../models');

const thoughtController = {
    // add thought to user
    addThought({ params, body }, res) {
        console.log(body);
        Thought.create(body)
            .then(({ _id }) => {
                console.log(_id)
            })
    },

    // remove thought
    removeThought() {

    }
};

module.exports = thoughtController