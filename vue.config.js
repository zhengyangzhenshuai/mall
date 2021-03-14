// module.exports = {
//     configWebpack: {
//         resolve: {
//             alaias:{
//                 'assets':'src/assets',
//                 'common':'src/common',
//                 'components':'src/components',
//                 'network':'src/network',
//                 'views':'src/views'
//             }
//         }
//     }
// }
const path = require('path');

function resolve(dir) {
    return path.join(__dirname,dir)
}
//在此文件中修改别名
module.exports = {
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@',resolve('src'))
            .set('assets',resolve('src/assets'))
            .set('components',resolve('src/components'))
            .set('views',resolve('src/views'))
            .set('network',resolve('src/network'))
    }
}