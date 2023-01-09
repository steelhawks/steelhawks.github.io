import React, { forwardRef } from 'react';
import clickOutside from './clickOutside';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

const OurTeamDropdown = forwardRef(({ open, setOpen }, ref) => {
  return (
    <li className='m-0 w-fit' ref={ref}>
      <button
        className='navButton'
        onClick={() => {
          setOpen(!open);
        }}
      >
        Our Team <FontAwesomeIcon icon={solid('caret-down')} />
      </button>
      <div
        className={` ${
          open ? 'absolute' : 'hidden'
        } px-2 text-center rounded-md w-48 translate-x-[-1.75rem] h-fit`}
      >
        {open && (
          <ul>
            <li>
              <a href='/mentors'>Mentors</a>
            </li>
            <li>
              <a href='/leadership'>Leadership</a>
            </li>
            <li>
              <a href='/subteams'>Subteams</a>
            </li>
          </ul>
        )}
      </div>
    </li>
  );
});

export default clickOutside(OurTeamDropdown);
