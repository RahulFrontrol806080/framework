import React, { Component } from 'react';
import { connect } from 'react-redux';


export const CFConnect = (WrappedComponent:any, selector:any) => {
    class BaseComponentGroup extends Component {
        constructor(props:any) {
            super(props);
            this.state = {
            };

            this.executeQuery = this.executeQuery.bind(this);
            this.executeSave = this.executeSave.bind(this);
            this.executeAction = this.executeAction.bind(this);
            this.initializeStore = this.initializeStore.bind(this);
        }

        initializeStore(displayData:any, queriedData:any) {
            console.log('initializeStore')
        
        }

        executeAction(callback:any, params:any) {
          
            //this.dispatch(SimpleReAction(callback,params));
        }

        executeQuery(request:any) {
            
            
        }

        executeSave(request:any) {
            
        }


        render() {
            return (
                <div >
                    <WrappedComponent {...this.props}
                        executeAction={this.executeAction}
                        executeQuery={this.executeQuery}
                        executeSave={this.executeSave}
                        initializeStore={this.initializeStore}
                    />
                </div>
            );
        }

    };

    const mapStateToProps = (store:any, ownProps:any) => {
        console.log("mapStateToProps");
        console.log(ownProps)
        console.log(store)
        if (!ownProps.selector && !selector) return store; // return only the cfid data here.
        let newProps = ownProps.selector ? ownProps.selector(store.base, ownProps) : selector(store.base, ownProps);
        console.log(newProps)
        return newProps;
    };

    return connect(mapStateToProps)(BaseComponentGroup);
}