import { connect } from 'react-redux';
import React, { Component, PropTypes } from 'react';
import { Button } from 'react-bootstrap';
import { Glyphicon } from 'react-bootstrap';
import { deleteTask } from '../../actions/bot_queue';

class DeleteTaskBtn extends Component {

  constructor(props) {
    super(props);
    this.onClickAction = this.onClickAction.bind(this);
  }

  onClickAction() {
    this.props.dispatch(deleteTask(this.props.task));
  }

  render() {
    return (
      <div>
        <Button className='delete-chapter-level-btn' onClick={this.onClickAction}>
          <Glyphicon glyph='remove' className='delete-glyph'/>
        </Button>
      </div>
    );
  }
}

DeleteTaskBtn.propTypes = {
  dispatch: PropTypes.func.isRequired,
  style: PropTypes.object
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(DeleteTaskBtn);
