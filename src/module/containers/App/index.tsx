import React from 'react';
import { omit } from 'lodash';
import { Route, Switch } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import { Dispatch, bindActionCreators } from 'redux';
import { appActions } from '../../app-ducks/appActions';
import { connect } from 'react-redux';
import { ApplicationState } from '../../app-ducks/types';
import crowdFund from '../crowdFund';


class AppComponent extends React.Component<any, any>{

  public render() {
    return (
      <ConfigProvider >
        <Switch>
          <Route exact path='/' component={crowdFund} />

        </Switch>
      </ConfigProvider>
    );
  }
}

const mapStateToProps = (state: ApplicationState) => {
  return {
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    actions: {
      // tslint: disable no-any
      ...bindActionCreators(omit(appActions, ['Type']) as any, dispatch)
      // tslint: enable no-any
    }
  };
};

const App = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

export default (App);
