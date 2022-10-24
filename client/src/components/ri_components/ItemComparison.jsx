import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import _ from 'underscore';

const itemComparison = ({ showModal, detailItem, relatedItem, toggleModal }) => {
  const getFeatures = (item1, item2) => {
    const array1 = item1.features?.map((item) => item.feature);
    const array2 = item2.features?.map((item) => item.feature);

    const featureArray = _.uniq(array1.concat(array2));
    console.log(featureArray);
    return featureArray;
  };
  const findValueDetail = (target) => {
    for (let i = 0; i < detailItem.features.length; i += 1) {
      if (detailItem.features[i].feature === target) {
        return detailItem.features[i].value;
      }
    }
    return '';
  };

  const findValueRelated = (target) => {
    for (let i = 0; i < relatedItem.features.length; i += 1) {
      if (relatedItem.features[i].feature === target) {
        return relatedItem.features[i].value;
      }
    }
    return '';
  };

  if (showModal) {
    return (
      <Modal onClick={() => toggleModal()}>
        <Table>
          <TableHead>
            <tr>
              <th>{detailItem.name}</th>
              <th>Comparison</th>
              <th>{relatedItem.name}</th>
            </tr>
          </TableHead>
          <TableBody>
            {getFeatures(detailItem, relatedItem).map((feature) => (
              <tr>
                <td>{findValueDetail(feature)}</td>
                <td>{feature}</td>
                <td>{findValueRelated(feature)}</td>
              </tr>
            ))}
          </TableBody>
        </Table>
      </Modal>
    );
  }
};

export default itemComparison;

const Modal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  background: #FFFFFF;
  z-index: 1;
`;

const Table = styled.table`
  border-collapse: collapse;
`;

const TableHead = styled.thead`
`

const TableBody = styled.tbody`
`
