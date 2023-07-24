module.exports = {
    async redirects() {
      return [
        {
          source: 'https://gabriel-ribeiro.com/about',
          destination: 'https://gabriel-ribeiro.com/sobre',
          permanent: true,
        },
        {
          source: 'https://gabriel-ribeiro.com/resume',
          destination: 'https://gabriel-ribeiro.com/curriculo',
          permanent: true,
        },
        {
          source: 'https://gabriel-ribeiro.com/projects',
          destination: 'https://gabriel-ribeiro.com/case',
          permanent: true,
        },
      ];
    },
  };
  
  