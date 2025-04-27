const { LinearClient } = require('@linear/sdk');

// Create a client
const linearClient = new LinearClient({
  apiKey: process.env.LINEAR_API_KEY
});

async function createIssue() {
  try {
    // First, get all teams to find the right one
    const teams = await linearClient.teams();
    console.log('Available teams:');
    teams.nodes.forEach(team => {
      console.log(`- Team: ${team.name}, ID: ${team.id}`);
    });

    // Get the first team (you can adjust this later)
    const teamId = teams.nodes[0].id;
    
    // Create the issue using the correct method
    const issue = await linearClient.createIssue({
      title: "Test Issue from validation-and-integration branch",
      description: "This test issue was created via Linear MCP integration from the validation-and-integration branch of the Promerge Tracks project.",
      priority: 2,
      teamId
    });

    console.log('Issue created successfully!');
    console.log(`Issue URL: ${issue.url}`);
    console.log(`Issue ID: ${issue.id}`);
  } catch (error) {
    console.error('Error creating issue:', error);
  }
}

createIssue(); 