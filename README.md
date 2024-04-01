 
# Task Manager Web Application
This is a web application built using HTML, CSS, and JavaScript. The application has the following basic features:
 
 *Ability to add new tasks.

 *View the list of tasks.

 *Mark tasks as completed.

## How to Run the Application Locally

To run the application locally, follow these steps:

1. Clone this repository to your local machine using the following command:
     git clone https://github.com/ykwizera/Web-Application-Containerization.git

2. Navigate to the project directory:
    cd application

3. Open the `index.html` file in a web browser.

## Running the Application Using Docker

You can also run the application using Docker. Make sure you have Docker installed on your machine.

1. Build the Docker image using the provided Dockerfile:
      docker build -t task-manager-app .

2. Run a Docker container using the built image:
      docker run -p 8080:80 my-node-app

3. Open a web browser and navigate to `http://localhost:8080` to access the application.

## Assumptions and Decisions

During the development process, the following assumptions and decisions were made:

- **Simple Implementation**: The focus was on creating a simple and lightweight task manager application without the use of any backend or database.

- **User Interface**: The user interface was kept minimalistic for ease of use and to prioritize functionality over aesthetics.

- **Port Selection**: The application runs on port 8080 by choice, but you can modify the port as needed.

## Presentation Deck

For a detailed presentation about the implementation, architecture, and features of the application, please refer to the [Presentation Deck](https://docs.google.com/presentation/d/1En-eOwTi67iPfRZW4aq1fvd-lKozuHOBKbgIR8zCPgA/edit?usp=sharing).



