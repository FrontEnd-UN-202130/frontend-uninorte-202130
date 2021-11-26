import DataTable from 'react-data-table-component';

/* eslint-disable-next-line */
export interface DatatableProps { columns: any, data: any, [rest: string]: any }

const customStyles = {
  headRow: {
    style: {
      border: 'none',
    },
  },
  headCells: {
    style: {
      color: '#202124',
      fontSize: '14px',
    },
  },
  rows: {
    highlightOnHoverStyle: {
      backgroundColor: 'rgb(230, 244, 244)',
      borderBottomColor: '#FFFFFF',
      borderRadius: '25px',
      outline: '1px solid #FFFFFF',
    },
    style: {
      padding: '20px',
    }
  },
  pagination: {
    style: {
      border: 'none',
    },
  },

};
export function Datatable(props: DatatableProps) {
  const { columns, data, ...rest } = props;
  return (
    <DataTable
      columns={columns}
      data={data}
      customStyles={customStyles}
      pagination
      dense
      {...rest}
    />
  );
}

export default Datatable;
