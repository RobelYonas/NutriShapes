# Commit Message Schema

To maintain clarity and consistency in our project's version control history, we use a structured commit message schema. This helps team members quickly understand the changes made and the context of each commit. Below is the schema and examples of how to craft effective commit messages.

## Schema

Each commit message should consist of a **prefix** enclosed in brackets, followed by a **description** of the changes. The prefix helps to quickly identify the type of change, and the description provides a concise summary starting with a verb in the present tense. Optionally, more detailed explanations can follow if necessary.

### Prefixes

- `[Init]`: Initial setup and configuration changes.
- `[Feat]`: New features or significant enhancements.
- `[Fix]`: Bug fixes or corrections.
- `[UI]`: Updates related to the user interface.
- `[Backend]`: Changes specifically in the backend code.
- `[DB]`: Database related changes (schemas, migrations).
- `[Refactor]`: Code refactoring without changing any behavior.
- `[Docs]`: Documentation-only changes.
- `[Test]`: Adding or modifying tests.
- `[Chore]`: Maintenance tasks, scripts, and other non-functional changes.

### Descriptions

Follow the prefix with a brief summary of the change. Start with a verb such as "Add", "Fix", "Update", "Remove", "Refactor", etc.

### Detailed Explanation (Optional)

If necessary, a more detailed explanation can follow on a new line, providing additional context or justifying why the change was necessary.

## Example Commit Messages

Here are several examples illustrating how to use this schema:

- **Initial Setup:**
[Init] Set up project structure and initial configuration
Establish the basic folder structure for frontend and backend. Include configuration files for Webpack and Babel in the frontend directory.

- **Adding a New Feature:**
[Feat] Implement user login functionality
Add routes, controllers, and models to support user authentication. Include basic validation of credentials.


- **Fixing a Bug:**
[Fix] Correct the calorie counting error in the recipe module
Resolve the issue where calorie totals were not accurately accumulating by adjusting the aggregation logic.


- **UI Enhancement:**
[UI] Add a hero section to the landing page
Design and implement a responsive hero section with dynamic content based on user goals.
