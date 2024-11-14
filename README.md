
![Project Logo](https://github.com/asimar007/Cross-Region-Migration-of-AWS-EBS-Volumes/blob/main/Screenshot/customRecomSys/Project%20Thumbnail.png?raw=true)
# Next-Gen Recommendation System

A custom recommendation engine inspired by platforms like YouTube and Google Search, designed to provide personalized content recommendations using AI and machine learning.

## Screenshots

 ### Home Page 
 ![Home Page](https://github.com/asimar007/Cross-Region-Migration-of-AWS-EBS-Volumes/blob/main/Screenshot/customRecomSys/HomePage.png?raw=true)

 *User-friendly interface showcasing recommended content.*

 ### Search and Recommendations 
 ![Search and Recommendations](https://github.com/asimar007/Cross-Region-Migration-of-AWS-EBS-Volumes/blob/main/Screenshot/customRecomSys/Search.png?raw=true) 

*When users search or interact with content, related topics appear in real-time for seamless navigation.* 

### Video Player with Related Suggestions 

![Video Player with Related Suggestions](https://github.com/asimar007/Cross-Region-Migration-of-AWS-EBS-Volumes/blob/main/Screenshot/customRecomSys/Upcoming.png?raw=true)

 *Video player interface with recommended videos tailored to user preferences.*
 
## Table of Contents

- [About](#about)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [What I Learned](#what-i-learned)
- [Usage](#usage)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)


## About

This Custom Recommendation System project is built to deliver user-specific content recommendations. Using vector embeddings, language models, and real-time data storage, it provides a highly personalized experience that mirrors leading platforms. This project combines frontend efficiency with the power of AI to showcase an intuitive, scalable recommendation engine.

## Tech Stack

- **Next.js with TypeScript**: For building a high-performance, scalable frontend.
- **Convex DB**: To handle vector embeddings and real-time data storage.
- **Voyage AI**: Provides AI-driven recommendation algorithms.
- **LangChain.js**: Facilitates the integration and management of language models (LLMs).
- **Tailwind CSS**: Ensures a responsive and visually appealing design.
- **Vercel**: Seamless deployment platform for scalable web applications.


## Features 

- **Dynamic Content Recommendations**: Uses AI and vector embeddings to analyze user interactions and provide recommendations for similar or related content in real-time. 
- **Contextual Search Optimization**: Personalized search results improve over time based on user preferences, delivering more relevant recommendations.
-  **Intelligent Video Queue**: Automatically queues up similar content based on the currently viewed video or search, giving users a seamless viewing experience. 
- **Customizable with Convex DB and LangChain.js**: Configurable to support various data sources and language models, making the recommendation system flexible for different use cases. 
- **Smooth Integration with Voyage AI**: Utilizes Voyage AI algorithms for complex recommendation models, offering powerful insights and adaptability. 

- **Responsive and Modern UI with Tailwind CSS**: Provides a sleek, intuitive interface optimized for both desktop and mobile views, ensuring an engaging user experience across devices.

## What I Learned

 - **AI-Driven Recommendation Systems**: Gained hands-on experience in building recommendation engines, understanding how vector embeddings and language models can drive personalized content.

- **Integration of LLMs with LangChain.js**: Learned how to manage and integrate language models effectively to support content recommendations. 

- **Data Handling with Convex DB**: Understood how to utilize Convex DB for real-time data handling and vector embeddings, crucial for creating fast and reliable recommendations. 

- **Frontend Development with Next.js and TypeScript**: Enhanced my knowledge of Next.js for building server-rendered applications and using TypeScript to enforce type safety across the project. 

- **UI Design with Tailwind CSS**: Improved my ability to design responsive, modern UIs, making the user interface engaging and visually appealing.

## Usage

Once launched, the recommendation system can be customized for various content types by adjusting the settings in the LangChain.js and Convex DB integrations. It is designed to provide real-time recommendations based on user interactions.

## Getting Started

### Prerequisites

- Node.js v18+ and npm
- Basic understanding of TypeScript and Next.js

### Installation

#### 1. Clone this repository:
   ```
   git clone https://github.com/asimar007/Custom-Recommendation-System.git
   cd Custom-Recommendation-System
   ```
#### 2. Install Dependencies
```
npm install
```
#### 3. Set Up API Keys

- **Voyage AI API Key**

1.  Go to [Voyage AI's website](https://voyageai.com/) and sign up or log in.
2.  In the dashboard, create an API key for your project.
3.  Copy the API key and add it to your `.env` file:
```
NEXT_PUBLIC_VOYAGEAI_API_KEY="" // Your VOYAGEAI API Key
```
#### 4. Run the Convex
```
npx convex dev
```
#### 5. Run the Development Server
Start the server to launch the project locally:
```
npm run dev
```
