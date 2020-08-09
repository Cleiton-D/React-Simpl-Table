import React, { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { useTable } from 'hooks/table';

type TableColumnProps = {
  name: string;
  render(data: any): React.ReactElement;
};

const TableColumn: React.FC<TableColumnProps> = ({
  children,
  name,
  render,
}) => {
  const [registered, setRegistered] = useState(false);
  const [index, setIndex] = useState(-1);

  const { registerColumn, updateColumnIndex } = useTable();
  const columnRef = useRef<HTMLTableHeaderCellElement>(null);

  useLayoutEffect(() => {
    if (!columnRef.current) {
      setIndex(-1);
      return;
    }
    setIndex(columnRef.current.cellIndex);
  }, []);

  useEffect(() => {
    if (!registered) {
      registerColumn({ name, index, element: render });
      setRegistered(true);
    } else if (registered && index !== -1) {
      updateColumnIndex({ name, index });
    }
  }, [index, name, render, registerColumn, updateColumnIndex, registered]);

  return <th ref={columnRef}>{children}</th>;
};

export default TableColumn;
