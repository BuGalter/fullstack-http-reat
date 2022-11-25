import React from 'react';

const AppHeader = () => {
  const appHeaderProps = {
    text: 'Calendar with To-Do list'
  };

  return (
    <h1 className='app-header'>
      { appHeaderProps.text }
    </h1>
  );
}

export default AppHeader;