import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const a = [
    { name: "test", values: ["a", "b", "c"] },
    { name: "test2", values: ["a1", "b1", "c1"] }
];

const TeamTable = (players) => {
    
    const teamsplitter = players;
    players.sort(() => 0.5 - Math.random())
    const halfwayThrough = Math.floor(players.length / 2)

    const arrayFirstHalf = players.slice(0, halfwayThrough);
    const arraySecondHalf = players.slice(halfwayThrough, players.length);
    const teams = [arrayFirstHalf, arraySecondHalf];
    return (
        <Table>
            <TableHead>
                <TableRow>
                    {a.map((column, index) => (
                        <TableCell key={index}>Team</TableCell>
                    ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {a[0].values.map((_, rowIndex) => (
                    <TableRow key={rowIndex}>
                        {a.map((row, colIndex) => (
                            <TableCell key={colIndex}>{row.values[rowIndex]}</TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};


export default TeamTable;