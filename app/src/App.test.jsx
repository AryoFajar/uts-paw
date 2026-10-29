import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { expect, test } from 'vitest'
import App from './App.jsx'

function buka(rute) {
  return render(
    <MemoryRouter initialEntries={[rute]}>
      <App />
    </MemoryRouter>,
  )
}

test('rute tidak dikenal menampilkan 404', async () => {
  buka('/tidak-ada')
  expect(screen.getByRole('heading', { name: '404' })).toBeInTheDocument()
})

test('Beranda menampilkan tema', async () => {
  buka('/')
  expect(screen.getByText('Agenda Kegiatan Kampus')).toBeInTheDocument()
})

test('Tambah menampilkan acara', async () => {
  buka('/tambah')
  expect(screen.getByRole('heading', { name: 'Tambah Acara' })).toBeInTheDocument()
})

test('Statistik menampilkan acara kegiatan', async () => {
  buka('/statistik')
  expect(screen.getByRole('heading', { name: 'Statistik' })).toBeInTheDocument()
})

test('Tentang menampilkan nama', async () => {
  buka('/tentang')
  expect(screen.getByText('ARYO FAJAR PRATOMO')).toBeInTheDocument()
})

test('Tentang menampilkan NIM', async () => {
  buka('/tentang')
  expect(screen.getByText('124140012')).toBeInTheDocument()
})