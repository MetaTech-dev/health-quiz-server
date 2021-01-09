const healthReportsData = [
  {
    id: "1d20d68d-e07a-43d0-9a8d-8b7a5ac5ec3e",
    personId: "23048073-d8e0-4b40-bb6a-72c5a1198f0e",
    bmi: 28.6,
  },
  {
    id: "e384e572-646c-487a-b5f7-c0b37653ae51",
    personId: "79c5a40e-011f-4d47-ab8b-2cb066acefe8",
    bmi: 28.6,
  },
  {
    id: "7aa9a777-4842-4078-834b-a80ceb981eb2",
    personId: "de9bf283-5626-48fe-87ca-688cbc381f30",
    bmi: 28.6,
  },
];

const resolvers = {
  Query: {
    healthReports: () => healthReportsData,
    healthReportById: (_parent, { id }) => healthReportsData.find((healthReport) =>
      healthReport.id === id
    ),
    healthReportByPersonId: (_parent, { personId }) => healthReportsData.find((healthReport) =>
      healthReport.personId === personId
    ),
  },
};

export default resolvers;
