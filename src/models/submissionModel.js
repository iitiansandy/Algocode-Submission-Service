const mongoose = require('mongoose');


const submissionSchema = new mongoose.schema({
    userId: { type: String, 
        required: [true, "userId is required" ]
    },

    problemId: { type: String, 
        required: [true, "problemId is required" ]
    },

    code: {
        type: String,
        required: [true, "code is required" ]
    },

    language: {
        type: String,
        required: [true, "language is required" ]
    },

    status: {
        type: String,
        enum: ["PENDING", "SUCCESS", "RE", "TLE", "MLE", "WA"],
        default: "PENDING"
    }
}, {timestamps: true});


const Submission = mongoose.model("Submission", submissionSchema);

module.exports = Submission;


