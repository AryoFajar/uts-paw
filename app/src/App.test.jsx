import { render, screen, fireEvent  } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { expect, test, vi } from 'vitest'
import App from './App.jsx'
import data from '../public/data/koleksi.json'

/* Contoh test. Tambahkan minimal 5 test buatan sendiri (butir rubrik F1).
test('rute tidak dikenal menampilkan 404', () => {
  render(
    <MemoryRouter initialEntries={['/tidak-ada']}>
      <App />
    </MemoryRouter>,
  )
  expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument()
}) */

vi.stubGlobal('fetch', async () => ({ ok: true, json: async () => data }))

function buka(rute) {
  render(
    <MemoryRouter initialEntries={[rute]}>
      <App />
    </MemoryRouter>,
  )
}

test('rute tidak dikenal menampilkan 404', () => {
  buka('/tidak-ada')
  expect(screen.getByText('404')).toBeInTheDocument()
})

test('halaman tentang menampilkan NIM', () => {
  buka('/tentang')
  expect(screen.getByText('124140012')).toBeInTheDocument()
})

test('halaman koleksi menampilkan acara', async () => {
  buka('/koleksi')
  expect(
    await screen.findByText('parade riuh wisuda terpusat 2026'),
  ).toBeInTheDocument()
})

test('detail dengan id salah menampilkan tidak ditemukan', async () => {
  buka('/koleksi/999')
  expect(
    await screen.findByText(/tidak ditemukan/i),
  ).toBeInTheDocument()
})

test('form tambah menolak judul kosong', () => {
  buka('/tambah')
  fireEvent.click(screen.getByText('Simpan'))
  expect(screen.getByRole('alert')).toHaveTextContent(
    'Judul wajib diisi, minimal 3 karakter.',
  )
})

test('form tambah menolak judul kurang dari 3 karakter', () => {
  buka('/tambah')
  fireEvent.change(screen.getByLabelText('Judul'), {
    target: { value: 'AB' },
  })
  fireEvent.click(screen.getByText('Simpan'))
  expect(screen.getByRole('alert')).toHaveTextContent(
    'Judul wajib diisi, minimal 3 karakter.',
  )
})