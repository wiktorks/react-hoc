import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';

import withProgressReadingBar from './withProgressReadingBar';
import SampleComponent from '../../components/SampleComponent/SampleComponent';

configure({adapter: new Adapter()});

describe('<withProgressReadingBar /> container', () => {
    let wrapper;
    
    beforeEach(() => {
      let ReadingBar = withProgressReadingBar(SampleComponent);
      wrapper = shallow(<ReadingBar />);
    });
    it('Should render <SampleComponent /> once', () => {
      expect(wrapper.find(SampleComponent)).toHaveLength(1);
    });
  });
  