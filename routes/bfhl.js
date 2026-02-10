const express = require('express');
const router = express.Router();
const { getFibonacciSequence, calculateLCM, calculateHCF, isPrime } = require('../utils/mathUtils');
const { getAIResponse } = require('../utils/aiUtils');

const EMAIL = "pranshu2259.be23@chitkara.edu.in";

// GET /health
router.get('/health', (req, res) => {
    res.status(200).json({
        is_success: true,
        official_email: EMAIL
    });
});

// POST /bfhl
router.post('/bfhl', async (req, res) => {
    try {
        const { fibonacci, prime, lcm, hcf, AI } = req.body;
        let data;

        if (fibonacci !== undefined) {
            const n = parseInt(fibonacci);
            if (isNaN(n)) throw new Error("Invalid input for fibonacci");
            data = getFibonacciSequence(n);
        }
        else if (prime !== undefined) {
            if (!Array.isArray(prime)) throw new Error("Invalid input for prime");
            // Filter invalid numbers from array and check for primes
            data = prime.filter(num => {
                const n = parseInt(num);
                return !isNaN(n) && isPrime(n);
            });
        }
        else if (lcm !== undefined) {
            if (!Array.isArray(lcm)) throw new Error("Invalid input for lcm");
            data = calculateLCM(lcm);
        }
        else if (hcf !== undefined) {
            if (!Array.isArray(hcf)) throw new Error("Invalid input for hcf");
            data = calculateHCF(hcf);
        }
        else if (AI !== undefined) {
            if (typeof AI !== 'string') throw new Error("Invalid input for AI");
            // Enforce single word response via prompt engineering
            const enrichedPrompt = `Answer the following question with a strictly single word: "${AI}"`;
            data = await getAIResponse(enrichedPrompt);
        }
        else {
            return res.status(400).json({
                is_success: false,
                official_email: EMAIL,
                message: "Invalid request format. Expected one of: fibonacci, prime, lcm, hcf, AI"
            });
        }

        res.json({
            is_success: true,
            official_email: EMAIL,
            data: data
        });

    } catch (error) {
        console.error("Error processing request:", error);
        res.status(400).json({
            is_success: false,
            official_email: EMAIL,
            message: error.message || "Internal Server Error"
        });
    }
});

module.exports = router;
