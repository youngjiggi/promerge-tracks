const { LinearClient } = require('@linear/sdk');

// Create a client
const linearClient = new LinearClient({
  apiKey: process.env.LINEAR_API_KEY
});

// Task data organized by category
const tasks = [
  // Core Infrastructure Tasks
  { 
    title: "1.1. Set up Next.js project with TypeScript and Tailwind CSS",
    description: "Initialize the project with Next.js framework, TypeScript for type safety, and Tailwind CSS for styling. Part of the validation-and-integration branch tasks.",
    category: "Core Infrastructure",
    priority: 1
  },
  { 
    title: "1.2. Configure PostgreSQL database and Drizzle ORM",
    description: "Set up PostgreSQL database and configure Drizzle ORM for database schema management. Part of the validation-and-integration branch tasks.",
    category: "Core Infrastructure",
    priority: 1
  },
  { 
    title: "1.3. Implement better-auth authentication system",
    description: "Install better-auth and configure email/password authentication, social login providers, and two-factor authentication. Part of the validation-and-integration branch tasks.",
    category: "Core Infrastructure",
    priority: 1
  },
  { 
    title: "1.4. Create protected routes with Next.js middleware",
    description: "Implement route protection using Next.js middleware to secure authenticated routes. Part of the validation-and-integration branch tasks.",
    category: "Core Infrastructure",
    priority: 2
  },
  
  // UI Components Tasks
  { 
    title: "2.1. Implement PositionCard component",
    description: "Create a reusable PositionCard component for displaying trade positions. Part of the validation-and-integration branch tasks.",
    category: "UI Components",
    priority: 2
  },
  { 
    title: "2.2. Create StockChart component with TradingView's Lightweight Charts",
    description: "Implement interactive stock charts using TradingView's Lightweight Charts library. Part of the validation-and-integration branch tasks.",
    category: "UI Components",
    priority: 2
  },
  { 
    title: "2.3. Build CSVUpload component with Papaparse",
    description: "Create a component for uploading and parsing CSV files using Papaparse for trade data import. Part of the validation-and-integration branch tasks.",
    category: "UI Components",
    priority: 2
  },
  { 
    title: "2.4. Develop StopSettingsForm component",
    description: "Build a form component for configuring stop loss and trailing stop settings. Part of the validation-and-integration branch tasks.",
    category: "UI Components", 
    priority: 2
  },
  { 
    title: "2.5. Create AlertNotification component",
    description: "Create a notification component for displaying alerts about stop conditions and other important events. Part of the validation-and-integration branch tasks.",
    category: "UI Components",
    priority: 3
  },
  { 
    title: "2.6. Build main dashboard layout with responsive design",
    description: "Implement the main dashboard layout with the four panels (header, left panel for chatbot, central panel for charts, bottom panel for portfolio) with responsive design. Part of the validation-and-integration branch tasks.",
    category: "UI Components",
    priority: 2
  },
  
  // AI Integration Tasks
  { 
    title: "3.1. Set up Vercel AI SDK for chatbot functionality",
    description: "Install and configure Vercel AI SDK for chatbot integration. Include environment variable configuration for AI provider. Part of the validation-and-integration branch tasks.",
    category: "AI Integration",
    priority: 1
  },
  { 
    title: "3.2. Implement xAI/Grok chatbot interface in left panel",
    description: "Create chatbot UI with message history and input field in the left panel of the dashboard. Part of the validation-and-integration branch tasks.",
    category: "AI Integration",
    priority: 2
  },
  { 
    title: "3.3. Create TAB context functionality for contextual awareness",
    description: "Implement the TAB mode to allow selecting panels for context in the chatbot. Part of the validation-and-integration branch tasks.",
    category: "AI Integration",
    priority: 2
  },
  { 
    title: "3.4. Implement custom tool for Financial Modeling Prep (FMP) API",
    description: "Create a custom tool for the Grok chatbot to access Financial Modeling Prep API data. Part of the validation-and-integration branch tasks.",
    category: "AI Integration",
    priority: 2
  },
  
  // Data Management Tasks
  { 
    title: "4.1. Implement CSV upload functionality",
    description: "Develop functionality to upload and process CSV files for trade data import. Part of the validation-and-integration branch tasks.",
    category: "Data Management",
    priority: 2
  },
  { 
    title: "4.2. Develop portfolio dashboard with real-time pricing",
    description: "Create portfolio dashboard with real-time pricing data from FMP API. Part of the validation-and-integration branch tasks.",
    category: "Data Management",
    priority: 2
  },
  { 
    title: "4.3. Add stop loss and trailing stop features",
    description: "Implement stop loss and trailing stop functionality with support for multiple entry/exit points. Part of the validation-and-integration branch tasks.",
    category: "Data Management",
    priority: 2
  },
  { 
    title: "4.4. Connect charts with financial data",
    description: "Integrate real-time financial data with chart visualizations. Part of the validation-and-integration branch tasks.",
    category: "Data Management",
    priority: 2
  },
  
  // MCP Integration Tasks
  { 
    title: "5.1. Configure and test all MCP servers",
    description: "Set up and verify all MCP servers in the project configuration. Part of the validation-and-integration branch tasks.",
    category: "MCP Integration",
    priority: 1
  },
  { 
    title: "5.2. Implement BrowserTools MCP for debugging",
    description: "Configure and test BrowserTools MCP for frontend debugging and testing. Part of the validation-and-integration branch tasks.",
    category: "MCP Integration",
    priority: 2
  },
  { 
    title: "5.3. Set up Linear MCP for task tracking",
    description: "Integrate Linear MCP for project management and task tracking. Part of the validation-and-integration branch tasks.",
    category: "MCP Integration",
    priority: 2
  },
  { 
    title: "5.4. Configure GitHub MCP for repository management",
    description: "Set up GitHub MCP for repository operations and code management. Part of the validation-and-integration branch tasks.",
    category: "MCP Integration",
    priority: 2
  },
  { 
    title: "5.5. Test Sequential Thinking MCP for complex workflows",
    description: "Implement and test Sequential Thinking MCP for handling complex development workflows. Part of the validation-and-integration branch tasks.",
    category: "MCP Integration",
    priority: 3
  },
  
  // Testing and Validation Tasks
  { 
    title: "6.1. Create unit tests for critical components",
    description: "Develop unit tests for core components to ensure reliability. Part of the validation-and-integration branch tasks.",
    category: "Testing and Validation",
    priority: 2
  },
  { 
    title: "6.2. Perform integration testing for Phase 1 features",
    description: "Execute comprehensive integration testing for Phase 1 features before merging to main. Part of the validation-and-integration branch tasks.",
    category: "Testing and Validation",
    priority: 1
  },
  { 
    title: "6.3. Test interactions between components",
    description: "Verify proper interactions between related components and system parts. Part of the validation-and-integration branch tasks.",
    category: "Testing and Validation",
    priority: 2
  },
  { 
    title: "6.4. Verify chatbot functionality",
    description: "Test the chatbot integration to ensure proper responses and tool usage. Part of the validation-and-integration branch tasks.",
    category: "Testing and Validation",
    priority: 2
  },
  { 
    title: "6.5. Test authentication flows",
    description: "Verify all authentication flows including email/password, social login, and 2FA. Part of the validation-and-integration branch tasks.",
    category: "Testing and Validation",
    priority: 1
  },
  { 
    title: "6.6. Perform cross-browser compatibility testing",
    description: "Test the application across different browsers to ensure consistent functionality. Part of the validation-and-integration branch tasks.",
    category: "Testing and Validation",
    priority: 3
  },
  
  // Documentation Tasks
  { 
    title: "7.1. Update technical documentation",
    description: "Create and update technical documentation for the project including architecture diagrams and API specs. Part of the validation-and-integration branch tasks.",
    category: "Documentation",
    priority: 2
  },
  { 
    title: "7.2. Create user guides",
    description: "Develop user guides and documentation for end-users of the application. Part of the validation-and-integration branch tasks.",
    category: "Documentation",
    priority: 3
  },
  { 
    title: "7.3. Document API integrations",
    description: "Document all API integrations including FMP API, Vercel AI, and authentication services. Part of the validation-and-integration branch tasks.",
    category: "Documentation",
    priority: 2
  },
  
  // Deployment Tasks
  { 
    title: "8.1. Configure Vercel deployment",
    description: "Set up Vercel deployment pipeline for the application. Part of the validation-and-integration branch tasks.",
    category: "Deployment",
    priority: 2
  },
  { 
    title: "8.2. Set up environment variables in Vercel dashboard",
    description: "Configure all necessary environment variables in the Vercel dashboard. Part of the validation-and-integration branch tasks.",
    category: "Deployment",
    priority: 2
  },
  { 
    title: "8.3. Configure domain settings",
    description: "Set up domain configuration for the deployed application. Part of the validation-and-integration branch tasks.",
    category: "Deployment",
    priority: 3
  },
  { 
    title: "8.4. Monitor performance and fix any issues",
    description: "Track application performance after deployment and resolve any identified issues. Part of the validation-and-integration branch tasks.",
    category: "Deployment",
    priority: 2
  }
];

async function createLinearTasks() {
  try {
    // Get all teams
    const teams = await linearClient.teams();
    console.log('Available teams:');
    teams.nodes.forEach(team => {
      console.log(`- Team: ${team.name}, ID: ${team.id}`);
    });
    
    const teamId = teams.nodes[0].id;
    console.log(`Using team ID: ${teamId}`);
    
    // Create each task
    for (const task of tasks) {
      console.log(`Creating task: ${task.title}`);
      
      try {
        const issue = await linearClient.createIssue({
          title: task.title,
          description: task.description,
          teamId: teamId,
          priority: task.priority,
          // Add a label for the branch and category if needed
          labels: [`validation-and-integration`, task.category]
        });
        
        console.log(`Created task: ${task.title} - ${issue.id}`);
      } catch (taskError) {
        console.error(`Error creating task "${task.title}":`, taskError);
      }
      
      // Wait a bit between API calls to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    console.log('All tasks created successfully!');
  } catch (error) {
    console.error('Error creating tasks:', error);
  }
}

createLinearTasks(); 