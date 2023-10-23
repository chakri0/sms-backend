export default {
  app: {
    frontend: {
      baseUrl: 'http://localhost:5000'
    },
    backend: {
      baseUrl: 'http://localhost:3000',
      PORT: '3000'
    }
  },
  email: {
    host: "smtp.gmail.com",
    port: 587,
    fromEmail: "",
    secure: false,
    auth: {
      user: "",
      pass: "",
    },
    logger: true,
  },

  // developement sever
  server: 'development',
};
