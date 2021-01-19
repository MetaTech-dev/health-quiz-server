import { v4 as uuid } from "uuid";

let goalsTestData = [ 
    { 
        id: 'fe6531c3-585c-4b9b-b0ca-fe648dfe7ded', 
        title: "Lose Weight", 
    }, 
    { 
        id: '18ef2dbd-2d1f-4e25-bf9b-afab7d153998', 
        title: "Exercise More",
    },
]

const resolvers = {
    Query: {
      goals: () => goalsTestData,
      goal: (_parent, { id }) => goalsTestData.find((goal) => goal.id === id),
    },
    Mutation: {
      createGoal: (_parent, { title }) => {
        const newGoal = {
          id: uuid(),
          title,
        };
        goalsTestData.push(newGoal);
        return newGoal;
      },
      updateGoal: (_parent, { id, title }) => {
        const goalIndex = goalsTestData.findIndex((goal) => goal.id === id);
        if (title) {
          goalsTestData[goalIndex].title = title;
        }
        return goalsTestData[goalIndex];
      },
      deleteGoal: (_parent, { id }) => {
        goalsTestData = goalsTestData.filter((goal) => goal.id !== id);
        return "Success";
      },
    },
  };
  
  export default resolvers;
  