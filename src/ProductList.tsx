import {
  Button,
  H1,
  Panel,
  StatefulTable,
  TableFigure,
  Text
} from "@bigcommerce/big-design";
import { DeleteIcon } from "@bigcommerce/big-design-icons";
import React from "react";

import { Product } from "./data";

interface Props {
  products: Product[];
  onDelete(product: Product): void;
}

export const ProductList: React.FC<Props> = ({ onDelete, products }) => {
  const renderSerialColumn = ({ serial }: Product) =>
    serial === 0 ? <Text color="danger">{serial}</Text> : <Text>{serial}</Text>;

  const renderOnDelete = (product: Product) => (
    <Button
      variant="subtle"
      actionType="destructive"
      onClick={() => onDelete(product)}
      iconOnly={<DeleteIcon title="Delete Product" />}
    />
  );

  return (
    <>
      <H1 marginTop="xxLarge">Product List</H1>
      <Panel>
        <TableFigure>
          <StatefulTable
            columns={[
              { header: "Order", hash: "Order", render: ({ order }) => order },
              { header: "Model", hash: "model", render: ({ model }) => model },
              {
                header: "Brand",
                hash: "brand",
                render: ({ brand }) => brand
              },
              {
                header: "Serial",
                hash: "serial",
                render: renderSerialColumn
              },
              {
                header: "",
                align: "right",
                hash: "actions",
                render: renderOnDelete
              }
            ]}
            items={products}
            stickyHeader
          />
        </TableFigure>
      </Panel>
    </>
  );
};
