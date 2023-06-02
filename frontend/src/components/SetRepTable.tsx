import React, { useCallback, useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Input, Button } from '@chakra-ui/react';


interface Row {
    set : number,
    lbs : string,
    reps : string
}

export default function SetRepTable () {
  const [rows, setRows] = useState<Row[]>([]);

    const updateRowIndices = useCallback(() => {
        setRows((prevRows) =>
          prevRows.map((row, index) => ({
            ...row,
            set: index + 1,
          }))
        );
      }, []);

  const handleRowChange = (index : number, field : string, value : string) => {
    const updatedRows = [...rows];
    if (field == "lbs")  {
        updatedRows[index][field] = value;
    } else if (field == "reps") {
        updatedRows[index][field] = value;
    } else {
        console.log("ERROR: invalid update of set/rep table");
    }
    // console.log(updatedRows);
    // console.log(updatedRows[index]);

    setRows(updatedRows);
  };

  const handleAddRow = () => {
    const newRow = {
      set: rows.length + 1,
      lbs: '',
      reps: '',
    };
    setRows([...rows, newRow]);
  };

  const handleDeleteRow = (index : any) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
    updateRowIndices();
    
};


  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Set</Th>
          <Th>LBS</Th>
          <Th>Reps</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {rows.map((row, index) => (
          <Tr key={index}>
            <Td>{row.set}</Td>
            <Td>
              <Input
                type="number"
                value={row.lbs}
                onChange={(e) => handleRowChange(index, 'lbs', e.target.value)}
              />
            </Td>
            <Td>
              <Input
                type="number"
                value={row.reps}
                onChange={(e) => handleRowChange(index, 'reps', e.target.value)}
              />
            </Td>
            <Td>
              <Button onClick={() => handleDeleteRow(index)}>Delete</Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
      <tfoot>
        <Tr>
          <Td colSpan={4}>
            <Button onClick={handleAddRow}>Add Set</Button>
          </Td>
        </Tr>
      </tfoot>
    </Table>
  );
};