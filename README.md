# News Aggregator

`news-aggregator` is a React-based application that aggregates news articles from various sources, allowing users to search, filter, and customize their news feed based on their preferences. This project uses Redux for state management and Vite for fast development builds.

## Features

- **Search Functionality:** Search for articles based on keywords.
- **Filtering:** Filter articles by date, category, and source.
- **User Preferences:** Customize news feed by selecting preferred categories and sources.
- **Responsive Design:** Works well on both mobile and desktop devices.
- **Docker Support:** Containerized for easy deployment.

## Technologies

- **Frontend:** React, Redux, Vite
- **APIs:** New York Times API, NewsAPI, The Guardian API
- **Containerization:** Docker

## Getting Started

### Prerequisites

- **Node.js** (v20.13.1)
- **Docker** (for containerization)

### Installation

1.  **Clone the Repository:**

        bash

        Copy code

        `https://github.com/aminaradoni24/news-aggregator-innoscripta.git

    cd news-aggregator-innoscripta`

2.  **Install Dependencies:**

    bash

    Copy code

    `npm install`

### Running the Application

1.  **Development Mode:**

    bash

    Copy code

    `npm run dev`

    This will start the development server and you can access the application at http://localhost:3000.

2.  **Build and Run with Docker:**

    Build the Docker image:

    bash

    Copy code

    `docker build -t news-aggregator-innoscripta .`

    Run the Docker container:

    bash

    Copy code

    `docker run -p 8080:80 news-aggregator-innoscripta`

    Access the application at http://localhost:8080.

### Using the Application

1.  **Search for Articles:** Enter keywords in the search bar and click "Search".
2.  **Filter Articles:** Use the filters to narrow down results by date, category, and source.
3.  **Save Preferences:**
    - Go to the preferences page to select preferred categories and sources.
    - Click "Save Preferences" to apply and redirect to the home page.

### Configuration

- **API Keys:** Ensure you have the required API keys and set them in `.env` file with the following variables:
  - `VITE_APP_NYT_API_KEY`
  - `VITE_APP_NEWS_API_KEY`
  - `VITE_APP_GUARDIAN_API_KEY`

### Contributing

Contributions are welcome! Please follow the standard Git workflow for contributing to this project.

1.  **Fork the Repository**
2.  **Create a Feature Branch:**

    bash

    Copy code

    `git checkout -b feature/your-feature`

3.  **Commit Your Changes:**

    bash

    Copy code

    `git commit -am 'Add new feature'`

4.  **Push to the Branch:**

    bash

    Copy code

    `git push origin feature/your-feature`

5.  **Create a Pull Request**
