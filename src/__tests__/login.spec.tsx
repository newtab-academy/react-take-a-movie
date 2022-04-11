import React from 'react';
import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';

import Login from '../pages/Login';


describe('Testes de renderizacão de componentes de UI', () => {
    const history = createMemoryHistory();

    beforeEach(() => {
        render(
            <Router navigator={history} location={''} >
                <Login />
            </Router>
        );
    });

    it('Testar a renderizacão da page', () => {
        const div = screen.getByTestId('root-login');
        expect(div).toBeInTheDocument();
    });

    it('Testar a renderizacão do titulo', () => {
        const take = screen.getByText(/TAKE A/i);
        expect(take).toBeInTheDocument();

        const movie = screen.getByText('MOVIE');
        expect(movie).toBeInTheDocument();
    });

    it("Deve ser possivel exibir a image na page", () => {
        const image = screen.queryByAltText(/movie/i);
        expect(image).toBeInTheDocument();
    });

    it("Deve ser possivel exibir o elemento button na page", () => {
        const button = screen.getByText(/Go to my movies!/i);
        expect(button).toBeInTheDocument();
    });

    it("Deve ser possivel exibir o elemento link na page", () => {
        const button = screen.getByText(/Create an account/i);
        expect(button).toBeInTheDocument();
    });
});


describe('Testes de gatilhos de eventos', () => {
    const history = createMemoryHistory();

    beforeEach(() => {
        render(
            <Router navigator={history} location={''} >
                <Login />
            </Router>
        );
    });

    it('Testando se o input de email está ok', () => {
        const emailValue = 'test@email.com';
        const email = screen.getByTestId('form-email');

        userEvent.type(email, emailValue);

        expect(email.ariaValueText);
    });

    it('Testando se o input de password está ok', () => {
        const passwordValue = 'seguro';
        const password = screen.getByTestId('form-password');
        userEvent.type(password, passwordValue);

        expect(password.ariaValueText);
    });

    it('Testando um click em Go to my movies!', () => {
        const click = { button : 0 };
        const button = screen.getByText(/Go to my movies!/i);
        expect(userEvent.click(button, click));
    });

    it('Testando um click em Create an Account', () => {
        const click = { button : 0 };
        const button = screen.getByText(/Create an account/i);

        expect(userEvent.click(button, click));
    });
});
