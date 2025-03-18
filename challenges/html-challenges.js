const htmlChallenges = {
    beginner: [
        {
            id: "html-1",
            title: "HTML Basics",
            challenges: [
                {
                    id: "html-1-1",
                    title: "Your First HTML Page",
                    description: "Create a basic HTML page structure",
                    points: 100,
                    template: `<!DOCTYPE html>
<html>
  <!-- Add your code here -->
</html>`,
                    solution: `<!DOCTYPE html>
<html>
  <head>
    <title>My First Page</title>
  </head>
  <body>
    <h1>Hello World!</h1>
  </body>
</html>`,
                    hints: ["Remember the head and body tags", "Every page needs a title"]
                },
                {
                    id: "html-1-2",
                    title: "Working with Lists",
                    description: "Create an ordered and unordered list",
                    points: 150,
                    template: `<body>
  <!-- Create a shopping list -->
</body>`,
                    solution: `<body>
  <h2>My Shopping List</h2>
  <ul>
    <li>Apples</li>
    <li>Bread</li>
    <li>Milk</li>
  </ul>
</body>`
                }
            ]
        }
    ],
    intermediate: [
        {
            id: "html-2",
            title: "Forms and Tables",
            challenges: [
                {
                    id: "html-2-1",
                    title: "Contact Form",
                    points: 200,
                    template: `<!-- Create a contact form -->`,
                    solution: `<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required>
  
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  
  <button type="submit">Send</button>
</form>`
                }
            ]
        }
    ]
};
