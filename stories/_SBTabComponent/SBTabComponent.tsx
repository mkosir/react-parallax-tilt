import React, { FC, useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism as aaa } from 'react-syntax-highlighter/dist/esm/styles/prism';

type Props = {
  /**
   * Demo code.
   */
  code: string;
};

const TabComponent: FC<Props> = ({ code, children }) => {
  const [tabIndex, setTabIndex] = useLocalStorage('storybook-rpt', 0);
  return (
    <Tabs defaultIndex={tabIndex} onSelect={index => setTabIndex(index)}>
      <TabList>
        <Tab>Demo</Tab>
        <Tab>Code</Tab>
      </TabList>
      <TabPanel className="demo">{children}</TabPanel>
      <TabPanel>
        <SyntaxHighlighter language="jsx" style={aaa}>
          {code}
        </SyntaxHighlighter>
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
