module.exports={
  entry:'./js/entry.js',
  output:{
    filename:'bundle.js'
  },
  devtool:'source-map',
  devServer:{
    port:8088,
    inline:true
  },
  module:{
    loaders:[{
      test:/\.css$/,
      loader:'style!css'
    },{
      test:/\.js$/,
      loader:'react-hot!babel',
      exclude: /node_modules/
    }]
  }
};