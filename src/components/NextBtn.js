import React from 'react';

export default function NextBtn({ onClick }) {
  return (
    <svg className='btn' data-slot="icon" onClick={onClick} fill="none" strokeWidth="1.5" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
<path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5"></path>
</svg>
    
  );
}
