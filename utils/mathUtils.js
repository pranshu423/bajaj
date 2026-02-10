// Utility functions for BFHL API

const isPrime = (num) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
};

const getFibonacciSequence = (n) => {
    if (typeof n !== 'number' || n < 0) return [];
    if (n === 0) return []; // Interpretation: 0 items
    if (n === 1) return [0];
    
    const sequence = [0, 1];
    while (sequence.length < n) {
        const next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(next);
    }
    return sequence;
};

const calculateLCM = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) return null;
    
    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
    const lcm = (a, b) => (Math.abs(a * b) / gcd(a, b));

    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result = lcm(result, arr[i]);
    }
    return result;
};

const calculateHCF = (arr) => {
    if (!Array.isArray(arr) || arr.length === 0) return null;

    const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result = gcd(result, arr[i]);
    }
    return result;
};

module.exports = {
    isPrime,
    getFibonacciSequence,
    calculateLCM,
    calculateHCF
};
