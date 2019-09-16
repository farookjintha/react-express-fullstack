import React from 'react';
import { connect } from 'react-redux';
import { ConnectedTaskList } from './TaskList'

export const Dashboard = ({groups}) => (
    <div>
        <h1>Dashboard</h1>
        {
            groups.map(group => (
            <ConnectedTaskList key = {group.id}id = {group.id} name = {group.name}/>)
            )
        }
    </div>

);

function mapStateToProps(state){
    return {
        groups: state.groups
    }
}

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);