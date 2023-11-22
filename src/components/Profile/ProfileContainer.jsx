import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profileReducer";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";

// wrapper to use react router's v6 hooks in class component(to use HOC pattern, like in router v5)
// оболочка для использования перехватчиков реакции маршрутизатора v6 в компоненте класса
// (чтобы использовать шаблон HOC, как в маршрутизаторе v5)
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
          <Component
            {...props}
            router={{location, navigate, params}}
          />
        );
    }

    return ComponentWithRouterProp;
}


class ProfileContainer extends React.Component {

    componentDidMount() {

        let id = this.props.router.params.userId
        if (!id) {
            id = 2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${id}`)
          .then(response => {
              this.props.setUserProfile(response.data)
          })
    }

    render() {
        return <Profile {...this.props}/>
    }
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})


export default connect(mapStateToProps, {setUserProfile})(withRouter(ProfileContainer))