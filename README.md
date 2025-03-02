# Getting Started

## Installation
1. Run the following command to install dependencies:
   ```sh
   npm install
   ```

2. Create a `.env` file based on `.env-development`:
   - Copy the contents of `.env-development` and paste them into a new `.env` file.

3. Generate your own API keys:
   - Visit [Petfinder Developers](https://www.petfinder.com/developers/)
   - Generate your API keys and update the `.env` file with:
     ```sh
     VITE_PET_FINDER_API_KEY=your_api_key_here
     VITE_PET_FINDER_SECRET_KEY=your_secret_key_here
     ```

## Running the App
4. Start the development server:
   ```sh
   npm run dev
   ```
   - The application should now be running locally.

## Additional Notes
- Ensure you have the required environment variables set before running the application.
- If you encounter issues, verify your API keys and `.env` configuration.

