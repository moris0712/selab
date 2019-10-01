import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Menu, MenuItem, Button } from '@material-ui/core';
import Intern from './members/Intern';
import { HashRouter as Router, Route } from 'react-router-dom';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';


class Members extends React.Component {
    render() {
        return (
            <div>
                <Button>
                    <Link component={RouterLink} to="/members/intern">
                            Intern
                    </Link>
                </Button>
            </div>
        );
    }
}

export default Members;