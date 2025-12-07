# Gemini Project Overview: djoni.dev

## About the Project

This project is a personal website and blog built with Tanstack Start. It features a modern, responsive design and includes pages for a blog, projects, and an about me section. The site is internationalized, supporting both English and Indonesian.

## Key Technologies

*   **Framework**: Tanstack Start
*   **UI Library**: Mantine
*   **Styling**: PostCSS, Biome
*   **Content Management**: content-collections
*   **Internationalization**: react-intl
*   **Icons**: FontAwesome

## Project Structure

*   `src/routes/`: Contains the main pages of the application, with separate directories for each route (e.g., `blog`, `projects`).
*   `src/components/`: Contains reusable React components used throughout the application.
*   `src/contents/`: Contains the markdown files for blog posts, project descriptions, and other content.
*   `messages/`: Contains the translation files for `react-intl`.
*   `public/`: Contains static assets like images and fonts.

## Getting Started

To run the project locally, follow these steps:

1.  Install the dependencies:

    ```bash
    pnpm install
    ```

2.  Run the development server:

    ```bash
    pnpm dev
    ```

3.  Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

*   `dev`: Starts the development server.
*   `build`: Creates a production build of the application.
*   `start`: Starts the production server.
*   `lint`: Lints the code using Biome.
*   `format`: Formats the code using Biome.
*   `storybook`: Starts the Storybook development server.
*   `build-storybook`: Builds the Storybook for deployment.

## Tanstack Start

When dealing with Tanstack Start, refer to the official documentation for more details: https://context7.com/websites/tanstack_start_framework_react/llms.txt?tokens=10000