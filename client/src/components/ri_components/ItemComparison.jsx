import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import _ from 'underscore';
import { toggleModal, getFeatures, findValues } from './relatedHelperFunctions.js';

const itemComparison = ({ showModal, setShowModal, detailItem, relatedItem }) => {
  if (showModal) {
    return (
      <ModalContainer onClick={(e) => { toggleModal(e, showModal, setShowModal); }}>
        <Modal onClick={(e) => { toggleModal(e, showModal, setShowModal); }}>
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
                  <td>{findValues(feature, detailItem)}</td>
                  <td>{feature}</td>
                  <td>{findValues(feature, relatedItem)}</td>
                </tr>
              ))}
            </TableBody>
          </Table>
        </Modal>
      </ModalContainer>
    );
  }
  return <div />;
};

export default itemComparison;

const ModalContainer = styled.div`
  // position: absolute;
  // width: 2000px;
  // height: 2000px;
  // background: black;
`;

const Modal = styled.div`
  position: fixed;
  padding: 10px 15px;
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
  padding: 5px;
`

const TableBody = styled.tbody`
`

const Head = styled.th`
`

const Data = styled.td`
`
