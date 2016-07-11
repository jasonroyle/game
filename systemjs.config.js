(function() {

  System.config({
    map: {
      'socket.io-client': '/node_modules/socket.io-client/socket.io.js'
    },
    packages: {
      app: {
        main: 'main.js',
        defaultExtension: 'js'
      }
    }
  });

})(this);
