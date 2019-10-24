// Is it a palindrome?

function isPalindrome(x) {
    // your code here
    const reversed=x.toLowerCase()
          .split('')
          .reverse()
          .join('')
  
          return x.toLowerCase() ===reversed
          }