import React,{Component} from 'react';
import DisplayOrder from './DisplayOrder';
import axios from 'axios';

const pUrl = process.env.REACT_APP_POST_API;

class ViewOrder extends Component{
    constructor(){
      super()
        this.state={
            orders:""
        }
    }
    render(){
      //console.log(this.state.orders);
      return(
        <>
          <DisplayOrder orderData={this.state.orders}/>
        </>
      )
    }

    componentDidMount(){
        axios.get(pUrl).then((res)=>{this.setState({orders:res.data})})
    }
}

export default ViewOrder;