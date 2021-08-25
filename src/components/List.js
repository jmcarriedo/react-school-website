import React, { useContext } from 'react'
import { DataContext } from './DataProvider'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: 'black',
      color: theme.palette.common.white,
      padding: '10px 70px',
      align: 'center',
    },
    body: {
      fontSize: 12,
      align: 'center',
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
root: {
    '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
    },
},
}))(TableRow);


function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}
  

const useStyles = makeStyles({
    table: {
        width: '90%',
        marginLeft: '70px',
        align:'left',
    },
    firstcell: {
        width: 20,
        backgroundColor: 'yellow',
    },
    cell: {
        background: 'black',
    },
    paper: {
        position: 'absolute',
        width: 800,
        backgroundColor: 'whitesmoke',
        border: '2px solid #000',
        boxShadow: '0',
        padding: '20px',
      },
});


const List = () => {

    const classes = useStyles();
 
    const [data, setData] = useContext(DataContext);

    const removeItem = (id) => {
        if (window.confirm('Are you sure you want to delete this record?')) {
            const newItems = [...data].filter ( data => data.id !== id)
            setData(newItems)
        } else {
            return false;
        }
    }
   
    return (
        <div>
            <Table className={classes.table} stickyHeader aria-label="sticky table">
                <TableHead>
                    <StyledTableRow>
                        <StyledTableCell>Student ID</StyledTableCell>
                        <StyledTableCell>Last Name</StyledTableCell>
                        <StyledTableCell>First Name</StyledTableCell>
                        <StyledTableCell>Middle Name</StyledTableCell>
                        <StyledTableCell>Age Category</StyledTableCell>
                        <StyledTableCell>Contact Number</StyledTableCell>
                        <StyledTableCell></StyledTableCell>
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    <>
                        {
                            data.map ((data,index) => (
                            <StyledTableRow>
                                <TableCell>{data.id}</TableCell>
                                <TableCell>{data.childLastName}</TableCell>
                                <TableCell>{data.childFirstName}</TableCell>
                                <TableCell>{data.childMiddleName}</TableCell>
                                <TableCell>{data.age}</TableCell>
                                <TableCell>{data.contact}</TableCell>
                                <TableCell>
                                <button type="button" className='btn' style={{width:'50px'}}>
                                        <span><DeleteForeverIcon onClick={() => removeItem(data.id)}/> </span>
                                </button>   
                                </TableCell>
                            </StyledTableRow>
                            ))
                        }
                    </>
                </TableBody>
            </Table>
        </div>
    )
}

export default List
