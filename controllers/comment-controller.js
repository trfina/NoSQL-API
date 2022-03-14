const { Comment, Pizza } = require('../models');

const commentController = {
    // add comment to pizza
    addComment({ params, body }, res) {
        console.log(body);
        Comment.create(body)
            .then(({ _id }) => {
                console.log(_id)
            })
    },

    // remove comment
    removeComment() {

    }
};

module.exports = commentController