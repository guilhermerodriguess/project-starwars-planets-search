# Star Wars Planets Search

Welcome to my Star Wars Planets Search project repository! During this project, I developed a filter list of planets from the Star Wars universe using the Context API and Hooks to control global states.

## Project description

In Star Wars Planets Search, I created a web application that allows users to search and filter planets from the Star Wars universe. I used the Star Wars API to get the planet data and display it in an interactive table.

## Functionalities

- Request for the endpoint `/planets` of the Star Wars API and filling the table with the data obtained, except for the data in the "residents" column.
- Implementation of a text filter for the table, allowing the planets to be filtered as the name is typed.
- Creation of a filter for numerical values, using three selectors that make it possible to filter the data in the table according to the column and the chosen values.
- Possibility to add multiple numerical filters, which work together to refine the results of the table.
- Added resources for sorting columns in ascending or descending order, using a dropdown to select the base column and radio buttons to determine the sort order.
- Added remove buttons to delete numerical value filters individually or to remove all numeric filtering simultaneously.

## Technologies Used

In this project, I used the following technologies:

- React
- Context API
- Hooks

## How to Run the Project

To run the project on your local machine, follow the instructions below:

1. Clone this repository.
2. Navigate to the project directory: `cd star-wars-planets-search`.
3. Install the project's dependencies: `npm install`.
4. Run the project: `npm start`.
5. Access the application in your browser at `http://localhost:3000`.

## Skills Developed

During the development of this project, I improved my skills in the following areas:

- Use of Context API and Hooks to manage the global state of the application.
- Integration with an external API and manipulation of received data.
- Implementation of text filters and numerical filters in real time.
- Column sorting in ascending or descending order.

Feel free to explore the project's source code and contribute improvements. If you have any questions, I'm here to help. Enjoy Star Wars Planets Search!
