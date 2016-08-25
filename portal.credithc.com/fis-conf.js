// default settings. fis3 release
fis
  .media('dev')

  .match('**', {
    useHash: false
  });


// fis3 release production
fis
  .media('production')

  .match('*.js', {
    optimizer: fis.plugin('uglify-js')
  })

  .match('*.{css,scss}', {
    optimizer: fis.plugin('clean-css')
  })

  .match('*.png', {
    optimizer: fis.plugin('png-compressor')
  });

  
fis
  .media('qa')
  .match('*', {
      deploy: fis.plugin('http-push', {
        receiver: 'http://10.100.1.81/receiver.php',
        to: '/usr/share/nginx/html/' // 注意这个是指的是测试机器的路径，而非本地机器
      })
   });

fis
  .media('live')
  .match('*', {
      deploy: fis.plugin('http-push', {
        receiver: 'http://10.100.1.27/receiver.php',
        to: '/var/www/html/' // 注意这个是指的是测试机器的路径，而非本地机器
      })
   });