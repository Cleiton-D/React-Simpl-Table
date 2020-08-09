import React, { createContext, useState, useCallback, useContext } from 'react';

type TableColumn = {
  name: string;
  element(item: any): React.ReactElement;
  index: number;
};

type TableContextData = {
  registerColumn(column: TableColumn): void;
  getColumnByName(name: string): TableColumn | undefined;
  updateColumnIndex(data: Omit<TableColumn, 'element'>): void;
  getAllColumns(): TableColumn[];
};

const TableContext = createContext<TableContextData>({} as TableContextData);

const TableContextProvider: React.FC = ({ children }) => {
  const [columns, setColumns] = useState<TableColumn[]>([]);

  const registerColumn = useCallback(
    ({ name, element, index }: TableColumn) => {
      setColumns(oldColumns => [...oldColumns, { name, element, index }]);
    },
    [],
  );

  const getColumnByName = useCallback(
    (name: string) => columns.find(item => item.name === name),
    [columns],
  );

  const updateColumnIndex = useCallback(
    ({ name, index }: Omit<TableColumn, 'element'>) => {
      setColumns(oldColumns =>
        oldColumns.map(column => {
          if (column.name !== name) return column;

          return { ...column, index };
        }),
      );
    },
    [],
  );

  const getAllColumns = useCallback(() => columns, [columns]);

  return (
    <TableContext.Provider
      value={{
        getColumnByName,
        registerColumn,
        updateColumnIndex,
        getAllColumns,
      }}
    >
      {children}
    </TableContext.Provider>
  );
};

function useTable(): TableContextData {
  const context = useContext(TableContext);

  return context;
}

export { TableContextProvider, useTable };
