import React from 'react';
import './index.css';
import PropType from 'prop-types';

class ReactInput extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: '搜索'
        }
    }
    onChange = (e) => {
        this.setState({
            value: e.target.value
        });
    }
    onKeyDownEvent = (e) => {
        if(e.keyCode === 13) {
            const { onSearch } = this.props;
            const { value } = this.state;
            if(onSearch) {
                onSearch(value);
            }
        }
    }
    onButtonClick = () => {
        const { onSearch } = this.props;
        const { value } = this.state;
        if(onSearch) {
            onSearch(value);
        }
    }
    render(){
        return (
            <span>
                <input className="rt-input" onChange={this.onChange} onKeyDown={this.onKeyDownEvent} placeholder="请输入条件" type="text"/>
                <button className="rt-input-search-btn" onClick={this.onButtonClick}>搜索</button>
            </span>
        )
    }
}

ReactInput.propTypes = {
    onSearch: PropType.func
}
export default ReactInput;
