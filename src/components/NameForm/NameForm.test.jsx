import React from 'react';
import { render, screen } from '@testing-library/react'

import NameForm from '.';

describe('NameForm', () => {
    test('renders NameForm component', () => {
        render(<NameForm />)
        // screen.debug()

        expect(screen.getByText('Pendaftaran Peserta Coding Bootcamp')).toBeInTheDocument();
        expect(screen.getByLabelText(/Nama Lengkap/)).toBeInTheDocument();
    });
})