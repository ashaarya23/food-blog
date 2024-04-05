import React,{Component} from 'react';
import './Search.css';


const base_url = process.env.REACT_APP_API_URL;

// `${base_url}/location`
class Search extends Component {
        constructor(){
            super()
            this.state={
                location:'',
                restaurants:''
            }
        }

    renderCity = (data) =>{
        if(data){
            return data.map((item) =>{
                return(
                    <option value={item.state_id} key={item._id}>{item.state}</option>
                )
            })
        }
    }    

    renderRest = (data) =>{
        if(data){
            return data.map((item) =>{
                return(
                    <option value={item.restaurant_id} key={item._id}>{item.restaurant_name} | {item.address}</option>
                )
            })
        }
    }

    handleCity = (event) =>{
        let StateId = event.target.value;
        fetch(`${base_url}/restaurant?stateId=${StateId}`)
        .then((res) =>res.json())
        .then((data) => {
          // console.log(data);
          this.setState({restaurants:data})
        })
    }

    render(){
        //console.log(">>>>>> inside render")
        return(
            <div className="search">
                <div id="logo">
                    <span>D!</span>
                </div>
                <div id="heading">
                    Search Place Near To You
                </div>
                <div id="dropdown">
                    <select onChange={this.handleCity}>
                        <option>---Select City---</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select className='restSelect'>
                        <option>---Select Restaurants---</option>
                        {this.renderRest(this.state.restaurants)}
                    </select>
                </div>
            </div>
        )
    }

    

    componentDidMount(){
        fetch(`${base_url}/location`,{method: 'GET'})
        //return promise
        .then((res) =>  (res.json()))
        //return data
        .then((data)=>{
            //console.log(data);
            this.setState({location:data})
        })
        .catch((err) => {
           console.log(err)
        })
    }

}

export default Search;
