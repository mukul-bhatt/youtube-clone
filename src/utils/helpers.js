// src/utils/helpers.js

// Formats large numbers into compact strings (e.g., 1.2M, 15K)
export const formatViewCount = (count) => {
    if (count >= 1000000) {
      return (count / 1000000).toFixed(1) + 'M';
    }
    if (count >= 1000) {
      return (count / 1000).toFixed(0) + 'K';
    }
    return count.toString();
  };
  
  // Formats ISO 8601 date strings into "X time ago"
  export const formatTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);
  
    let interval = seconds / 31536000; // Years
    if (interval > 1) {
      return Math.floor(interval) + (Math.floor(interval) === 1 ? ' year ago' : ' years ago');
    }
    interval = seconds / 2592000; // Months
    if (interval > 1) {
      return Math.floor(interval) + (Math.floor(interval) === 1 ? ' month ago' : ' months ago');
    }
    interval = seconds / 86400; // Days
    if (interval > 1) {
      return Math.floor(interval) + (Math.floor(interval) === 1 ? ' day ago' : ' days ago');
    }
    interval = seconds / 3600; // Hours
    if (interval > 1) {
      return Math.floor(interval) + (Math.floor(interval) === 1 ? ' hour ago' : ' hours ago');
    }
    interval = seconds / 60; // Minutes
    if (interval > 1) {
      return Math.floor(interval) + (Math.floor(interval) === 1 ? ' minute ago' : ' minutes ago');
    }
    return Math.floor(seconds) + ' seconds ago';
  };