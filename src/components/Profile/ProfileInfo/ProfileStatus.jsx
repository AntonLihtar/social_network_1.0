import React from 'react';
import {usersAPI} from "../../../api/api";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({editMode: true})
    }

    deactivateEditMode = () => {
        this.setState({editMode: false})
        this.props.setProfileStatus(this.state.status)
    }

    onStatusChange = (e) => {
        e.preventDefault()
        this.setState({status: e.target.value})
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        console.log("render")
        return (
          <div>
              {
                  !this.state.editMode
                    ? <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || "status NULL"}</span>
                    </div>
                    : <div>
                        <input
                          onChange={this.onStatusChange}
                          onBlur={this.deactivateEditMode}
                          value={this.state.status}
                          autoFocus={true}
                        />
                    </div>
              }

          </div>
        )
    }
}

export default ProfileStatus;