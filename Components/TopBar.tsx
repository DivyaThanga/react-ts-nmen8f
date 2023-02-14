import React from 'react';

export const TopBar = () => {
  const styles = {
    section: {
      display: 'flex',
      justifyContent: 'space-around',
      backgroundColor: 'black',
      color: 'white',
      cursor: 'pointer',
    },
    h1: {
      fontSize: '26px',
      fontWeight: '400',
    },
    span: {
      color: 'rgb(244, 114, 114)',
    },
    ul: {
      display: 'flex',
      justifyContent: 'space-around',
      margin: '28px 0px',
    },
    li: {
      listStyle: 'none',
      paddingLeft: '4rem',
      fontSize: '14px',
      fontWeight: '400',
    },
  };

  return (
    <section style={styles.section}>
      <div>
        <h1 style={styles.h1}>
          Div<span style={styles.span}>as</span>
        </h1>
      </div>
      <div>
        <ul style={styles.ul}>
          <li style={styles.li}>Home</li>
          <li style={styles.li}>About</li>
          <li style={styles.li}>Service</li>
          <li style={styles.li}>Contact</li>
        </ul>
      </div>
    </section>
  );
};
