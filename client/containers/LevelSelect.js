import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { changeLevel } from '../actions/index';
import { bindActionCreators } from 'redux';

class LevelSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  };

  componentDidMount() {
    this.levels = [
      '01-identity',
      '02-first'
    ];

    function closure(savedIndex) {
      return function() {
        this.props.changeLevel({'currentLevel': this.levels[savedIndex]});
      }.bind(this);
    };

    for (var i = 0; i < 10; i++) {
      $("#selectLevel" + i).click(closure.call(this, i));
    }
  }


  render() {
    return (
      <div className="container">
        <div className="dropdown pull-right">
          <button className="btn btn-info btn-raised dropdown-toggle" type="button" id="menu1" data-toggle="dropdown">Level Select
          <span className="caret"></span></button>
          <ul className="dropdown-menu" role="menu" aria-labelledby="menu1">
            <li role="presentation"><span tabIndex="-1">JavaScript</span></li>
            <li role="presentation" className="divider"></li>
            <li role="presentation"><a role="menuitem" tabIndex="-1" id="selectLevel0" href="#">Level 1</a></li>
            <li role="presentation"><a role="menuitem" tabIndex="-1" id="selectLevel1" href="#">Level 2</a></li>
            <li role="presentation"><a role="menuitem" tabIndex="-1" id="selectLevel2" href="#">Level 3</a></li>
            <li role="presentation"><a role="menuitem" tabIndex="-1" id="selectLevel3" href="#">Level 4</a></li>
            <li role="presentation"><a role="menuitem" tabIndex="-1" id="selectLevel4" href="#">Level 5</a></li>
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({changeLevel: changeLevel}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LevelSelect);