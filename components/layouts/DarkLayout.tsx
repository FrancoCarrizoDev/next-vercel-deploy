import {  FunctionComponent, ReactNode } from "react";

interface props {
  children: JSX.Element | JSX.Element[] 
} 

export const DarkLayout: FunctionComponent<props> = ({ children }) => {
  return (
    <div style={{
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: '5px',
        padding: '10px',
    }}>
        <h3>Dark-Layout</h3>
        <div>
            { children } 
        </div>
    </div>
  );
};
