import React from 'react';
import { render } from '@testing-library/react';
import StaticText from '../StaticText';

describe('CampaignList', () => {
  it('renders without any error (theme: )', () => {
    expect(() => {
      render(<StaticText text="hello world" />);
    }).not.toThrow();
  });
});
