import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props: any) => {
  return (
    props.theme && (
      <ContentLoader
        speed={2}
        width={1100}
        height={450}
        viewBox="0 0 1100 450"
        backgroundColor={props.theme === 'dark' ? '#292929' : '#FAFAFA'}
        foregroundColor={props.theme === 'dark' ? '#585858e0' : '#f5f5f5eb'}
      >
        <rect x="0" y="0" rx="8" ry="8" width="240" height="240" />
        <rect x="280" y="0" rx="8" ry="8" width="396" height="110" />
        <rect x="280" y="120" rx="8" ry="8" width="396" height="110" />
        <rect x="696" y="0" rx="8" ry="8" width="396" height="110" />
        <rect x="0" y="281" rx="4" ry="4" width="220" height="18" />
        <rect x="0" y="320" rx="4" ry="4" width="132" height="11" />
        <rect x="0" y="353" rx="4" ry="4" width="145" height="11" />
        <rect x="0" y="384" rx="4" ry="4" width="116" height="11" />
      </ContentLoader>
    )
  );
};

export default MyLoader;
