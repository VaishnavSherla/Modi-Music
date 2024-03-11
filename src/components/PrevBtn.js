
import React from 'react';

export default function PrevBtn({ onClick }) {
  return (
    <svg className='btn' onClick={onClick} data-slot="icon" fill="none" strokeWidth="1.5" stroke="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"></path>
  </svg>
  );
}
