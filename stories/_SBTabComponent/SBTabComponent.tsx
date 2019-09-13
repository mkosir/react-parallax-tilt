import React, { FC, useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

import imgJSX from './img/jsx.png';
import imgSass from './img/sass.png';

type Props = {
  /**
   * JSX code.
   */
  jsx: string;
  /**
   * SCSS code.
   */
  scss?: string;
};

const TabComponent: FC<Props> = ({ jsx, scss, children }) => {
  const [tabIndex, setTabIndex] = useLocalStorage('storybook-rpt', 0);
  return (
    <Tabs defaultIndex={tabIndex} onSelect={index => setTabIndex(index)}>
      <TabList>
        <Tab>Demo</Tab>
        <Tab>Code</Tab>
      </TabList>
      <TabPanel className="demo">{children}</TabPanel>
      <TabPanel>
        <Tabs>
          <TabList>
            <Tab>
              <img src={imgJSX} height="30" />
            </Tab>
            {scss && (
              <Tab>
                <img src={imgSass} height="30" />
              </Tab>
            )}
          </TabList>
          <TabPanel>
            <SyntaxHighlighter language="jsx" style={prism}>
              {jsx}
            </SyntaxHighlighter>
          </TabPanel>
          {scss && (
            <TabPanel>
              <SyntaxHighlighter language="scss" style={prism}>
                {scss}
              </SyntaxHighlighter>
            </TabPanel>
          )}
        </Tabs>
      </TabPanel>
    </Tabs>
  );
};

export default TabComponent;

const useLocalStorage = (key: string, initialValue: number = null) => {
  const [value, setValue] = useState(JSON.parse(localStorage.getItem(key)) || initialValue);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  });
  return [value, setValue];
};
