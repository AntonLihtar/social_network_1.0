import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {compose} from "redux";
import {getProfile} from "../../redux/profileReducer";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

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
        this.props.getProfile(id)
    }

    render() {
        return <Profile {...this.props}/>
    }
};

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})


// const authRedirectComponent = withAuthRedirect(ProfileContainer)
// export default connect(mapStateToProps, {getProfile})(withRouter(authRedirectComponent))

export default compose(
  connect(mapStateToProps, {getProfile}),
  withRouter,
  withAuthRedirect
)(ProfileContainer)