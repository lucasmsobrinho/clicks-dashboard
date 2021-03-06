import React from 'react';

const RawClicksDataTable = ({clickData}) => {
    const clickDataRows = clickData.map((click) => {
        return (
                <tr key={click.id}>
                    <td>{click.id}</td>
                    <td>{click.timestamp}</td>
                    <td>{click.onTarget? "true" : "false"}</td>
                    <td>{click.targetPosX}</td>
                    <td>{click.targetPosY}</td>
                    <td>{click.clickPosX}</td>
                    <td>{click.clickPosY}</td>
                    <td>{click.clickSpeed}</td>
                    <td>{click.clickDistance}</td>
                    <td>{click.onTargetClickSpeed}</td>
                </tr>
        )}
    )
    return (
        <>
            <center>Raw Data Clicks Table</center>
            <table>
                <tbody>
                <tr>
                    <th>clickID</th>
                    <th>timestamp</th>
                    <th>onTarget?</th>
                    <th>targetPosX</th>
                    <th>targetPosY</th>
                    <th>clickPosX</th>
                    <th>clickPosY</th>
                    <th>clickSpeed</th>
                    <th>clickDistance</th>
                    <th>onTargetClickSpeed</th>
                </tr>
                {clickDataRows}
                </tbody>
            </table>
        </>
    );
};

export default RawClicksDataTable;