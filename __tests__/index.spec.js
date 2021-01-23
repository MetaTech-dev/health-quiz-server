import { gql } from "apollo-server";
import { createTestClient } from "apollo-server-testing";
import { server } from "../src/index";

const ROOT_QUERY = gql`
  {
    _rootQuery
  }
`;

const ROOT_MUTATION = gql`
  mutation {
    _rootMutation
  }
`;

describe("Queries", () => {
  const { query } = createTestClient(server);

  afterEach(() => server.stop);

  it("returns the correct string from the root query", async () => {
    const response = await query({ query: ROOT_QUERY });

    expect(response.data._rootQuery).toBe("root query is only a placeholder");
  });
});

describe("Mutations", () => {
  const { mutate } = createTestClient(server);

  afterEach(() => server.stop);

  it("returns the correct string from the root mutation", async () => {
    const response = await mutate({ mutation: ROOT_MUTATION });

    expect(response.data._rootMutation).toBe(
      "root mutation is only a placeholder"
    );
  });
});
