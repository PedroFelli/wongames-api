/**
 *
 * LeftMenuFooter
 *
 */

import React from 'react';

import Wrapper from './Wrapper';

function LeftMenuFooter({ version }) {
  return (
    <Wrapper>
      <div className="poweredBy">
        <a key="website" href="https://strapi.io" target="_blank" rel="noopener noreferrer">
          React Avançado
        </a>
      </div>
    </Wrapper>
  );
}


export default LeftMenuFooter;
