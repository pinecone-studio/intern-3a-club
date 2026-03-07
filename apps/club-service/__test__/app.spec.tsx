import React from 'react';
import { render, screen } from '@testing-library/react';
import type { AppProps } from 'next/app';
import type { Router } from 'next/router';
import App from 'pages/_app';
import '@testing-library/jest-dom';

describe('App Component', () => {
  it('дамжуулсан компонентыг зөв render хийх ёстой', () => {
    const MockComponent: React.ComponentType = () => <h1>Тест гарчиг</h1>;

    const mockRouter = {
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
      basePath: '',
      isReady: true,
      push: jest.fn().mockResolvedValue(true),
      replace: jest.fn().mockResolvedValue(true),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn().mockResolvedValue(undefined),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
    } as unknown as Router;

    const pageProps = { someProp: 'test' };

    const mockAppProps: AppProps = {
      Component: MockComponent,
      pageProps,
      router: mockRouter,
    };

    render(<App {...mockAppProps} />);

    expect(screen.getByText('Тест гарчиг')).toBeInTheDocument();
  });
});
