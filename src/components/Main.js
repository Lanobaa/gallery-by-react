require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

//获取图片相关的数据
var imageDatas = require('../data/imageDatas.json');

//利用自执行函数，将图片名信息，转成图片url路径信息
imageDatas = (function genImageURL(imageDatasArr){
    for (var i=0,j=imageDatasArr.length;i<j;i++){
        var singleImgData = imageDatasArr[i];
        singleImgData.imageURL = require('../images/' + singleImgData.fileName );

        imageDatasArr[i] = singleImgData;
    }
    return imageDatasArr;
})(imageDatas);

var GalleryByReactApp = React.createClass({
    render : function(){
        return (
            <section className="stage">
                <section className="img-sec"></section>
                <nav className="controller-nav"></nav>
            </section>
        )
    }
});

class AppComponent extends React.Component {
  render() {
    return (
      <GalleryByReactApp/>
    );
  }
}

GalleryByReactApp.defaultProps = {
};

export default GalleryByReactApp;
