import React, {
  useState,
  useRef,
  useLayoutEffect,
  useEffect,
  useCallback,
  Props,
} from 'react';
import { useTable } from '../../hooks/table';

interface TableColumnProps<T> extends Props<void> {
  name: string;
  title?: string;
  render?(data: T): React.ReactElement;
}

function TableColumn<T>({
  children,
  name,
  title,
  render: customRender,
}: TableColumnProps<T>): React.ReactElement {
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

  const render = useCallback(
    (data: any) => {
      if (customRender) return customRender(data);
      return <>{data}</>;
    },
    [customRender],
  );

  useEffect(() => {
    if (!registered) {
      registerColumn({ name, index, render });
      setRegistered(true);
    } else if (registered && index !== -1) {
      updateColumnIndex({ name, index });
    }
  }, [index, name, render, registerColumn, updateColumnIndex, registered]);

  return <th ref={columnRef}>{title || children}</th>;
}

export default TableColumn;
