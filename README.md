# BFHL API

This is a REST API built with Node.js and Express for the BFHL challenge. It provides endpoints for mathematical operations and AI-based responses.

## Features

- **POST /bfhl**: Handles valid JSON input to perform:
  - Fibonacci sequence generation
  - Prime number filtering
  - LCM calculation
  - HCF calculation
  - AI-based question answering (using Google Gemini)
- **GET /health**: Returns the health status of the API.

## Tech Stack

- Node.js
- Express.js
- Google Generative AI (Gemini)

## Setup & Run Locally

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd bjaj
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   - Create a `.env` file in the root directory.
   - Add the following:
     ```env
     PORT=3000
     GEMINI_API_KEY=your_gemini_api_key_here
     ```

4. **Run the server:**
   ```bash
   node index.js
   ```

5. **Test the API:**
   - Use Postman or curl to test `POST /bfhl` and `GET /health`.

## API Documentation

### POST /bfhl

**Request Body** (one of the following keys is required):
- `fibonacci`: Integer
- `prime`: Integer Array
- `lcm`: Integer Array
- `hcf`: Integer Array
- `AI`: String (Question)

**Example Request:**
```json
{
  "fibonacci": 7
}
```

**Example Response:**
```json
{
  "is_success": true,
  "official_email": "YOUR CHITKARA EMAIL",
  "data": [0, 1, 1, 2, 3, 5, 8]
}
```

### GET /health

**Response:**
```json
{
  "is_success": true,
  "official_email": "YOUR CHITKARA EMAIL"
}
```

## Deployment

### Vercel
1. Push code to a public GitHub repository.
2. Import the project in Vercel.
3. Add `GEMINI_API_KEY` in Environment Variables.
4. Deploy.

### Render/Railway
1. Connect GitHub repo.
2. Set Build Command: `npm install`
3. Set Start Command: `node index.js`
4. Add Environment Variables.


