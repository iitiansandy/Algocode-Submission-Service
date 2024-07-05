const { fetchProblemDetails } = require('../apis/problemAdminApi');
const SubmissionCreationError = require('../errors/submissionCreationError');
const submissionProducer = require('../producers/submissionQueueProducer');

class SubmissionService {
    constructor(submissionRepository) {
        this.submissionRepository = submissionRepository;
    }
    async pingCheck() {
        return "Pong";
    }

    async addSubmission(submissionPayload) {
        // hit the problem admin service and fetch the problem details,
        const problemId = submissionPayload.problemId;
        const problemAdminApiResponse = await fetchProblemDetails(problemId);

        if (!problemAdminApiResponse) {
            throw new SubmissionCreationError('Failed to create a submission in repository');
        };

        console.log(problemAdminApiResponse);

        const languageCodeStub = problemAdminApiResponse.data.codeStubs.find(codeStub => codeStub.language.toLowerCase() === submissionPayload.language.toLowerCase());

        console.log(languageCodeStub) 

        submissionPayload.code = languageCodeStub.startSnippet + "\n\n" + submissionPayload.code + "\n\n" + languageCodeStub.endSnippet;
        // then we are going to create the entry in DB
        const submission = await this.submissionRepository.createSubmission(submissionPayload);

        if (!submission) {
            throw new SubmissionCreationError('Failed to create a submission in the repository');
        };

        console.log(submission);
        
        const response = await submissionProducer({
            [submission._id]: {
                code: submission.code,
                language: submission.language,
                inputCase: problemAdminApiResponse.data.testCases[0].input,
                outputCase: problemAdminApiResponse.data.testCases[0].output,
            }
        });

        return { queResponse: response, submission};
    }
}

module.exports = SubmissionService;