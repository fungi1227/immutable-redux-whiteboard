import React from 'react';
import { Header } from './header';
import { PersonComponent } from './person';
import { DateComponent } from './date';
import { RecordsTableComponent } from './recordstable';

export function Application(props) {
  const { application } = props;
  return (
    <div>
      <Header />
      <PersonComponent />
      <DateComponent />
      <RecordsTableComponent person={'chad'} />
    </div>
  );
}
