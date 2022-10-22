import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import _ from 'underscore';

const itemComparison = ({ showModal, detailItem, relatedItem, toggleModal }) => {
  const getFeatures = (item1, item2) => {
    const featureArray = item1.features.concat(item2.features);
    return featureArray;
  };
  const findValueDetail = (target) => {
    for (let i = 0; i < detailItem.features.length; i += 1) {
      if (detailItem.features[i].feature === target) {
        return detailItem.features[i].value;
      }
    }
    return '';
    // at each position, if features.feature matches the target, return the value.
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
          <thead>
            <tr>
              <th>{detailItem.name}</th>
              <th>Comparison</th>
              <th>{relatedItem.name}</th>
            </tr>
          </thead>
          <tbody>
            {getFeatures(detailItem, relatedItem).map((feature) => (
              <tr>
                <td>{findValueDetail(feature.feature)}</td>
                <td>{feature.feature}</td>
                <td>{findValueRelated(feature.feature)}</td>
              </tr>
            ))}
          </tbody>
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
`;
const Table = styled.table`

`;
