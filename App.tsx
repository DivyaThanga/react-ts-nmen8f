import * as React from 'react';
import './style.css';
import { TopBar } from './Components/TopBar';
import { Banner } from './Components/Banner';
import { Service } from './Components/Service';

export default function App() {
  return (
    <div>
      <TopBar />
      <Banner />
      <Service />
    </div>
  );
}
