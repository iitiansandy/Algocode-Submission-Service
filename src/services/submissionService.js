const submissionProducer = require('../producers/submissionQueueProducer');

class SubmissionService {
    constructor(submissionRepository) {
        this.submissionRepository = submissionRepository;
    }
    async pingCheck() {
        return "Pong";
    }

    async addSubmission(submission) {
        const submission = this.submissionRepository.createSubmission(submission);

        if (!submission) {
            throw { message: "Not able to create submission"}
        };

        console.log(submission);
        const response = await submissionProducer(submission);
        return { queResponse: response, submission};
    }
}

module.exports = SubmissionService;