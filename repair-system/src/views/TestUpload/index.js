import React from 'react'
import Upload from '~/components/Upload'
import './index.scss'

class TestUpload extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            imgArr: []
        }
    }
    getUrl = (url)=> {
        let img_arr = [...this.state.imgArr];
        img_arr.push(url);
        this.setState({
            img_arr: img_arr
        })
    };
    render() {
        const {imgArr} = this.state
        return (
            <div className='test_upload'>
                测试上传功能
                <div className='img_box'>
                    {
                        imgArr.map((item,index)=> (
                            <img className='upload_img' src={item} key={index} alt=""/>
                        ))
                    }
                </div>
                <Upload success={this.getUrl}/>
            </div>
        )
    }
}

export default TestUpload