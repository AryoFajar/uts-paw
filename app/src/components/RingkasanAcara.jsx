export default function RingkasanAcara({
    totalAcara = 0,
    jumlahAcaraYangDitampilkan = 0,
}) {
    return (
        <section>
            <div className="ringkasan-acara">
                <h2>Ringkasan Acara</h2>
                <p>Total Acara: {totalAcara}</p>
                <p>Jumlah Acara yang Ditampilkan: {jumlahAcaraYangDitampilkan}</p>
            </div>
        </section>
    )
}