import React from 'react'
import { css } from '@emotion/react';
import { BeatLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
`;

const Loading = () => {
  return (
    <div className='w-screen h-screen absolute z-10 flex justify-center items-center bg-[#9d939573]'>

    <BeatLoader css={override} size={15} color={"red"} loading={true} />
    </div>
  )
}

export default Loading