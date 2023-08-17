#Exchange Rate API

This application allows users to effortlessly convert USD to various other currencies using a real-time exchange rate API. The application provides real-time conversions, considering the ever-fluctuating nature of the financial markets.

#Features

Convert USD to Other Currencies
Converts a user's specified amount in USD to:

Euros (Given the current exchange rate).
Pounds (Given the current exchange rate).
Yen (Given the current exchange rate).
Rupees (Given the current exchange rate).
South Korean Won (Given the current exchange rate).

#Error Handling


Provides user feedback for invalid API responses.
Notifies users for unsupported or invalid currency inputs.

#Technologies Used

HTML
CSS (Bootstrap)
JavaScript (ES6)
Webpack
NPM
Node
Eslintrc
Babelrc
Gitignore
Jest (for testing)

#Usage

Clone the repository:

git clone git clone https://github.com/izzy503/exchangeRateApi.git

#Installation and Setup:
Ensure you have node and npm installed. Navigate to the project directory and install the required packages:

// Install dependencies listed in package.json.
$ npm install 

// Confirm the environment is set up and a live server starts.
$ npm run start 

#Commit any new changes:

$ git add . 
$ git commit -m "Your commit message here"

# API Key Setup Instructions:

### Step 1: Obtain Your Own API Key
1. Navigate to the [ExchangeRate-API](https://www.exchangerate-api.com/) site.
2. Input your email address and click the "Get Free Key" button.
3. Create an account by entering your email, first name, and a password.
4. Agree to the terms of use and click "Get Started!"
5. Once registered, you'll be taken to a dashboard. Here, you'll find your unique API key as well as information about your remaining API calls for the month. Keep this key safe and do not share it with others.

### Step 2: Setting Up the API Key in the Project
1. After cloning the repository to your local machine, navigate to the root directory of the project using your terminal or command prompt.
2. Create a new file named `.env` in the root directory.
3. Open the `.env` file with a text editor and enter the following:

```
API_KEY=your_unique_api_key
```

Replace `your_unique_api_key` with the API key you obtained from the ExchangeRate-API site.

4. Save and close the `.env` file.

### Note: 
- The `.env` file is used to keep sensitive information, like API keys, private. If you're using Git, ensure that `.env` is listed in your `.gitignore` file to prevent it from being shared on GitHub or other version control platforms.
- Avoid making excessive API calls (like accidental infinite loops) during development, as the Free Plan allows for 2000 API calls per month.

### Step 3: Accessing the API Key in Your Code
Whenever you need to use the API key in your JavaScript code, you can access it with `process.env.API_KEY` (assuming you're using a platform or tool like Node.js that recognizes the `.env` setup).

---

Customization

To add more currencies or enhance the functionalities, modify the JavaScript logic in the src/index.js file.

Contributing

Contributions, issues, and feature requests are welcome! Feel free to open an issue or submit a pull request.

License

This project is licensed under the ISC License. See the LICENSE file for details.

For any issues or concerns, please contact me at ipadilla2280@gmail.com.

© Aug 12, 2023, Israel E Padilla



