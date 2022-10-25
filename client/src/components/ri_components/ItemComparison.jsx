import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import _ from 'underscore';

const itemComparison = ({ showModal, detailItem, relatedItem, toggleModal }) => {
  const getFeatures = (item1, item2) => {
    const array1 = item1.features?.map((item) => item.feature);
    const array2 = item2.features?.map((item) => item.feature);

    const featureArray = _.uniq(array1.concat(array2));
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
        if (relatedItem.features[i].value === true) {
          return '&#10004';
        }
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
              <Head>{detailItem.name}</Head>
              <Head>Comparison</Head>
              <Head>{relatedItem.name}</Head>
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
  transform: translate(-50%, -50%);
  background: #E4EBE0;;
  border-radius: 10px;
  padding: 5px solid;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
`;

const Table = styled.table`
  border-collapse: collapse;
  min-width: 400px;
`;

const TableHead = styled.thead`
  text-align: left;
`

const TableBody = styled.tbody`
`

const Head = styled.th`
`

const Data = styled.td`
`
