import React from 'react';
import './Tabs.css';

class Tabs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            sizes: {},
        }
        this.els = {};
    }


    componentDidMount(){
        this.getSizes()
    }

    getSizes(){
        var rootBounds = this.root.getBoundingClientRect();
        var sizes = {};
        Object.keys(this.els).forEach((key) => {
            var el = this.els[key];
            var bounds = el.getBoundingClientRect();
            var left = bounds.left - rootBounds.left ;
            var right = rootBounds.right - bounds.right;

            sizes[key] = { left, right};
        });
        this.setState({sizes});
        return sizes;
    }
    

    render(){
        return(
            <div className="Tabs"
            ref={el => this.root = el}>
                {React.Children.map(this.props.children, (child, i) => {
                    let className = `Tabs__Tab`;
                    if(child.key === this.props.active){
                        className = `${className} Tabs__Tab--active`;
                    }
                  return (
                      <div 
                      className={className}
                      onClick={() => {
                          this.props.onChange(child.key)
                      }}
                      ref={el => this.els[child.key] = el}
                      >
                          {child}
                      </div>
                  )
                })}
                <div
                className="Tabs__Underline"
                style={this.getUnderlineStyle()}
                />
            </div>
        )
    }
    getUnderlineStyle(){
        if(this.props.active == null || Object.keys(this.state.sizes).length === 0){
           return {left:0, right:'100%'};
        }
        var size = this.state.sizes[this.props.active];
        return {left: `${size.left}px`, right: `${size.right}px`}
    }
}
export default Tabs;