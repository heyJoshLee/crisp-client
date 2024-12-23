const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@pages': path.resolve(__dirname, 'src/pages'),       // Alias for pages
      '@shared': path.resolve(__dirname, 'src/shared'),     // Alias for shared
      '@components': path.resolve(__dirname, 'src/components'), 
      '@apis': path.resolve(__dirname, 'src/lib/apis'),
      '@resourcesApi': path.resolve(__dirname, 'src/lib/api/resources'),
    },
  },
};
