let React = require('react');

let Link = require('react-router').Link;

let Menu = React.createClass({
    render() {
        return (
            <div className="ui menu">
                <Link to="home" className="orange item">
                    <i className="home icon"></i>
                    Home
                </Link>
                <Link to="about" className="orange item">
                    <i className="bomb icon"></i>
                    About
                </Link>
            </div>
        )
    }
});

export default Menu;