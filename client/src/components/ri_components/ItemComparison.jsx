import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const itemComparison = ({ showModal, setShowModal }) => {
  return (
    showModal &&
    <div className="comparison-modal">
      TRUE
    </div>
  )
}

export default itemComparison;