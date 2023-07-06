TypeScript Project 

This project is written in TypeScript. 

Project Structure

Our project has two main directories:
- './src': This is where all our TypeScript files reside.
- './dist': This is where our compiled JavaScript files will be output to.

Getting Started

To get started with this project, please follow the instructions below.

Please note that to compile this TypeScript code, you will need to enable "experimentalDecorators" and "emitDecoratorMetadata" in your tsconfig.json file.

Prerequisites

Ensure you have Node.js (https://nodejs.org/) installed. 

Installing

To install the project:

1. Open your terminal and navigate to the project directory.
2. Run the following command to install the project dependencies: npm install
3. Run the following command to install lite-server as a dev dependency: npm install --save-dev lite-server

Configuration

The TypeScript configuration is located in the 'tsconfig.json' file in the root directory.
The lite-server configuration is set in the 'package.json' file. We have already added the line "start": "lite-server". 

Running the Project

To run the project:
1. Open your terminal and navigate to the project directory.
2. Run the following command to start the lite-server: npm start
3. Open a second terminal (still in the project directory), and run the following command to have TypeScript watch and automatically compile your files: tsc -w

Now, your project is running and TypeScript is watching your files for changes.
