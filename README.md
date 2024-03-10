# Drinks App

## Introduction

Drinks App is a simple application for browsing and discovering various drinks. It fetches data from an external API provided by The Cocktail DB. The application consists of two main screens: a list of drinks and a details page for each drink. It also includes a White-Label App (WLA) setting, allowing for branding and configuration through a JSON file.

## Features

- Display list of drinks with images and names.
- Provide detailed information about each drink, including ingredients, instructions, and served-in details.
- Support for multiple languages through the API.
- WLA configuration for branding and UI customization.

### Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Run `yarn` to install dependencies.
3. Run `yarn start` to start the app.

### Configuration

1. Update the `app-config.json` file in the `src/assets` directory to customize UI elements such as logo, navigation links, intro section, drink types, and API endpoints.
2. Modify the WLA settings according to your requirements.

### Running the App

- Use the following command to run the application locally:
- Open your browser and navigate to `http://localhost:4200` to view the app.

## Project Structure

The project follows a modular structure with Angular components and Nx workspace for managing monorepos. Key directories include:

- `src/app`: Contains Angular components, services, and state management using NgRx.
- `src/assets`: Contains static assets such as images and configuration files.

## Architecture

The application follows a container/presenter pattern for components, ensuring separation of concerns and maintainability. NgRx is used for global state management.

## Design Decisions

- Used Nx workspace for better project organization and scalability.
- Leveraged NgRx for state management to maintain a predictable and centralized state.
- Implemented WLA settings to enable branding and UI customization.

## Configuration

The application utilizes a JSON configuration file (`config.json`) located in the `src/assets` directory. This file allows for easy customization of various aspects of the application's UI and behavior.

### UI Configuration

The `ui` section of the configuration file controls the user interface elements of the application. Here's a breakdown of the available options:

- `name`: The name of the application, displayed in the header or title bar.
- `logo`: The URL of the logo image used in the application.
- `navigationLinks`: An array of objects defining navigation links for the application. Each object contains `name` (the display name of the link) and `url` (the URL or route to navigate to).
- `intro`: Configuration for the introductory section displayed on the home screen.
  - `enable`: A boolean value indicating whether to enable the introductory section.
  - `title`: The title or heading of the introductory section.
  - `image`: The URL of the image displayed in the introductory section.
  - `description`: A brief description or text content for the introductory section.
- `types`: An array of objects defining drink types or categories available in the application. Each object contains `name` (the display name of the type) and `value` (the corresponding value used for filtering drinks).
- `defaultType`: The default drink type to display when the application loads.
- `drinksPerDesktopRow`: The number of drinks displayed per row on desktop devices.
- `drinksPerMobileRow`: The number of drinks displayed per row on mobile devices.
- `detailShowIngredients`: A boolean value indicating whether to display ingredients on the drink details page.
- `detailShowServedIn`: A boolean value indicating whether to display serving details on the drink details page.
- `detailShowInstructions`: A boolean value indicating whether to display instructions on the drink details page.

### API Configuration

The `api` section of the configuration file defines the base URL and endpoints for fetching data from the external API. Here's a brief overview:

- `baseUrl`: The base URL of the external API.
- `endpoints`: An object containing endpoint URLs for different API operations. Currently, it includes `list` (for fetching a list of drinks) and `details` (for fetching details of a specific drink).

### Usage

To customize the application's UI elements and behavior, simply modify the values in the `config.json` file according to your requirements. Changes made to this file will reflect directly in the application, allowing for easy branding, UI adjustments, and API endpoint configuration.
