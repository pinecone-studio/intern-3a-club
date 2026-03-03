import React from 'react';
import { render, screen } from '@testing-library/react';
import type { AppProps } from 'next/app';
import type { Router } from 'next/router';
import App from 'pages/_app';
import '@testing-library/jest-dom';

describe('App Component', () => {
  it('дамжуулсан компонентыг зөв render хийх ёстой', () => {
    // 1. Тест хийхэд ашиглах хуурамч компонент
    const MockComponent: React.ComponentType = () => <h1>Тест гарчиг</h1>;

    // 2. Роутерийг Mock хийх
    // 'unknown' ашиглан хөрвүүлэх нь төрлийн зөрүүг (missing 23+ properties) алгасах цорын ганц цэвэр арга юм.
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
    } as unknown as Router; // Энд 'Router' (not NextRouter) ашиглана

    // 3. pageProps бэлдэх
    const pageProps = { someProp: 'test' };

    // 4. AppProps-ийг бүтээх
    const mockAppProps: AppProps = {
      Component: MockComponent,
      pageProps,
      router: mockRouter,
    };

    // 5. Render хийх
    render(<App {...mockAppProps} />);

    // 6. Шалгах
    expect(screen.getByText('Тест гарчиг')).toBeInTheDocument();
  });
});
