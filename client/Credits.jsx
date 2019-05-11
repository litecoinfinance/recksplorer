import React from 'react';
import AppStyles from './App.css';
import LNTips from './LNTips.jsx';

var styles = {
    container:{
        padding: '5px',
        fontSize: '11px'
    },
}

export default class Credits extends React.Component {
    render() {
        return (
        <div style={styles.container}>
            <table className={AppStyles.datatable}>
                <tbody>
                    <tr>
                        <td>LTFN</td>
                        <td>NSZM6j8Q1ojnDg1PFNViaUkhjjT9ZcE7q7/td>
                    </tr>
                    <tr>
                        <td>LN</td>
                        <td><LNTips /></td>
                    </tr>
                    <tr>
                        <td>Source</td>
                        <td><a href="https://github.com/litecoinfinance/recksplorer" target="_blank">https://github.com/litecoinfinance/recksplorer</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
        );
    }
}
