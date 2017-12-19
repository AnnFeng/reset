// fis.match('::packager', {
//   spriter: fis.plugin('csssprites')
// });
fis.match('*', { deploy: fis.plugin('local-deliver', { to: '../output' }) })
fis.match('*', {
    domain: '.'
        // domain: '//i0.beta.ulecdn.com'
});
// fis.match('j/(**.js)', {
//     url: '/app/yxd/j/temai/$1'
// });
// fis.match('c/(*.css)', {
//     url: '/app/yxd/c/temai/$1'
// });

fis.match('i/(*.{jpg,png,gif})', {
    // url: '/app/yxd/i/temai/$1'
    // url: 'i/$1'
});



fis.match('*.js', {
    optimizer: fis.plugin('uglify-js')
});

// fis.match('*.css', {
//   useSprite: true,
//   optimizer: fis.plugin('clean-css')
// });

// require("fis3-deploy-ftp")
// fis.match('*.png', {
//   optimizer: fis.plugin('png-compressor')
// });

fis.match('*.css', {
    // fis-optimizer-clean-css 插件进行压缩，已内置
    // optimizer: fis.plugin('clean-css')
});
fis.match('*.png', {
    // fis-optimizer-png-compressor 插件进行压缩，已内置
    optimizer: fis.plugin('png-compressor')
});
// 启用 fis-spriter-csssprites 插件
fis.match('::package', {
    spriter: fis.plugin('csssprites')
})

// 对 CSS 进行图片合并
fis.match('*.css', {
    // 给匹配到的文件分配属性 `useSprite`
    useSprite: true
});
fis.media('upload').match('**', {
    deploy: fis.plugin('sftp', {
        console: true,
        cache: true, // 是否开启上传列表缓存，开启后支持跳过未修改文件，默认：true
        remoteDir: '/data/webroot/j/event/2016/0713', // 远程文件目录，注意！！！设置错误将导致文件被覆盖
        connect: {
            host: '172.25.200.32',
            port: '22',
            user: 'web',
            password: 'web'
        }
    })
});
