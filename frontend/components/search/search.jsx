import React from 'react';
import {Link} from 'react-router-dom'


class Search extends React.Component{
    constructor(props){
        super(props)
        this.state={
            category:'',
            city:''
        }
  
    }

    Searchit(c){
        let arr = ["american", "American", "AMERICAN", "BAR", "bar", "bars", "Bar", "Japanese", "japanese", "Healthy", "healthy"]
        if(arr.includes(c)) return c;
        else return ''
      
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

   
    render(){
        return(
            <div className="homes-bar">
                <div className="home-flex">
                    <div className="home-title">Categories</div>
                    <input
                        value={this.state.category}
                        className="business-s"
                        type="text"
                        placeholder="American, Bars, Healthy, Japanese"
                        onChange = {this.update('category')}
                    />
                </div>
                <div className="s-flex">
                    <div className="s-flex-input">
                        <div className="s-flex-n">City</div>
                        <input
                            value= {this.state.city}
                            className="busi-s"
                            type="text"
                            placeholder="San Francisco"
                            onChange = {this.update('city')}
                        />
                    </div>
                    <Link to={`/businesses/${this.Searchit(this.state.category)}`}>
                        <button className="s-submit">
                            <i className="fas fa-search" />
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}


export default Search